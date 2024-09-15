import React, { useState } from "react";
import projectData from "../data/whatwillyoulearndata.json";
import { SelectBox } from "@/shared/SelectBox";
import { ChevronUp } from "lucide-react";
//import { CircleCheck } from 'lucide-react';

function WhatWillYouLearn() {
  const whatWillLearn = projectData.projects;
  // const [arrow,setArrow]=useState(true);
  const [arrow, setArrowUp] = useState(
    new Array(whatWillLearn.length).fill(false)
  );
 
  console.log("click here  ", arrow);
  return (
    <div className="flex flex-col items-center justify-center w-full  pb-[60px] gap-[35px]">
      <h1 className="sm:text-3xl text-xl font-semibold">
        What you&#39;ll learn in this course
      </h1>
      <div className=" flex flex-col gap-4 w-[80%]">
        {whatWillLearn.map((topic, index) => (
          <div
            className="flex items-center gap-2"
            key={index}
            // onClick={(e) => {console.log("clicj")}}
            onClick={() =>
                setArrowUp((prevArrows) => {
                const newArrows = [...prevArrows];
                newArrows[index] = !newArrows[index];
                return newArrows;
              })
            }
          >
            <SelectBox
              shape="round"
              indicator={
                <div>
                  {!arrow[index] ? (
                    <img
                      src="/assets/icons/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  ) : (
                    <ChevronUp />
                  )}
    
        </div>
              }
              name="sortbylatest"
              placeholder={Object.keys(topic)}
              options={Object.values(topic)}
              className="w-[100%] font-medium  bg-gray-200 "
            /> 
        {/* <img
        src={`${arrow[index]?`/assets/icons/arrow_up.svg`:`/assets/icons/img_arrow_down_black_900_02.svg`}`}
        alt="arrowdown_nine"
        className="h-[24px] w-[24px]"
        /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWillYouLearn;
