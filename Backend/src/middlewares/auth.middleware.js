import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import wrapAsyncHandler from "../utils/wrapAsyncHandler.js";
import { User } from "../models/user.model.js";

export const verifyJWT = wrapAsyncHandler(async (req,_, next) => {
  try {
    const token =req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
      console.log(token);
    if (!token) {
      throw new ApiError(401, "Unauthorized request jsonweb token not found");
    }
    const decodedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
     const user= await User.findById(decodedToken?._id).select("-password -refreshToken");
     if(!user){
      throw new ApiError(404,"Invalid Access Token, User not found!");
     }
     req.user= user;
     console.log("verification done!",req.user);
      next();
  } catch (error) {
    throw new ApiError(404, error?.message || "Invalid access Token");
  }
});


