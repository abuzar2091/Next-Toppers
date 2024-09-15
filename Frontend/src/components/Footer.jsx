import React, { useState } from "react";
import { Input } from "./ui/input";
import { SelectBox } from "@/shared/SelectBox";
import FooterSmall from "./FooterSmall";
import axios from "axios";
import { formValidationSchema } from "@/lib/validation";

function Footer() {
  const [studentEmail, setStudentEmail] = useState("");
  const [msg,setMsg]=useState("");
  const [error,setError]=useState("");
  const [submitform,setSubmitForm]=useState(false);
  const handleSubmit = async(e) => {
    e.preventDefault();
      try {
      setSubmitForm(true);
      console.log(studentEmail);
      formValidationSchema.parse({studentEmail});
      await axios.post(`${import.meta.env.VITE_BACKEND_API_URI}/api/v1/users/email`
        ,{studentEmail})
      .then((res)=>{
        console.log("form successfully submitted ",res.data.data);
         setMsg(res.data.data);
        setTimeout(() => {
          setMsg("");
         }, 5000);
      })
      .catch((err)=>{
        console.log("some error occcur ",err);
      })
      setSubmitForm(false);
      setStudentEmail("");
} catch (error) {
 setSubmitForm(false);
 console.log("error occured ",error);
  setError(error.errors[0]?.message);
  setTimeout(() => {
    setError("");
   }, 5000);

  };
}
  return (
    <footer className="flex flex-col gap-[100px] items-center justify-center w-full">
      <div className="flex flex-col md:flex-row justify-between w-[90%] items-center py-[10px] gap-4 lg:px-[50px] my-12  bg-black    max-w-7xl rounded-[20px]">
        <div className="flex md:flex-col items-start justify-center w-full md:w-[16%] md:gap-[57px] my-[11px]">
          <img
            src="/assets/images/img_ellipse_169.png"
            alt="circleimage"
            className="sm:h-[60px] sm:w-[60px] w-[50px] ml-[15px] rounded-[50%]"
          />
          <img
            src="/assets/images/img_ellipse_170.png"
            alt="circleimage_one"
            className="sm:h-[60px] sm:w-[60px] w-[50px]  sm:ml-[127px] ml-[60px] rounded-[50%]"
          />
          <img
            src="/assets/images/img_ellipse_171.png"
            alt="circleimage_two"
            className="sm:h-[60px] sm:w-[60px] w-[50px]  sm:ml-[20px] ml-[50px] rounded-[50%]"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-[80%] md:w-[49%]  gap-8">
          <div className="flex flex-col items-center justify-start w-full pb-[3px] gap-4 md:gap-[26px]">
            <h1 className="!text-white text-2xl !font-metropolis text-center lg:text-[45px] font-bold md:leading-[45px]">
              Subscribe For Get Update
              <br />
              Every New Courses
            </h1>
            <p className="!text-gray-500 text-center !text-base !font-normal   leading-5">
              10k+ students daily learn with Next Toppers. Subscribe for new
              courses.
            </p>
          </div>
          <div className="flex sm:flex-row sm:gap-0 flex-col gap-4 justify-center w-full ">
            <Input
              shape="round"
              type="email"
              name="studentEmail"
              value={studentEmail}
              onChange={(e) =>
                setStudentEmail(e.target.value )
              }
              required
              placeholder="enter your email"
              className="sm:w-[50%] text-black  font-medium sm:rounded-tr-[0px] sm:rounded-br-[0px]  rounded-[10px]"
            />
            <button className="bg-red-400 h-[40px] text-white text-base sm:rounded-tl-[0px] sm:rounded-bl-[0px] rounded-[10px] font-medium min-w-[130px]" onClick={handleSubmit}>
              { !submitform?"Subscribe":"Subscribing..."}
            </button>
          </div>
          <p className="!text-gray-500 text-center !text-base !font-normal leading-5">{msg} {error}</p>
        </div>

        <div className="flex md:flex-col items-end justify-center w-[100%] md:w-[16%]  md:gap-[57px]">
          <img
            src="/assets/images/img_ellipse_166.png"
            alt="circleimage"
            className="sm:h-[60px] sm:w-[60px] w-[50px] sm:mr-[30px] mr-[10px]  rounded-[50%]"
          />
          <img
            src="/assets/images/img_ellipse_167.png"
            alt="circleimage"
            className="sm:h-[60px] sm:w-[60px] w-[50px]  mr-[100px]  rounded-[50%]"
          />
          <img
            src="/assets/images/img_ellipse_168.png"
            alt="circleimage"
            className="sm:h-[60px] sm:w-[60px] w-[50px]  mr-[15px] rounded-[50%]"
          />
        </div>
      </div>

      <div className="flex hidden md:block flex-row justify-center w-full px-20 py-4 bg-gray-100">
        <div className="grid  lg:grid-cols-5 md:grid-cols-3  w-full max-w-7xl ">
          {/* <div className=" flex flex-row   justify-between items-center w-full max-w-7xl"> w-[17%] w-[14%]..*/}
          <div className="flex flex-col items-center justify-start  pt-0 pb-[177px] gap-[35px]">
            <div className="flex flex-col items-center justify-start w-[97%] pt-2 gap-[15px]">
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
              <p className="!text-base !font-normal">©2024 Next Toppers</p>
              <p className=" !text-base !font-normal ">
                {" "}
                Next Toppers is a registered{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start  pb-[54px] gap-[19px]">
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

          <div className="flex flex-col items-start justify-start  pb-[30px] gap-[17px]">
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

          <div className="flex flex-col items-start justify-start  pb-[28px] gap-[19px]">
            <h1 className="font-semibold !text-[22px]">Quick links</h1>
            <div className="flex flex-col items-start justify-center w-full gap-[27px] py-[3px]">
              <p className="mt-0.5 !text-base !font-normal">Home</p>
              <p className="!text-base !font-normal">Professional Education</p>
              <p className="!text-base !font-normal">Courses</p>
              <p className="!text-base !font-normal">Admissions</p>
              <p className="!text-base !font-normal">Testimonial</p>
              <p className="!text-base !font-normal">Programs</p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start   pb-[33px] gap-[19px]">
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
      <div className="md:hidden w-[95%]">
        <FooterSmall />
      </div>
    </footer>
  );
}

export default Footer;
