import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function JoinAsMentor() {
  return (
    <div className="flex flex-col items-center justify-start w-full md:gap-[80px] gap-[40px] bg-gray-100">
      <div className="flex flex-col items-start justify-start w-[92%] my-8 gap-[20px] p-5  bg-yellow-100 max-w-7xl rounded-[20px]">
        <p className="mt-[5px] ml-2.5 md:ml-0 !text-black !font-medium">
          Home | Become An Instructor
        </p>
        <div className="flex sm:flex-row flex-col  justify-between   w-[99%]  ml-2.5  ">
          <h1
            className="
          
               sm:w-[55%] !font-semibold  
               lg:text-[40px]  lg:w-[60%] md:text-[35px] text-[25px] md:w-[60%]
           
           "
          >
            Join Next Toppers as
            <br />a Mentor
          </h1>
          {/* <div> */}
          <img
            src="/assets/images/mentor_img.jpg"
            alt="mentor-img"
            className="object cover rounded-[20px] sm:w-1/3 w-[60%] mx-auto"
            loading="lazy"
          />
          {/* </div> */}
        </div>
      </div>

      <div className="flex flex-row w-[92%]">
        <div className="flex md:flex-row flex-col justify-between gap-[100px] items-center w-full max-w-7xl">
          <img
            src="/assets/images/img_image_521x510.png"
            alt="image_applyer"
            className="w-[40%] h-auto   object-cover"
            loading="lazy"
          />

          <div className="flex md:flex-col sm:flex-row flex-col items-start justify-start  w-[97%]  gap-[30px]">
            <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2.5">
              <h1 className="sm:text-3xl text-2xl font-semibold text-gray-900">
                Apply As Instructor
              </h1>
              <p className="!leading-[30px] text-base text-gray-800 font-normal ">
                Teaching is a vital and admirable career. As such, it comes with
                quite a bit of responsibility, both in practice and in
                preparation with many skills required to be a teacher. The
                following steps provide a general breakdown of the requirements
                for teachers:
              </p>
            </div>

            <div className="flex flex-col  justify-start w-full gap-5">
              <div className="flex flex-row justify-start items-start w-full gap-[30px]">
                <div className="flex flex-col items-center justify-start w-[33%] pt-1.5 gap-[13px]">
                  <p className="!text-orange-600 !font-medium text-base ">
                    Instructor Requirements
                  </p>
                  <div className="h-px w-full bg-orange-600 shadow-md" />
                </div>
                <p className="mt-[5px]  text-base font-semibold">
                  Instructor Rules
                </p>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-2.5">
                <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                  <div className="h-[10px] w-[10px] bg-orange-600 rounded-[50%]" />
                  <p className="mt-[3px] !text-gray-900 font-semibold">
                    An undergraduate degree
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                  <div className="h-[10px] w-[10px] bg-orange-600 rounded-[50%]" />
                  <p className="mt-[3px] !text-gray-900  font-semibold">
                    Participate in supervised teaching
                  </p>
                </div>

                <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                  <div className="h-[10px] w-[10px] bg-orange-600 rounded-[50%]" />
                  <p className="mt-[3px] !text-gray-900  font-semibold">
                    State teaching license
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px] sm:gap-2.5">
                  <div className="h-[10px] w-[10px] bg-orange-600 rounded-[50%]" />
                  <p className="mt-[3px] !text-gray-900  font-semibold">
                    Pursue graduate studies
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <Link to={"/join as mentor/apply"}>
                <button className="py-2 ml-0 font-medium min-w-[143px] bg-orange-500 text-white rounded-[10px] ">
                  Apply Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full md:px-5 max-w-7xl">
          <div className="flex flex-col items-center justify-start w-[83%] pt-[5px] gap-16">
            <h1 className="!font-metropolis text-center md:text-[40px] text-[25px] font-bold leading-[55px] !text-gray-900">
              How to apply to join as instructor
            </h1>
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row justify-center w-full p-2 bg-white shadow-sm rounded-[20px]">
                <div className="flex flex-row justify-center w-full mt-[7px]">
                  <div className="flex flex-row justify-center w-full bg-white">
                    <img
                      src="/assets/images/img_bg.png"
                      alt="bg_three"
                      className="w-full object-cover rounded-[20px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default JoinAsMentor;
