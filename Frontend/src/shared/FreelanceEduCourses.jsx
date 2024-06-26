// import React from "react";
// function FreelanceEduCourses() {
//   return <div>FreelanceEduCourses</div>;
// }
// export default FreelanceEduCourses;

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Button, Text, Heading, Img } from "./..";

export default function FreelanceEduCourses({
  standard = "Standard One",
  standardisa = "Standard 1 is a foundation Standard that reflects 7 important concepts...",
  classDetails = "Class Details",
  img="/assets/icons/img_group.svg",
  ...props
}){
  const [courseMsg,setCourseMsg]=useState("");
  const SeeCourseDetails=()=>{
    setCourseMsg("Now Course is not fully prepared");
    setTimeout(() => {
      setCourseMsg("");
     }, 2000);
  }
  
  return (
    <div {...props}>
      <div className="flex flex-col items-center  justify-center w-[100%] gap-[25px] p-[15px] bg-white rounded-[15px] hover:shadow-xs ">
        <div className="flex flex-col items-center justify-start w-full  mt-[15px] gap-[19px] md:px-5 max-w-[260px]">
          <img
            src={img}
            alt="image"
            className="h-[50px] w-[50px]"
          />
          <div className="flex flex-col items-center justify-start w-full gap-[9px]">
            <h1 className="text-center text-[25px] font-semibold min-w-[260px]">
              {standard}
            </h1>
            <p className="!text-gray-700 text-center !leading-[30px]">
              {standardisa}
            </p>
          </div>
        </div>
        {/* <Link to="/course-details"> */}
        {/* <div className=" text-red-400 z-1 w-100%">
          {courseMsg}
        </div> */}
        <div className="relative">
        <div className="absolute text-red-400 !font-bold z-1 w-100% bottom-12">
          {courseMsg}
        </div>
        <button onClick={SeeCourseDetails}
         
          className="mb-[15px] sm:px-5 font-medium min-w-[159px]  rounded-[5px]  h-[43px] px-[30px] text-base border-red-400 border border-solid text-red-400"
        >
          {classDetails}
        </button>
        </div>
       

        {/* </Link> */}
      </div>
    </div>
  );
}
