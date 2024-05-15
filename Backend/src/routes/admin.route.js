import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { newCourse, removeCourse } from "../controllers/admin.controller.js";
const router=Router();
router.route("/remove-course").post(removeCourse);  
router.route("/recent-course").get(newCourse);
export default router;