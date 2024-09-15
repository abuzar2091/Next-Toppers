import React from "react";
import { RatingBar } from "./RatingBar";
// import { Button, Img, Heading, RatingBar } from "./..";

export default function FreelanceCoursesDetailsCard({
  imageOne = "/assets/images/img_image_1.png",
  thethree = "Computer Network",
  price = "$30.00",

  ...props
}) {
  return (
    <div {...props}>
      <div className="flex md:flex-row  sm:flex-col  justify-start items-center w-[99%]  gap-[15px] sm:gap-5">
        <div className="flex flex-row justify-start  w-[31%] ">
          <img
            src={imageOne}
            alt="image_one"
            className="object-cover rounded-[10px]"
          />
        </div>

        <div className="flex flex-col items-start justify-start w-[67%] sm:w-full ">
          <h1 className="lg:text-[22px] md:text-[18px] text-[15px] font-semibold">
            {thethree}
          </h1>
          <RatingBar
            value={5}
            isEditable={true}
            color="#ffc107"
            activeColor="#ffc107"
            size={20}
            className="flex justify-between"
          />
          <div className="flex w-full justify-between">
            <h1 className="lg:text-[22px] font-semibold text-deep_orange-400">
              {price}
            </h1>
            <img
              src="/assets/icons/img_shopping_bag_24.svg"
              className="bg-red-100  w-[44px] md:h-[44px] h-[30px] md:px-2.5 rounded-[5px] hover:bg-red-500"
            />
          </div>
        </div>
        {/* <img
          src="/assets/icons/img_shopping_bag_24.svg"
          className=" hidden bg-red-100  w-[44px] h-[44px] px-2.5 md:block mt-12 rounded-[5px] hover:bg-red-500"
        /> */}
      </div>
    </div>
  );
}
