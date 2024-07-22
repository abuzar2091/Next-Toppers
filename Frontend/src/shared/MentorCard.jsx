import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Mentorcard({
   
  //   kristinwatson = "Kristin Watson",
  data,
  img,
  ...props
}) {
  const foundermentor = "Mentor";
  const [arrowup,setArrowUp]=useState(0);
  const handleArrow=()=>{
    setArrowUp(prev=>!prev);
  }
  console.log("phto ",img);
  return (
    <div {...props} className="">
      <Link to={`/mentors/${data._id}`}>
      <div className="flex flex-col items-center justify-start h-[290px] w-[260px]">
        <img
          src={img}
          alt="image"
          className="w-[290px]  object-cover rounded-[10px]"
        />
      </div>
      </Link>
      <div className="flex flex-row justify-start items-start w-full gap-0">
        <div className="flex flex-col items-start justify-start w-[84%] pt-[5px] gap-[13px]">
          <p className="!text-black !font-medium text-base  leading-5">
            {data.mentorDetails.fullName}
          </p>
         {arrowup ? <p className="text-sm font-medium text-gray-700">{foundermentor}</p>:("")}
        </div>
         <img onClick={handleArrow}
         // src="/assets/icons/img_arrow_down_black_900_02.svg"
         src={`${arrowup?`/assets/icons/arrow_up.svg`:`/assets/icons/img_arrow_down_black_900_02.svg`}`}
          alt="arrowdown_nine"
          className="h-[24px] w-[24px]"
        />
      </div>
    </div>
  );
}
