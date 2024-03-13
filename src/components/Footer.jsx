import React from "react";
import { Input } from "./ui/input";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full">
    <div className="flex  justify-between items-center py-[10px] px-[50px] my-12  bg-black w-[1100px] max-w-7xl rounded-[20px]">
      <div className="flex flex-col items-start justify-start w-[16%]  gap-[57px] my-[11px] ">
        <img
          src="/assets/images/img_ellipse_169.png"
          alt="circleimage"
          className="h-[60px] w-[60px]  rounded-[50%]"
        />
        <img
          src="/assets/images/img_ellipse_170.png"
          alt="circleimage_one"
          className="h-[60px] w-[60px]  ml-[127px]  rounded-[50%]"
        />
        <img
          src="/assets/images/img_ellipse_171.png"
          alt="circleimage_two"
          className="h-[60px] w-[60px]  ml-[30px] rounded-[50%]"
        />
      </div>

      <div className="flex flex-col items-center justify-start w-[49%] md:w-full   gap-10">
        <div className="flex flex-col items-center justify-start w-full pb-[3px] gap-[26px]">
          <h1 className="!text-white text-3xl !font-metropolis text-center text-[45px] font-bold leading-[55px]">
            Subscribe For Get Update
            <br />
            Every New Courses
          </h1>
          <p className="!text-gray-500 text-center !text-base !font-normal   leading-5">
            10k+ students daily learn with FreelanceIT. Subscribe for new
            courses.
          </p>
        </div>
        <div className="flex flex-row  justify-center w-full ">
          <Input
            shape="round"
            type="email"
            name="email"
            placeholder="enter your email"
            className="w-[50%] text-white  font-medium rounded-tr-[0px] rounded-br-[0px] "
          />
          <button className="bg-red-400 h-[40px] text-white text-base rounded-tr-[10px] rounded-br-[10px] font-medium min-w-[130px]">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end justify-start w-[16%]  gap-[57px]">
        <img
          src="/assets/images/img_ellipse_166.png"
          alt="circleimage"
          className="h-[60px] w-[60px]  mr-[30px]  rounded-[50%]"
        />
        <img
          src="/assets/images/img_ellipse_167.png"
          alt="circleimage"
          className="h-[60px] w-[60px]  mr-[127px]  rounded-[50%]"
        />
        <img
          src="/assets/images/img_ellipse_168.png"
          alt="circleimage"
          className="h-[60px] w-[60px] rounded-[50%]"
        />
      </div>
    </div>

    <div className="flex flex-row justify-center w-full px-20 py-10 bg-gray-100">
      <div className="flex flex-row  justify-between items-center w-full max-w-7xl">
        <div className="flex flex-col items-center justify-start w-[17%] pt-0 pb-[177px] gap-[35px]">
          <div className="flex flex-col items-center justify-start w-[97%]  gap-[15px]">
            <img
              src="/assets/icons/logoicon.svg"
              alt="logo_three"
              className="h-[30px]"
            />

            <div className="flex flex-row justify-between mr-7 items-center w-[85%]">
              <img
                src="/assets/icons/img_facebook_logo_1.svg"
                alt="facebooklogoone"
                className="h-[22px] w-[22px]"
              />

              <img
                src="/assets/icons/img_instagram_icon.svg"
                className="bg-orange-500 w-[36px] rounded-[50%] h-[36px] px-[9px]"
              />
              <img
                src="/assets/icons/img_twitter_logo.svg"
                alt="twitterlogo_one"
                className="h-[17px]"
              />
              <img
                src="/assets/icons/img_linkedin_icon.svg"
                alt="linkedinicon"
                className="h-[18px]"
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-start w-full gap-3.5">
            <p className="!text-base !font-normal">©2024 FreelanceIT</p>
            <p className=" !text-base !font-normal ">
              {" "}
              FreelanceIT is a registered{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-[14%] pb-[54px] gap-[19px]">
          <h5 className="font-semibold !text-[22px]">Courses</h5>
          <div className="flex flex-col items-start justify-start w-full gap-6 py-[5px]">
            <p className="!text-base !font-normal  leading-5 ">
              Classroom courses
            </p>
            <p className="!text-base !font-normal !leading-[30px] text-gray-600">
              Virtual classroom courses
            </p>
            <p className="!text-base !font-normal text-gray-600  ">
              E-learning courses
            </p>
            <p className="!text-base !font-normal text-gray-600 ">
              Video Courses
            </p>
            <p className="!text-base !font-normal text-gray-600  ">
              Offline Courses
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-[14%] pb-[30px] gap-[17px]">
          <h1 className="font-semibold !text-[22px]">Community</h1>
          <div className="flex flex-col items-start justify-center w-full gap-[27px] py-[3px]">
            <p className="mt-0.5 !text-base !font-normal">Learners</p>
            <p className="!text-base !font-normal">Partners</p>
            <p className="!text-base !font-normal">Developers</p>
            <p className="!text-base !font-normal">Transactions</p>
            <p className="!text-base !font-normal">Blog</p>
            <p className="!text-base !font-normal">Teaching Center</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-[15%] pb-[28px] gap-[19px]">
          <h1 className="font-semibold !text-[22px]">Quick links</h1>
          <div className="flex flex-col items-start justify-center w-full gap-[27px] py-[3px]">
            <p className="mt-0.5 !text-base !font-normal">Home</p>
            <p className="!text-base !font-normal">
              Professional Education
            </p>
            <p className="!text-base !font-normal">Courses</p>
            <p className="!text-base !font-normal">Admissions</p>
            <p className="!text-base !font-normal">Testimonial</p>
            <p className="!text-base !font-normal">Programs</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-[14%]  pb-[33px] gap-[19px]">
          <h1 className="font-semibold !text-[22px]">More</h1>
          <div className="flex flex-col items-start justify-start w-full gap-[26px] py-1">
            <p className="!text-base !font-normal">Press</p>
            <p className="!text-base !font-normal">Investors</p>
            <p s className="!text-base !font-normal">
              Terms
            </p>
            <a href="#">
              <p className="!text-base !font-normal">Privacy</p>
            </a>
            <p className="!text-base !font-normal">Help</p>
            <p className="!text-base !font-normal">Contact</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
