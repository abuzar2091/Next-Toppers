import { RatingBar } from "@/shared/RatingBar";
import React, { useState } from "react";

function BookCard({ img,bookName,bookPrice }) {
  const [purchase,setPurchase]=useState("");
  const purchaseBook=()=>{
    setPurchase("Stock is Empty");
    setTimeout(() => {
      setPurchase("");
     }, 2000);
  }
  console.log("purcahse krlo ",purchase);
  return (
    <div  className="relative  flex flex-col items-center justify-start w-full gap-2">
      <div className="flex flex-col items-center justify-start w-full md:h-auto p-5 bg-white rounded-[10px]">
        <img
          src={img}
          alt="image"
          className="w-full md:h-auto sm:w-full object-cover rounded-[10px] cursor-pointer"
          onClick={purchaseBook}
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-[9px]">
        <h2 className="text-lg font-semibold">{bookName}</h2>
        <div className="flex flex-row justify-between items-center w-full">
          <h3 className="!text-red-300 text-lg font-semibold">${bookPrice}.00</h3>
          <RatingBar
            value={5}
            isEditable={true}
            color="#ffc107"
            activeColor="#ffc107"
            size={16}
            className="flex justify-between w-[92px]"
          />
        </div>
      </div>
      <p className="text-red-700 absolute !font-bold z-1 top-[30%]">{purchase}</p>
    </div>
  );
}

export default BookCard;
