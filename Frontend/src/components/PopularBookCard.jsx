import { RatingBar } from "@/shared/RatingBar";
import React, { useState } from "react";

function PopularBookCard({ text1, text2, price, img }) {
  const [purchase,setPurchase]=useState("");
  const purchaseBook=()=>{
    setPurchase("Stock is Empty");
    setTimeout(() => {
      setPurchase("");
     }, 2000);
  }
  return (
    <div className=" relative flex lg:flex-row justify-start flex-col  items-center w-full gap-[15px] p-[21px] sm:p-5   bg-white rounded-[10px] cursor-pointer"
    onClick={purchaseBook}>
      <img
        src={img}
        alt="popular_books"
        className="lg:w-[21%] w-[21%] mx-auto lg:ml-[3px] object-cover rounded-[5px]"
        
      />
      <div className="flex flex-col lg:items-start lg:justify-start justify-center items-center  lg:w-[73%] mr-[3px] gap-2.5">
        <RatingBar
          value={5}
          isEditable={true}
          color="#ffc107"
          activeColor="#ffc107"
          size={16}
          className="flex justify-between w-[92px]"
        />
        <h3 className="text-lg font-semibold w-full">
          <p>{text1},</p>
          <p> by {text2}</p>
        </h3>
        <h4 className="text-lg font-semibold text-orange-600">${price}.00</h4>
        <p className="text-red-700 absolute !font-bold z-1">{purchase}</p>
      </div>
    </div>
  );
}

export default PopularBookCard;
