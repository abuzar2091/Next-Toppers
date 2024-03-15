import FreelanceCoursesDetailsCard from "@/shared/FreelanceCoursesDetailsCard";
import { RatingBar } from "@/shared/RatingBar";
import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function CourseDetails() {
  return (
    <div className="flex flex-col  justify-start w-full gap-[50px] bg-gray-100 ">
      <div className="flex flex-row justify-between items-start w-[92%] mx-auto  md:gap-10 px-5  my-8  bg-gray-200 max-w-7xl rounded-[20px]">
        <div className="flex flex-col items-start justify-start w-[63%]  ml-[5px] gap-[29px]">
          <p className="!text-black tracking-[0.48px] !font-medium">
            Home | Courses | Course Details
          </p>

          <div className="flex flex-col items-start justify-start w-full gap-[29px]">
            <div className="flex flex-row justify-start w-full">
              <div className="h-[455px] w-full relative">
                <img
                  src="/assets/images/img_pexels_vanessa_garcia_6325959.png"
                  alt="pexelsvanessa"
                  className="justify-center h-[455px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                />
                <button className="w-[60px]  bg-red-300 left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[50%] h-[60px] px-[22px]">
                  <img src="/assets/icons/img_call_button.svg" />
                </button>
              </div>
            </div>
            <h1 className="!text-black text-[25px] font-semibold">
              Maths - for Standard 3 Students | Episode 2
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-[32%] mr-[5px] gap-3">
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
              <div className="flex flex-col items-start justify-start w-[50%] gap-[3px]">
                <h3 className="!text-black font-semibold">
                  Maths - Introduction
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
                  Maths - for Standard 3 St..
                </h1>
                <p className="text-deep_orange-400 text-sm font-medium">5:43</p>
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
                  Maths - for Standard 3 St..
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
                  Maths - for Standard 3 St..
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
                  Maths - for Standard 3 St..
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
                  Maths - for Standard 3 St..
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
        <div className="flex flex-row justify-start items-start w-full gap-10  md:px-5 max-w-7xl">
          <div className="flex flex-col items-center justify-start w-[66%] md:w-full gap-6">
            <div className="flex flex-col items-start justify-start w-full gap-2">
              <h1 className="text-3xl font-semibold">Course Details</h1>
              <p className="leading-[30px] text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-2">
              <h1 className="text-3xl font-semibold">Certification</h1>
              <p className="leading-[30px] text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-2">
              <h1 className="text-3xl font-semibold">Who this course is for</h1>
              <p className="leading-[30px] text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start w-full pt-0.5">
              <h1 className="text-3xl font-semibold">
                What you&#39;ll learn in this course:
              </h1>
              <div className="flex  justify-start items-center w-full mt-1.5 gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-deep_orange-400 rounded-[50%]" />
                <p className="mt-[10px] sm:mt-0 !text-gray-900 text-base font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="flex  justify-start items-center w-full mt-1.5 gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-deep_orange-400 rounded-[50%]" />
                <p className="mt-[10px] sm:mt-0 !text-gray-900 text-base font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="flex  justify-start items-center w-full mt-1.5 gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-deep_orange-400 rounded-[50%]" />
                <p className="mt-[10px] sm:mt-0 !text-gray-900 text-base font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>

              <div className="flex   justify-start items-center w-full mt-1.5 gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-deep_orange-400 rounded-[50%]" />
                <p className="mt-[3px] sm:mt-0 !text-gray-900 text-base font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="flex  justify-start items-center w-full mt-1.5 gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-deep_orange-400 rounded-[50%]" />
                <p className="mt-[3px] sm:mt-0 !text-gray-900 text-base font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="flex  justify-start items-center w-full mt-1.5 gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-deep_orange-400 rounded-[50%]" />
                <p className="mt-[3px] sm:mt-0 !text-gray-900 text-base font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="flex  justify-start items-center w-full mt-1.5 gap-2.5 py-[3px] sm:gap-2.5">
                <div className="h-[10px] w-[10px] bg-deep_orange-400 rounded-[50%]" />
                <p className="mt-[3px] sm:mt-0 !text-gray-900 text-base font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start w-[43%]  gap-[23px]">
            <div className="flex flex-col items-center justify-center w-full gap-[19px] p-[19px] bg-white rounded-[10px]">
              <div className="flex flex-row justify-between items-center w-full mt-[5px]">
                <h1 className="!text-gray-600  text-xl font-semibold">Price</h1>
                <h1 className="text-deep_orange-400 text-right !font-bold text-[25px] ">
                  $49.00
                </h1>
              </div>
              <div className="flex flex-row justify-between w-full">
                <h1 className="mb-0.5 !text-gray-600 text-xl font-semibold">
                  Instructor
                </h1>
                <Link to="/faculty-wade-warren">
                <h1 className="text-right underline text-xl font-semibold">
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
            <button className=" bg-orange-600  text-white w-full sm:px-5 font-medium rounded-[5px] h-[54px] px-[35px] text-lg">
              Purchase Course
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start w-[92%] mx-auto gap-12 md:px-5 max-w-7xl">
        <h1
          size="2xl"
          className="!font-metropolis text-[45px] font-bold leading-[55px]"
        >
          Similar Courses
        </h1>
        <div className="justify-center w-full gap-10 grid-cols-2  md:gap-5 grid">
          <FreelanceCoursesDetailsCard
            imageOne="/assets/images/img_image_103x160.png"
            className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
          />
          <FreelanceCoursesDetailsCard
            imageOne="/assets/images/img_image_2.png"
            className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
          />
          <FreelanceCoursesDetailsCard
            imageOne="/assets/images/img_image_3.png"
            className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
          />
          <FreelanceCoursesDetailsCard
            //   imageOne="/assets/images/img_image_4.png"
            className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CourseDetails;
