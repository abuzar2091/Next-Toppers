import mongoose from "mongoose";
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

const getFacultyMentors=wrapAsyncHandler(async(req,res)=>{
  const mentors = await Faculty.aggregate([
    {
      $lookup: {
        from: 'users', // The collection name in MongoDB (make sure it's correct)
        localField: 'facultyMentor',
        foreignField: '_id',
        as: 'mentorDetails'
      }
    },
    {
      $unwind: {
        path: "$mentorDetails",
       // preserveNullAndEmptyArrays: true // If there might be faculty without mentors
      }
    },
    {
      $project: {
        facultyMentor: 1,
        education: 1,
        experience:1,
        // Include any other Faculty fields you want to keep
        "mentorDetails.fullName": 1,
        "mentorDetails.email": 1,
        "mentorDetails.phoneNumber": 1
      }
    }
  ]);
    return res.status(200).json(
      new ApiResponse(
        200,
        {mentors},
        "Faculty mentor information retrieved successfully beta"
      )
    );
})
const getFacultyMentor=wrapAsyncHandler(async(req,res)=>{
  const {mentorId}=req.params;
  if(!mentorId){
    throw new ApiError(404,"To fetch mentor detail provide mentor id");

  }
  const mentor = await Faculty.aggregate([
    {
      $match: {
        _id:new mongoose.Types.ObjectId(mentorId) // Convert mentorId to ObjectId
        }
     },
    {
      $lookup: {
        from: 'users', // The collection name in MongoDB (make sure it's correct)
        localField: 'facultyMentor',
        foreignField: '_id',
        as: 'mentorDetails'
      }
    },
    {
      $unwind: {
        path: "$mentorDetails",
       // preserveNullAndEmptyArrays: true // If there might be faculty without mentors
      }
    },
    {
      $project: {
      //  facultyMentor: 1,
        education: 1,
        experience:1,
        about:1,
        // Include any other Faculty fields you want to keep
        "mentorDetails.fullName": 1,
        "mentorDetails.email": 1,
        "mentorDetails.phoneNumber": 1
      }
    }
  ]);
    return res.status(200).json(
      new ApiResponse(
        200,
        {mentor},
        "Faculty mentor information retrieved successfully beta"
      )
    );
})
const addCourse = wrapAsyncHandler(async (req, res) => {
    const { courseName, courseDescription,courseCategory,coursePrice,courseRating, duration} = req.body;
    if(!courseName && !courseDescription && !courseCategory){
         throw new ApiError(404,"To add Course provide Course Name");
    }
    const course=await Course.create({
         courseName,
         courseDescription,
         courseCategory,
         coursePrice,
         courseRating,
         duration,
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

const updateFacultyAttributes = wrapAsyncHandler(async (req, res) => {
  // Update the 'faculyMentor' to 'facultyMentor'
  await Faculty.updateMany(
    { faculyMentor: { $exists: true } },
    { $rename: { 'faculyMentor': 'facultyMentor' } }
  );
  // Update the 'experiance' to 'experience'
  await Faculty.updateMany(
    { experiance: { $exists: true } },
    { $rename: { 'experiance': 'experience' } }
  );

  return res.status(200).json(new ApiResponse(200, null, 'Attributes updated successfully'));
});
const addFacultyAboutInfo = wrapAsyncHandler(async (req, res) => {
  const { id, about } = req.body;

  if (!id || !about) {
    return res.status(400).json({
      statusCode: 400,
      message: "Please provide the faculty ID and about information"
    });
  }

  const faculty = await Faculty.findById(id);

  if (!faculty) {
    return res.status(404).json({
      statusCode: 404,
      message: "Faculty not found"
    });
  }

  faculty.about = about;
  await faculty.save();

  return res.status(200).json({
    statusCode: 200,
    data: { faculty },
    message: "Faculty about information updated successfully"
  });
});

export {
    registerFaculty,
    addCourse,
    getFacultyMentor,
    getFacultyMentors,
    updateFacultyAttributes,
    addFacultyAboutInfo
}