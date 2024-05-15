import { Course } from "../models/course.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import wrapAsyncHandler from "../utils/wrapAsyncHandler.js";

const removeCourse= wrapAsyncHandler(async (req, res) => {
      const {userId,courseId}=req.body;
      if(!userId && !courseId){
        throw new ApiError(404,"UserId and CourseId is not found");
      }
      const course=await User.findByIdAndUpdate(
        userId,
        { $pull: { myCourses:  courseId } },
        {new:true} // remove the course from the user's courses array
      );
      return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          {course},
          "Course Removed from the User's Cart Successfully"
        )
      );
})
const newCourse= wrapAsyncHandler(async (req, res) => {
    const newCourse=await Course.findOne({
      courseName:"Graphic Design"
    }) 
    return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        {newCourse},
        "New Recently Course"
      )
    ); 
})
export {removeCourse,
    newCourse
}