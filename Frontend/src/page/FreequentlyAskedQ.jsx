import React, { useState } from "react";
import projectData from "../data/frequentlyaskedq.json";
import { SelectBox } from "@/shared/SelectBox";
import { ChevronUp } from "lucide-react";
function FrequentlyAskedQ() {
  const frequentlyAsked = projectData.projects;
  const [arrow, setArrow] = useState(
    new Array(frequentlyAsked.length).fill(false)
  );

  console.log("click here  ", arrow);
  return (
    <div className="flex flex-col items-center justify-center w-full  pb-[60px] gap-[35px]">
      <h1 className="text-3xl font-semibold">
      FREQUENTLY ASKED QUESTIONS
      </h1>
      <div className=" flex flex-col gap-4 w-[80%]">
        {frequentlyAsked.map((topic, index) => (
          <div
            className="flex items-center gap-2"
            key={index}
            // onClick={(e) => {console.log("clicj")}}
            onClick={() =>
              setArrow((prevArrows) => {
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
              className="w-[100%]  font-medium  bg-gray-200 "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrequentlyAskedQ;
