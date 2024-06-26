import { Router } from "express";
import { enrollCourse, getCurrentUser, getMyProfile, loginUser, logoutUser, registerUser, subscribeEmail } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router=Router();
router.route("/email").post(subscribeEmail);
router.route("/signup").post(registerUser);
router.route("/get-current-user").get(verifyJWT,getCurrentUser)
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT,logoutUser);
router.route("/enroll-course").post(verifyJWT,enrollCourse);
router.route("/my-profile").get(verifyJWT,getMyProfile);
 
export default router;