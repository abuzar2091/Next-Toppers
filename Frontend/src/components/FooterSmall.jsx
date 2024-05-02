import { SelectBox } from "@/shared/SelectBox";
import React from "react";

function FooterSmall() {
  const dropDownOptions4 = [
    { label: "Press", value: "option1" },
    { label: "Investors", value: "option2" },
    { label: "Privacy", value: "option3" },
    { label: "Help", value: "option3" },
    { label: "Contact", value: "option3" },
  ];
  const dropDownOptions3 = [
    { label: "Home", value: "option1" },
    { label: "Professional Education", value: "option2" },
    { label: "Courses", value: "option3" },
    { label: "Admissions", value: "option3" },
    { label: "Testimonial", value: "option3" },
    { label: "Programs", value: "option3" },
  ];
  const dropDownOptions2 = [
    { label: "Learners", value: "option1" },
    { label: "Partners", value: "option2" },
    { label: "Developers", value: "option3" },
    { label: "Transactions", value: "option3" },
    { label: "Blog", value: "option3" },
    { label: "Teaching Center", value: "option3" },
  ];
  const dropDownOptions1 = [
    { label: "Classroom courses", value: "option1" },
    { label: "Virtual classroom courses", value: "option2" },
    { label: "E-learning courses", value: "option3" },
    { label: "Video Courses", value: "option3" },
    { label: "Offline Courses", value: "option3" },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center   pb-[60px] gap-[35px]">
        {/* <div className="flex flex-col items-center justify-center w-[97%]  gap-[15px]"> */}
        <img
          src="/assets/icons/logoicon.svg"
          alt="logo_three"
          className="h-[40px] ml-15"
        />

        <SelectBox
          shape="round"
          indicator={
            <img src="/assets/icons/img_arrowdown.svg" alt="arrow_down" />
          }
          name="sortbylatest"
          placeholder="Courses"
          options={dropDownOptions1}
          className=" w-[100%]  font-medium bg-white "
        />
        <SelectBox
          shape="round"
          indicator={
            <img src="/assets/icons/img_arrowdown.svg" alt="arrow_down" />
          }
          name="sortbylatest"
          placeholder="Community"
          options={dropDownOptions2}
          className="w-[100%]  font-medium bg-white "
        />
        <SelectBox
          shape="round"
          indicator={
            <img src="/assets/icons/img_arrowdown.svg" alt="arrow_down" />
          }
          name="sortbylatest"
          placeholder="Quick links"
          options={dropDownOptions3}
          className="w-[100%]  font-medium bg-white "
        />
        <SelectBox
          shape="round"
          indicator={
            <img src="/assets/icons/img_arrowdown.svg" alt="arrow_down" />
          }
          name="sortbylatest"
          placeholder="More"
          options={dropDownOptions4}
          className="w-[100%]  font-medium bg-white "
        />
        <div className="flex justify-between mt-6 w-[90%]">
          <div className="flex flex-row justify-between mr-7 items-center gap-4">
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
          <p className="!text-base !font-normal">©2024 FreelanceIT</p>
        </div>
      </div>
    </>
  );
}

export default FooterSmall;
