import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addBook,  getApplicationAsMentorRequest,  getBooksBasedOnCategory, getCourseBasedOnCategory, newCourse, removeCourse } from "../controllers/admin.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router=Router();
router.route("/remove-course").post(removeCourse);  
router.route("/recent-course").get(newCourse);
router.route("/getcourse-basedon-category").post(getCourseBasedOnCategory);
router.route("/addbook").post(addBook);
router.route("/getbooks-basedon-category").get(getBooksBasedOnCategory);
router
.route("/request_as_mentor")
.post(upload.single("resume"),getApplicationAsMentorRequest);
export default router;