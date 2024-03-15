import React from "react";

export default function Mentorcard({
  //   bgOne = "/assets/images/img_bg_290x290.png",
  //   kristinwatson = "Kristin Watson",
  data,
  ...props
}) {
  const foundermentor = "Founder & Mentor";
  return (
    <div {...props} className="">
      <div className="flex flex-col items-center justify-start h-[290px] w-[260px]">
        <img
          src={data.img}
          alt="image"
          className="w-[290px]  object-cover rounded-[10px]"
        />
      </div>
      <div className="flex flex-row justify-start items-start w-full gap-0">
        <div className="flex flex-col items-start justify-start w-[84%] pt-[5px] gap-[13px]">
          <p className="!text-black !font-medium text-base  leading-5">
            {data.name}
          </p>
          <p className="text-sm font-medium text-gray-700">{foundermentor}</p>
        </div>
        <img
          src="/assets/icons/img_arrow_down_black_900_02.svg"
          alt="arrowdown_nine"
          className="h-[24px] w-[24px]"
        />
      </div>
    </div>
  );
}
