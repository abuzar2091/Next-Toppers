import React from "react";
import { RatingBar } from "./RatingBar";
// import { Button, Img, Heading, RatingBar } from "./..";

export default function FreelanceCoursesDetailsCard({
  imageOne = "/assets/images/img_image_1.png",
  thethree = "The Three Musketeers",
  price = "$40.00",
 
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row  justify-start items-center w-[99%]  gap-[15px] sm:gap-5">
        <div className="flex flex-row justify-start w-[31%]">
          <img
            src={imageOne}
            alt="image_one"
            className="object-cover rounded-[10px]"
          />
        </div>

        <div className="flex flex-col items-start justify-start w-[67%] sm:w-full ">
          <h1 className="text-[22px] font-semibold">{thethree}</h1>
          <RatingBar
            value={5}
            isEditable={true}
            color="#ffc107"
            activeColor="#ffc107"
            size={20}
            className="flex justify-between"
          />
          <h1 className="text-[22px] font-semibold text-deep_orange-400">
            {price}
          </h1>
        </div>
        <img
          src="/assets/icons/img_shopping_bag_24.svg"
          className="bg-red-100  w-[44px] h-[44px] px-2.5 mt-12 rounded-[5px] hover:bg-red-500"
        />
      </div>
    </div>
  );
}
