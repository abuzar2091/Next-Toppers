import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import wrapAsyncHandler from "../utils/wrapAsyncHandler.js";
const registerUser = wrapAsyncHandler(async (req, res, next) => {
    //   //get the user info from frontend
    //   //perform validation--not empty
    //   //check if user already exits:username ,email
    //   // get the local url and store it on the cloudinary
    //   // create user obj and save in db
    //   //remove password and refresh token from the respone
    //   //check for the user creation
    //   //return respone
    console.log(req.body);
    console.log("lets start");
  
    const { phoneNumber, email, password, fullName } = req.body;
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
export {registerUser}  