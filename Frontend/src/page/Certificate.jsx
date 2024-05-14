import React from "react";
import { ChevronRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import RazorpayForm from "@/shared/RazorPayFrom";

function GetCertificate() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 px-20">
      <h1 className="text-3xl font-semibold">
        Get <span className="text-orange-400">Certified</span>
      </h1>
      <div className="flex">
      <div className="flex flex-col gap-3">
        <div>
      <p className="leading-[30px] flex items-center gap-3 text-base font-normal">
        <GraduationCap />{" "}
        <span className="!font-semibold text-[20px]">Start today</span>
      </p>
      <p className="text-[18px]">
        Upon successful completion of the course, students will receive a
        certificate of completion, validating their proficiency in graphic
        design fundamentals.
      </p>

        </div>
        <div>

      <p className="leading-[30px] flex items-center gap-3 text-base font-normal">
        <GraduationCap />{" "}
        <span className="!font-semibold text-[20px]">
          {" "}
          Believe in yourself{" "}
        </span>
      </p>
      <p className="text-[18px]">
        You just need the right guidance. Consistency & hard work will help you
        be Internship/Placement ready for Tech companies.
      </p>
        </div>
      <Link to="/pages.razorpay.com/unnayan-june">
        <div className="flex gap-1 mt-8 ml-4 items-center bg-orange-500 text-white  rounded-lg
         px-4 py-1 hover:bg-orange-400 w-[190px]">
        <button className="!font-semibold text-[25px]  
        ">Enroll Now</button>
           <ChevronRight className="mt-1" />
        </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-[18px] font-semibold">Start Your Learning Journey Today!</p>
        <img src="/assets/images/certificate.png" alt="completion certificate"/>

      </div>
      </div>
    </div>
  );
}

export default GetCertificate;
