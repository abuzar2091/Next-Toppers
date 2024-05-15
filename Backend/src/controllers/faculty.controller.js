import { Course } from "../models/course.model.js";
import { Faculty } from "../models/faculty.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import wrapAsyncHandler from "../utils/wrapAsyncHandler.js";

const registerFaculty= wrapAsyncHandler(async (req, res) => {
    const { faculyMentor, avatar,experiance, education, courses} = req.body;
    if(!faculyMentor &&  !courses){
         throw new ApiError(404,"Faculty Mentor Id and Course Id is needed");
    }
    const faculty=await Faculty.create({
        faculyMentor,
        avatar,
        experiance,
        education,
        courses
      })
      return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          {faculty},
          "New Faculty Mentor Joined"
        )
      );
    }
)
const addCourse = wrapAsyncHandler(async (req, res) => {
    const { courseName, courseDescription,coursePrice,courseRating, duration} = req.body;
    if(!courseName && courseDescription){
         throw new ApiError(404,"To add Course provide Course Name");
    }
    const course=await Course.create({
        courseName,
         courseDescription,
         coursePrice,
         courseRating,
         duration
      })
      return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          {course},
          "New Course added Successfully"
        )
      );
    }
)

export {
    registerFaculty,
    addCourse
}