import { RatingBar } from "@/shared/RatingBar";
import React from "react";

function BookCard({ img }) {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-2">
      <div className="flex flex-col items-center justify-start w-full md:h-auto p-5 bg-white rounded-[10px]">
        <img
          src={img}
          alt="image"
          className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-[9px]">
        <h2 className="text-lg font-semibold">The Three Musketeers</h2>
        <div className="flex flex-row justify-between items-center w-full">
          <h3 className="!text-red-300 text-lg font-semibold">$40.00</h3>
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
    </div>
  );
}

export default BookCard;
