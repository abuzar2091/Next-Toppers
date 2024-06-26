import React, { useEffect, useState } from "react";
import { ChevronRight, GraduationCap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import RazorpayForm from "@/shared/RazorPayFrom";
import axios from "axios";

function GetCertificate({courseId={courseId}}) {
    const navigate = useNavigate();
    const [userdata,setUserData]=useState(null);
    const [loggedIn,setLoggedIn]=useState(false);
    
    useEffect(()=>{
      const checkIsLoggedIn=async()=>{
        await axios.get("/api/v1/users/get-current-user").then((res)=>{
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
      {/* <Link to="/pages.razorpay.com/unnayan-june"> */}
        <div className="flex gap-1 mt-8 ml-4 items-center justify-center bg-orange-500 text-white  rounded-lg
         px-4 py-2 hover:bg-orange-400 w-[250px]">
{userdata?.myCourses?.filter((id)=>id===courseId)?(
        <button className="!font-semibold text-[25px] disabled">
          Already Enrolled
          </button>):( 
            loggedIn?(
              <Link to="/pages.razorpay.com/unnayan-june">
         <button className="!font-semibold text-[25px] 
          "> Enroll Now</button> 
          </Link>
            ):(
              <Link to="/sign-in">
              <button className="!font-semibold text-[25px]   
               "> Enroll Now</button> 
               </Link>
            )
          )
          }
          <ChevronRight className="mt-1" />
        </div>

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
