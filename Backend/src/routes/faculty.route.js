import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addCourse, registerFaculty } from "../controllers/faculty.controller.js";
const router=Router();
router.route("/register").post(registerFaculty); 
router.route("/addcourse").post(addCourse); 
export default router;