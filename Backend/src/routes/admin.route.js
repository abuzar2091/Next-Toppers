import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getCourseBasedOnCategory, newCourse, removeCourse } from "../controllers/admin.controller.js";
const router=Router();
router.route("/remove-course").post(removeCourse);  
router.route("/recent-course").get(newCourse);
router.route("/getcourse-basedon-category").post(getCourseBasedOnCategory);
export default router;