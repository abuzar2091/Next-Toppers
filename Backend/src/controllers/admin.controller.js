import { Course } from "../models/course.model.js";
import { Shop } from "../models/shop.model.js";
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
export {
    removeCourse,
    newCourse,
    getCourseBasedOnCategory,
    addBook,
    getBooksBasedOnCategory
}