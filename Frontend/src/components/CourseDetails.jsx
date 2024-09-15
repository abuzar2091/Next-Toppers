import FreelanceCoursesDetailsCard from "@/shared/FreelanceCoursesDetailsCard";
import { RatingBar } from "@/shared/RatingBar";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import WhatWillYouLearn from "@/page/WhatWillYouLearn";
import GetCertificate from "@/page/Certificate";
import { ChevronRight } from "lucide-react";
import CourseProject1 from "@/page/CourseProject";
import CourseProject2 from "@/page/CoursePage";
import FrequentlyAskedQ from "@/page/FreequentlyAskedQ";
import RazorpayForm from "@/shared/RazorPayFrom";
import axios from "axios";


function CourseDetails({Course_Title= "Graphic Design Fundamentals",Course_Name="Graphic Design"}) {
  const navigate = useNavigate();
  const {courseId}=useParams();
  const [userdata,setUserData]=useState(null);
  const [loggedIn,setLoggedIn]=useState(false);
  useEffect(()=>{
    const checkIsLoggedIn=async()=>{
      await axios.get(`${import.meta.env.VITE_BACKEND_API_URI}/api/v1/users/get-current-user`).then((res)=>{
        setUserData(res.data.data)
        console.log("get current user ",res.data.data);
        setLoggedIn(true);
          // navigate("/pages.razorpay.com/unnayan-june");
      }).catch((err)=>{
        console.log("err get-current-user ",err);
        setLoggedIn(false);
        //navigate("/sign-in");
      })
    }
    checkIsLoggedIn();
  },[])
 // console.log("done mil gya courses enjoy krooooooooooooooooooooooooooooooooooooo",courseId);
  useEffect(() => {
    const id=(userdata?.myCourses?.filter(id => id.toString() === courseId.toString())) 
     // console.log("done mil gya courses enjoy krooooooooooooooooooooooooooooooooooooo",id);
    
  }, [userdata, courseId]);
  

  return (
    <div className="flex flex-col  justify-start w-full gap-[50px] bg-gray-100 ">
      <div className="flex lg:flex-row flex-col md:justify-between items-center md:items-start md:w-[92%] w-[100%] mx-auto my-8 bg-gray-200 max-w-7xl rounded-[20px]">
        <div className="flex flex-col items-start justify-start lg:w-[63%] w-[100%] px-4 ml-[5px] gap-[29px]">
          <p className="!text-black tracking-[0.48px] !font-medium">
            Home | Courses | Course Details 
          </p>

          <div className="flex flex-col items-start justify-start w-full  gap-[0px]">
            <div className="flex flex-row justify-start w-full">
              <div className="sm:h-[455px] h-[200px] w-full m-4 relative">
                <img
                  src="/assets/images/img_pexels_vanessa_garcia_6325959.png"
                  alt="pexelsvanessa"
                  className="justify-center sm:h-[455px] sm:w-full  left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                />
                <button className="w-[60px]  bg-red-300 left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[50%] h-[60px] px-[22px]">
                  <img src="/assets/icons/img_call_button.svg" />
                </button>
              </div>
            </div>
            <h1 className="!text-black lg:text-[25px]  md:text-[18px] mt-4 font-semibold">
              {Course_Title} | Episode 1
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start lg:w-[35%] w-[100%] px-4 mr-[5px] gap-3">
          <h1 className="!text-black sm:text-[25px] text-[20px] font-semibold">
            Course Playlists
          </h1>
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5 opacity-0.5 bg-white cursor-pointer rounded-[10px] hover:shadow-sm">
              <div className="flex flex-row justify-start w-[23%]">
                <div className="h-[50px] w-full sm:w-full relative">
                  <img
                    src="/assets/images/img_image_50x80.png"
                    alt="image_one"
                    className="justify-center h-[50px] w-full sm:w-full left-0 bottom-0 right-0 top-0 opacity-0.5 object-cover absolute rounded-[5px]"
                  />
                  <div className="flex flex-col items-center justify-center h-max w-max left-0 bottom-0 right-0 top-0 p-1 m-auto bg-white absolute rounded-[50%]">
                    <img
                      src="/assets/icons/img_lock_pad_lock_s.svg"
                      alt="lockpadlocks"
                      className="h-[10px] w-[10px] "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[70%] gap-[3px]">
                <h1 className="!text-black-900_87 opacity-0.5">
                Introduction to Graphic Design
                </h1>
                <p className="!text-deep_orange-400_87 opacity-0.5 text-sm font-medium">
                  1:57
                </p>
              </div>
            </div>
            
            <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5 opacity-0.5 bg-white cursor-pointer rounded-[10px] hover:shadow-sm">
              <div className="flex flex-row justify-start w-[23%]">
                <div className="h-[50px] w-full sm:w-full relative">
                  <img
                    src="/assets/images/img_image_50x80.png"
                    alt="image_one"
                    className="justify-center h-[50px] w-full sm:w-full left-0 bottom-0 right-0 top-0 opacity-0.5 object-cover absolute rounded-[5px]"
                  />
                  <div className="flex flex-col items-center justify-center h-max w-max left-0 bottom-0 right-0 top-0 p-1 m-auto bg-white absolute rounded-[50%]">
                    <img
                      src="/assets/icons/img_lock_pad_lock_s.svg"
                      alt="lockpadlocks"
                      className="h-[10px] w-[10px] "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[64%] gap-[3px]">
                <h1 className="!text-black-900_87 opacity-0.5">
                Adobe Photoshop Basics
                </h1>
                <p className="!text-deep_orange-400_87 opacity-0.5 text-sm font-medium">
                  5:43
                </p>
              </div>
            </div>

  

            <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5 bg-white cursor-pointer rounded-[10px] hover:shadow-sm">
              <div className="flex flex-row justify-start w-[23%]">
                <div className="h-[50px] w-full sm:w-full relative">
                  <img
                    src="/assets/images/img_image_50x80.png"
                    alt="image_one"
                    className="justify-center h-[50px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.5 object-cover absolute rounded-[5px]"
                  />
                  <div className="flex flex-col items-center justify-center h-max w-max left-0 bottom-0 right-0 top-0 p-1 m-auto bg-white absolute rounded-[50%]">
                    <img
                      src="/assets/icons/img_lock_pad_lock_s.svg"
                      alt="lockpadlocks"
                      className="h-[10px] w-[10px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[64%] gap-[3px]">
                <h5 className="!text-black-900_87 opacity-0.5">
                Adobe Photoshop Basics 2
                </h5>
                <p className="!text-deep_orange-400_87 opacity-0.5 text-sm font-medium">
                  8:11
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5 opacity-0.5 bg-white cursor-pointer rounded-[10px] hover:shadow-sm">
              <div className="flex flex-row justify-start w-[23%]">
                <div className="h-[50px] w-full sm:w-full relative">
                  <img
                    src="/assets/images/img_image_50x80.png"
                    alt="image_one"
                    className="justify-center h-[50px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.5 object-cover absolute rounded-[5px]"
                  />
                  <div className="flex flex-col items-center justify-center h-max w-max left-0 bottom-0 right-0 top-0 p-1 m-auto bg-white absolute rounded-[50%]">
                    <img
                      src="/assets/icons/img_lock_pad_lock_s.svg"
                      alt="lockpadlocks"
                      className="h-[10px] w-[10px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[64%] gap-[3px]">
                <h1 className="!text-black-900_87 opacity-0.5">
                Adobe Photoshop Advance
                </h1>
                <p className="!text-deep_orange-400_87 opacity-0.5 text-sm font-medium">
                  6:10
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5 opacity-0.5 bg-white cursor-pointer rounded-[10px] hover:shadow-sm">
              <div className="flex flex-row justify-start w-[23%]">
                <div className="h-[50px] w-full sm:w-full relative">
                  <img
                    src="/assets/images/img_image_50x80.png"
                    alt="image_one"
                    className="justify-center h-[50px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.5 object-cover absolute rounded-[5px]"
                  />
                  <div className="flex flex-col items-center justify-center h-max w-max left-0 bottom-0 right-0 top-0 p-1 m-auto bg-white absolute rounded-[50%]">
                    <img
                      src="/assets/icons/img_lock_pad_lock_s.svg"
                      alt="lockpadlocks"
                      className="h-[10px] w-[10px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[64%] gap-[3px]">
                <h1 className="!text-black-900_87 opacity-0.5">
                Typography Mastery
                </h1>
                <p className="!text-deep_orange-400_87 opacity-0.5 text-sm font-medium">
                  10:00
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5 opacity-0.5 bg-white cursor-pointer rounded-[10px] hover:shadow-sm">
              <div className="flex flex-row justify-start w-[23%]">
                <div className="h-[50px] w-full sm:w-full relative">
                  <img
                    src="/assets/images/img_image_50x80.png"
                    alt="image_one"
                    className="justify-center h-[50px] w-full sm:w-full left-0 bottom-0 right-0 top-0 opacity-0.5 object-cover absolute rounded-[5px]"
                  />
                  <div className="flex flex-col items-center justify-center h-max w-max left-0 bottom-0 right-0 top-0 p-1 m-auto bg-white absolute rounded-[50%]">
                    <img
                      src="/assets/icons/img_lock_pad_lock_s.svg"
                      alt="lockpadlocks"
                      className="h-[10px] w-[10px] "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[64%] gap-[3px]">
                <h1 className="!text-black-900_87 opacity-0.5">
                Adobe Illustrator Essentials
                </h1>
                <p className="!text-deep_orange-400_87 opacity-0.5 text-sm font-medium">
                  7:53
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center  w-[92%] mx-auto">
        <div className="flex lg:flex-row flex-col justify-start md:items-start items-center w-full gap-10  md:px-5 max-w-7xl">
          <div className="flex flex-col items-center justify-start md:w-full mx-2 gap-6">
            <div className="flex flex-col items-start justify-start w-full gap-2">
              <h1 className="sm:text-3xl text-2xl font-semibold">Course Details</h1>
              <p className="leading-[30px] text-base font-normal 
              
              text-[19px]">
              Each topic will be covered in detail through a combination of video lectures, hands-on exercises, and practical projects.
                <br />
                Access to course materials, including video tutorials, project files, and additional resources, will be provided to all enrolled students.
              </p>
            </div>

            <div className="flex flex-col items-start justify-start w-full gap-2">
              <h1 className="sm:text-3xl text-2xl font-semibold">Who this course is for</h1>
              <p className="leading-[30px] text-base font-normal">
                <ul className="flex flex-col gap-2">
                  <li className="!font-semibold text-[19px]">Beginners:
                    <span className="leading-[30px] text-[19px] !text-gray-600 text-base font-normal">
                    Individuals with little to no experience in graphic design who want to learn the fundamentals from scratch.
                    </span>
                  </li>
                  <li className="!font-semibold text-[19px]">Students:
                    <span className="leading-[30px] text-[19px] text-base font-normal">College or university students studying design or related fields who want to supplement their coursework with practical skills.
                      </span> </li>
                  <li className="!font-semibold text-[19px]">Professionals:
                    <span className="leading-[30px] text-[19px] text-base font-normal">
                    Professionals in marketing, advertising, or related industries looking to enhance their design skills for career advancement or job opportunities.
                    </span>
                  </li>
                  <li className="!font-semibold text-[19px]">Entrepreneurs:
                    <span className="leading-[30px] text-[19px] text-base font-normal">
                    Entrepreneurs or small business owners who want to create their own marketing materials and brand assets.

                    </span>
                  </li>
                  <li className="!font-semibold text-[19px]">Career Changers:
                    <span className="leading-[30px]  text-[19px] text-base font-normal">
                    Individuals considering a career change into the field of graphic design who want to acquire relevant skills and knowledge.
                    </span>
                  </li>
                  <li className="!font-semibold text-[19px]">Freelancers: <span
                  className="leading-[30px] text-[19px] text-base font-normal">
                  Aspiring freelance designers who want to build a strong foundation in graphic design to attract clients and establish their portfolio.
                    </span></li>

                </ul>
              </p>
            </div>

          </div>

          <div className="flex flex-col items-center justify-start sm:w-[56%]  gap-[23px]">
            <div className="flex flex-col items-center justify-center w-full gap-[19px] p-[19px] bg-white rounded-[10px]">
              <div className="flex flex-row justify-between items-center w-full mt-[5px]">
                <h1 className="!text-gray-600  text-xl font-semibold">Price</h1>
                <h1 className="text-deep_orange-400 text-right !font-bold text-[22px] ">
                  BDT 2999.00
                </h1>
              </div>
              <div className="flex flex-row gap-10 justify-between w-full">
                <h1 className="mb-0.5 !text-gray-600 text-xl font-semibold">
                  Instructor
                </h1>
                <Link to="/mentors/667ed98a85511101d0c074b8">
                  <h1 className="text-right underline sm:text-xl font-semibold">
                    Wade Warren
                  </h1>
                </Link>
              </div>
              <div className="flex flex-row justify-between items-start w-full">
                <h1 className="!text-gray-600 text-xl font-semibold">
                  Ratings
                </h1>
                <RatingBar
                  value={5}
                  isEditable={true}
                  color="#ffc107"
                  activeColor="#ffc107"
                  size={16}
                  className="flex justify-between mt-0.5"
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <h1 className="mb-0.5 !text-gray-600 text-xl font-semibold">
                  Durations
                </h1>
                <h1 className="text-right text-xl font-semibold">10 Days</h1>
              </div>
              <div className="flex flex-row justify-between w-full">
                <h1 className="mt-px !text-gray-600 text-xl font-semibold">
                  Lessons
                </h1>
                <h1 className="text-right text-xl font-semibold">30</h1>
              </div>
              <div className="flex flex-row justify-between w-full">
                <h1 className="mt-px !text-gray-600 text-xl font-semibold">
                  Quizzes
                </h1>
                <h1 className="text-right text-xl font-semibold">5</h1>
              </div>
              <div className="flex flex-row justify-between w-full">
                <h1 className="mb-px !text-gray-600 text-xl font-semibold">
                  Certificate
                </h1>
                <h1 className="text-right text-xl font-semibold">Yes</h1>
              </div>
              <div className="flex flex-row justify-between w-full">
                <h1 className="!text-gray-600 text-xl font-semibold">
                  Language
                </h1>
                <h1 className="text-right text-xl font-semibold">English</h1>
              </div>
              <div className="flex flex-row justify-between w-full mb-[5px]">
                <h1 className="mt-px !text-gray-600 text-xl font-semibold">
                  Access
                </h1>
                <h1 className="text-right text-xl font-semibold">Lifetime</h1>
              </div>
            </div>
{/*             
            <Link to="/pages.razorpay.com/unnayan-june"  className="w-full"> */}
        <div  className="flex gap-1 mt-4 justify-center items-center bg-orange-600  text-white w-full  font-medium rounded-[5px] h-[54px] px-[35px] text-lg
         py-1 hover:bg-orange-400">
          {userdata?.myCourses?.filter((id) => id === courseId).length > 0 ? (
  <button className="!font-semibold sm:text-[25px] text-[20px]" disabled>
    Already Enrolled
  </button>
) : (
  loggedIn ? (
    <Link to="/pages.razorpay.com/unnayan-june">
      <button className="!font-semibold text-[25px]">Enroll Now</button>
    </Link>
  ) : (
    <Link to="/sign-in">
      <button className="!font-semibold text-[25px]">Enroll Now</button>
    </Link>
  )
)}
       <ChevronRight className="mt-1" />
        </div>
        {/* </Link> */}
          </div>
        </div>
      </div>
      <WhatWillYouLearn/>
      <CourseProject1/>
      <CourseProject2/>
      <GetCertificate courseId={courseId}/>
      <FrequentlyAskedQ/>
      <div className="flex flex-col items-start justify-start w-[92%] mx-auto sm:gap-12 gap-4 md:px-5 max-w-7xl">
        <h1
          size="2xl"
          className="!font-metropolis md:text-[40px] sm:text-[35px] text-[25px] font-bold leading-[55px]"
        >
          Similar Courses
        </h1>
        <div className="justify-center w-full gap-6 sm:grid-cols-2  grid-cols-1 md:gap-5 grid">
          <FreelanceCoursesDetailsCard
          thethree = "Computer Network"
            imageOne="/assets/images/img_image_103x160.png"
            className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
          />
          <FreelanceCoursesDetailsCard
          thethree = "Web Development and Design"
            imageOne="/assets/images/img_image_2.png"
            className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
          />
          <FreelanceCoursesDetailsCard
          thethree = "Graphic Design"
            imageOne="/assets/images/img_image_3.png"
            className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
          />
          <FreelanceCoursesDetailsCard
            //   imageOne="/assets/images/img_image_4.png"
            thethree = "Java Programming"
            className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CourseDetails;
