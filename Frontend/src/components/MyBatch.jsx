import FreelanceCoursesDetailsCard from "@/shared/FreelanceCoursesDetailsCard";
import { RatingBar } from "@/shared/RatingBar";
import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import WhatWillYouLearn from "@/page/WhatWillYouLearn";
import GetCertificate from "@/page/Certificate";
import { ChevronRight } from "lucide-react";
import CourseProject1 from "@/page/CourseProject";
import CourseProject2 from "@/page/CoursePage";
import FrequentlyAskedQ from "@/page/FreequentlyAskedQ";
import RazorpayForm from "@/shared/RazorPayFrom";

function MyBatch({
  Course_Title = "Graphic Design Fundamentals",
  Course_Name = "Graphic Design",
}) {
  return (
    <div className="flex flex-col  justify-start w-full gap-[50px] bg-gray-100 ">
      <div className="flex md:flex-row flex-col md:justify-between items-center md:items-start w-[92%] mx-auto  md:gap-10 px-5  my-8  bg-gray-200 max-w-7xl rounded-[20px]">
        <div className="flex flex-col items-start justify-start w-[63%]  ml-[5px] gap-[29px]">
          <p className="!text-black tracking-[0.48px] !font-medium">
            Home | Courses | Course Details
          </p>

          <div className="flex flex-col items-start justify-start w-full gap-[29px]">
            <div className="flex flex-row justify-start w-full">
              <div className="h-[455px] w-full relative">
                <img
                  src="/assets/images/img_pexels_vanessa_garcia_6325959.png"
                  //src="/assets/images/batchgraphic.png"
                  alt="pexelsvanessa"
                  className="justify-center h-[455px] w-full  left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                />
                <button className="w-[60px]  bg-red-300 left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[50%] h-[60px] px-[22px]">
                  <img src="/assets/icons/img_call_button.svg" />
                </button>
              </div>
            </div>
            <h1 className="!text-black lg:text-[25px]  text-[18px] font-semibold">
              {Course_Title} | Episode 1
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start lg:w-[32%] mr-[5px] gap-3">
          <h1 className="!text-black text-[25px] font-semibold">
            Course Playlists
          </h1>
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5 bg-white cursor-pointer rounded-[10px] hover:shadow-sm">
              <img
                src="/assets/images/img_image.png"
                alt="image"
                className="w-[23%]  object-cover rounded-[5px]"
              />
              <div className="flex flex-col items-start justify-start w-[70%] gap-[3px]">
                <h3 className="!text-black font-semibold flex">
                  Introduction to Graphic Design
                </h3>
                <p className="text-deep_orange-400 text-sm font-medium">1:57</p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5 bg-white shadow-sm cursor-pointer rounded-[10px] hover:shadow-sm">
              <img
                src="/assets/images/img_image.png"
                alt="image_one"
                className="w-[23%]  object-cover rounded-[5px]"
              />
              <div className="flex flex-col items-start justify-start w-[64%] gap-[3px]">
                <h1 as="h4" className="!text-black font-semibold ">
                  Adobe Photoshop Basics
                </h1>
                <p className="text-deep_orange-400 text-sm font-medium">5:43</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5 bg-white cursor-pointer rounded-[10px] hover:shadow-sm">
              <img
                src="/assets/images/img_image.png"
                alt="image"
                className="w-[23%]  object-cover rounded-[5px]"
              />
              <div className="flex flex-col items-start justify-start w-[70%] gap-[3px]">
                <h3 className="!text-black font-semibold flex">
                Adobe Photoshop Basics 2
                </h3>
                <p className="text-deep_orange-400 text-sm font-medium">8:11</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5 bg-white cursor-pointer rounded-[10px] hover:shadow-sm">
              <img
                src="/assets/images/img_image.png"
                alt="image"
                className="w-[23%]  object-cover rounded-[5px]"
              />
              <div className="flex flex-col items-start justify-start w-[70%] gap-[3px]">
                <h3 className="!text-black font-semibold flex">
                Adobe Photoshop Advance
                </h3>
                <p className="text-deep_orange-400 text-sm font-medium">6:10</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5 bg-white cursor-pointer rounded-[10px] hover:shadow-sm">
              <img
                src="/assets/images/img_image.png"
                alt="image"
                className="w-[23%]  object-cover rounded-[5px]"
              />
              <div className="flex flex-col items-start justify-start w-[70%] gap-[3px]">
                <h3 className="!text-black font-semibold flex">
                Typography Mastery
                </h3>
                <p className="text-deep_orange-400 text-sm font-medium">10:00</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5 bg-white cursor-pointer rounded-[10px] hover:shadow-sm">
              <img
                src="/assets/images/img_image.png"
                alt="image"
                className="w-[23%]  object-cover rounded-[5px]"
              />
              <div className="flex flex-col items-start justify-start w-[70%] gap-[3px]">
                <h3 className="!text-black font-semibold flex">
                Adobe Illustrator Essentials
                </h3>
                <p className="text-deep_orange-400 text-sm font-medium">7:53</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyBatch;
