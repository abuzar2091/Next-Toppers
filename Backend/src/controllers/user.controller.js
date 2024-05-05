import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import wrapAsyncHandler from "../utils/wrapAsyncHandler.js";


const generateAccessAndRefreshToken = async (userId) => {
  try {
      const user = await User.findOne(userId);
      console.log(user);
      const accessToken = await user.generateAccessToken();
      console.log(accessToken);
      console.log("refresh");
      const refreshToken = await user.generateRefreshToken();

      console.log("re");
      console.log(refreshToken);
      user.refreshToken = refreshToken;
      await user.save({ validateBeforeSave: false }); //To bypass the validations for token generation
      return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(400,"Something went wrong while generating access and refresh token ",error);
    
  }
  };

const registerUser = wrapAsyncHandler(async (req, res, next) => {
    //   //get the user info from frontend
    //   //perform validation--not empty
    //   //check if user already exits:username ,email
    //   // get the local url and store it on the cloudinary
    //   // create user obj and save in db
    //   //remove password and refresh token from the respone
    //   //check for the user creation
    //   //return respone
   // console.log(req.body);
    console.log("lets start");
    // return res
    // .status(201)
    // .json(
    //   new ApiResponse(
    //     200,
    //     "user signup detail",
    //     "User Registered Successfully"
    //   )
    // );

    const { phoneNumber, email, password, fullName } = req.body;
    console.log(req.body);
    if (
      [phoneNumber, email, password,fullName].some((field) => field?.trim() === "")
    ) {
      throw new ApiError(400, "All fields are required");
    }
    const exitedUser = await User.findOne({
      $or: [{ fullName }, { email }],
    });
    if (exitedUser) {
      throw new ApiError(409, "User with username or email already exits");
    }
    const user = await User.create({
      phoneNumber,
      fullName,
      email,
      password,
    });
    const createdUser = await User.findById(user._id).select(
      "-password  -refreshToken"
    );
    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering the user");
    }

    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          { createdUser },
          "User Registered Successfully"
        )
      );
  });

const loginUser = wrapAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //const email="ali@dgmail.coma", password="12341d";
    console.log(email, password);
    if (!email) {
      throw new ApiError(400, "Email is required");
    }
    const user = await User.findOne({
      $or: [{ email }],
    });
    if (!user) {
      throw new ApiError(404, "User does not exits do signup first");
    }
    const isPasswordValid = await user.isPasswordCorrect(password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid User Credentails");
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id
    );
  
    const loggedInUser = await User.findOne(user._id).select(
      "-password -refreshToken"
    );
  
    const options = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(200, {user: loggedInUser,
            refreshToken,accessToken
         }, "User Logged In Successfully")
      );
  });
  
const logoutUser = wrapAsyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $unset: { refreshToken: 1 },
        //   or
        //   $set: { refreshToken: null },
      },
      {
        new: true,
      }
    );
    const options = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse(200, {}, "User Logged Out Successfully!"));
  });  
export {registerUser,loginUser,logoutUser}  