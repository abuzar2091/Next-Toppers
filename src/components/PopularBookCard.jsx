import { RatingBar } from "@/shared/RatingBar";
import React from "react";

function PopularBookCard({ text1,text2, price,img }) {
  return (
    <div className="flex flex-row justify-start items-center w-full gap-[15px] p-[21px] sm:p-5   bgwhiteg rounded-[10px]">
      <img
        src={img}
        alt="popular_books"
        className="w-[21%]  ml-[3px] object-cover rounded-[5px]"
      />
      <div className="flex flex-col items-start justify-start w-[73%] mr-[3px] gap-2.5">
        <RatingBar
          value={5}
          isEditable={true}
          color="#ffc107"
          activeColor="#ffc107"
          size={16}
          className="flex justify-between w-[92px]"
        />
        <h3 className="text-lg font-semibold w-full">
          <p>{text1}</p>
          <p>{text2}</p>
        </h3>
        <h4 className="text-lg font-semibold text-orange-600">${price}</h4>
      </div>
    </div>
  );
}

export default PopularBookCard;
