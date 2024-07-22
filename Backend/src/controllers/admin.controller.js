import { Course } from "../models/course.model.js";
import { Shop } from "../models/shop.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
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
      courseName:"Graphic Design 3.0"
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
const getCourseBasedOnCategory= wrapAsyncHandler(async (req, res) => {
  const {categoryName}=req.body;
  console.log(req.body);
  if(categoryName==="All Courses")
    {
    const courses = await Course.aggregate([
      {  
        $group: {
          _id: "$courseCategory", // Group by category
          courses: { $push: "$$ROOT" } // Push all course details
        }
      },
      {
        $project: {
          courseCategory: "$_id",
          courses: 1,
          _id: 0
        }
      }
    ]);
    return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        {courses},
        "Course based on the searched category"
      )
    );

  }

   const courses = await Course.aggregate([
    {
      $match:{
        courseCategory:categoryName,
      }
    },
    {  
      $group: {
        _id: "$courseCategory", // Group by category
        courses: { $push: "$$ROOT" } // Push all course details
      }
    },
    {
      $project: {
        courseCategory: "$_id",
        courses: 1,
        _id: 0
      }
    }
  ]);

    return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        {courses},
        "Course based on the searched category"
      )
    ); 

  // }
  // const courses=await Course.find({
  //   courseCategory:categoryName,
  // }) 
  // return res
  // .status(200)
  // .json(
  //   new ApiResponse(
  //     200,
  //     {courses},
  //     "Course based on the searched category"
  //   )
  // ); 

});

const addBook = wrapAsyncHandler(async (req, res) => {
  const {bookName, bookWriter, bookDescription, bookCategory,bookPrice,bookRating} = req.body;
  if(!bookName &&  !bookWriter && !bookDescription && ! bookCategory){
       throw new ApiError(404,"To add Book provide Book Name");
  }
  const book=await Shop.create({
      bookName,
      bookWriter,
      bookDescription,
       bookCategory,
       bookPrice,
       bookRating,
    })
    return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        {book},
        "New Book added Successfully"
      )
    );
  }
)

const getBooksBasedOnCategory= wrapAsyncHandler(async (req, res) => {
  const {categoryName}=req.query; 
  console.log(categoryName);
  if(categoryName==="All Books")
    {
    const shops = await Shop.aggregate([
      {  
        $group: {
          _id: "$bookCategory", // Group by category
          shops: { $push: "$$ROOT" } 
        }
      },
      {
        $project: {
          bookCategory: "$_id",
          shops: 1,
          _id: 0
        }
      }
    ]);
    return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        {shops},
        "Books based on the searched category"
      )
    );

  }

   const shops = await Shop.aggregate([
    {
      $match:{
        bookCategory:categoryName,
      }
    },
    {  
      $group: {
        _id: "$bookCategory", // Group by category
        shops: { $push: "$$ROOT" } 
      }
    },
    {
      $project: {
        bookCategory: "$_id",
        shops: 1,
        _id: 0
      }
    }
  ]);
    return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        {shops},
        "Books based on the searched category"
      )
    ); 
});

const getApplicationAsMentorRequest=wrapAsyncHandler(async (req, res) => {

  const {fullName,email,phoneNumber,address,experience,linkedinURL,resume,subjects } = req.body;
  
  console.log(req.body);
if(!fullName && !email && !phoneNumber && !address && !resume && !subjects){
  throw new ApiError(404,"Enter valid data");
}
// const localVideoFilePath = req.file?.path;
// console.log(localVideoFilePath);
 //const resumeUrl=uploadOnCloudinary(resume);
 //console.log(resumeUrl);
 console.log("file :",req?.files?.path);
   const resumeLocalPath = req.files?.resume[0]?.path;
   console.log("resume local ",resumeLocalPath);


  // if (req.files && req.files.coverImage && req.files.coverImage.length > 0) {
  //   coverImageLocalPath = req.files?.coverImage[0]?.path || "";
  // }
  // if (!avatarLocalPath) {
  //   throw new ApiError(400, "Avatar file is required");
  // }
 // const resum = await uploadOnCloudinary(resumeLocalPath);

  // if (!resum) {
  //   throw new ApiError(400, "Avatar is not uploaded");
  // }
  //const coverImage = "";
  // const user = await User.create({
  //   username: username.toLowerCase(),
  //   fullName,
  //   email,
  //   avatar: avatar.url,
  //   coverImage: coverImage?.url || "",
  //   password,
  // });

});
export {
    removeCourse,
    newCourse,
    getCourseBasedOnCategory,
    addBook,
    getBooksBasedOnCategory,
    getApplicationAsMentorRequest
}