import { RatingBar } from "@/shared/RatingBar";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SelectBox } from "@/shared/SelectBox";
import Footer from "./Footer";
import PopularBookCard from "./PopularBookCard";
import BookCard from "./BookCard";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

function Shop() {
  const [searchBarValue4, setSearchBarValue4] = useState("");
  return (
    <div className="flex flex-col items-center justify-start w-full gap-[50px] bg-gray-100 ">
      <div className="flex flex-col items-start justify-start mx-12 my-8  gap-[5px] p-5 md:px-5 bg-red-50 max-w-7xl rounded-[20px]">
        <h2 className="sub-route">Home | Shop</h2>
        <div className="flex  justify-between w-full items-center h-full">
          <div
            className="
            text-[45px]  font-semibold
             w-1/3
          "
          >
            <h1>
              FreeLanceIT Online <br />
              Book Shop
            </h1>
          </div>

          <img
            src="assets/images/img_kisspng_bookcas.png"
            alt="book-img"
            className="object-cover w-1/3"
          />
        </div>
      </div>

      <div className="flex flex-row  justify-start items-start  pl-12 pr-12 gap-10 ">
        <div className="flex flex-col w-[31%] gap-[39px]">
          <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-3.5">
            <h2 className="text-3xl font-semibold">Popular Books</h2>
            <div className="flex flex-col w-full gap-[15px]">
              <PopularBookCard
                text1={"The Three Musketeers, by"}
                text2={"Alexandre Dumas"}
                price={"39.00"}
                img={"/assets/images/img_image_14.png"}
              />
              <PopularBookCard
                text1={"The Three Musketeers, by"}
                text2={"Alexandre Dumas"}
                price={"39.00"}
                img={"/assets/images/img_image_90x75.png"}
              />
              <PopularBookCard
                text1={"The Three Musketeers, by"}
                text2={"Alexandre Dumas"}
                price={"39.00"}
                img={"/assets/images/img_image_4.png"}
              />

              <p className="text-xl font-medium leading-5 text-orange-500">
                See More
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-[15px]">
            <h2 className="text-3xl font-semibold"> New Arrivals</h2>

            <PopularBookCard
              text1={"The Three Musketeers, by"}
              text2={"Alexandre Dumas"}
              price={"39.00"}
              img={"/assets/images/img_image_14.png"}
            />
            <PopularBookCard
              text1={"The Three Musketeers, by"}
              text2={"Alexandre Dumas"}
              price={"39.00"}
              img={"/assets/images/img_image_90x75.png"}
            />
            <PopularBookCard
              text1={"The Three Musketeers, by"}
              text2={"Alexandre Dumas"}
              price={"39.00"}
              img={"/assets/images/img_image_4.png"}
            />

            <p className="text-xl font-medium leading-5 text-orange-500">
              See More
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start w-[65%]  gap-10">
          <div className="flex flex-col items-center justify-start w-full gap-[30px]">
            <div className="flex flex-row justify-start  gap-6 md:gap-5">
              <button className="text-black py-2 sm:px-5 font-medium min-w-[131px] rounded-[10px] bg-orange-400">
                All Books
              </button>
              <button className="text-black bg-white  sm:px-5  font-medium min-w-[200px] rounded-[10px]">
                Kindergarten
              </button>
              <button className="text-black bg-white sm:px-5 font-medium min-w-[190px] rounded-[10px]">
                High School
              </button>
              <button className="text-black bg-white sm:px-5 font-medium min-w-[190px] rounded-[10px]">
                College
              </button>
            </div>
            <div className="flex flex-row  justify-start w-full gap-[15px] sm:gap-5 ">
              <div className="relative w-[70%] gap-[35px]  ">
                <Input
                  name="search"
                  placeholder="Search Class, Course, Book Name"
                  value={searchBarValue4}
                  onChange={(e) => setSearchBarValue4(e)}
                  type="text"
                  className="text-gray-700 rounded-tr-[10px] rounded-br-[10px] font-medium h-12"
                />
                <div className="bg-orange-600 w-7 h-7 absolute top-[10px] right-3  rounded-sm">
                  <img
                    src="/assets/icons/img_search.svg"
                    alt="search"
                    className="m-[6px] w-4 h-4 pointer-events-none "
                  />
                </div>
              </div>

              <SelectBox
                shape="round"
                indicator={
                  <img src="/assets/icons/img_arrowdown.svg" alt="arrow_down" />
                }
                name="sortbylatest"
                placeholder="Sort by: Latest"
                options={dropDownOptions}
                className="w-[30%]   font-medium  bg-white "
              />
            </div>

            <div className="justify-center w-full gap-[15px] grid-cols-3  grid">
              <BookCard img={"/assets/images/img_image_240x230.png"} />
              <BookCard img={"/assets/images/img_image_5.png"} />
              <BookCard img={"/assets/images/img_image_6.png"} />
              <BookCard img={"/assets/images/img_image_7.png"} />
              <BookCard img={"/assets/images/img_image_8.png"} />
              <BookCard img={"/assets/images/img_image_9.png"} />
              <BookCard img={"/assets/images/img_image_5.png"} />
              <BookCard img={"/assets/images/img_image_240x230.png"} />
              <BookCard img={"/assets/images/img_image_8.png"} />
            </div>
          </div>

          <div className="flex flex-row justify-between items-center w-[35%]">
            <button className="w-[15%] h-[40px] px-3.5 rounded-[5px] bg-white">
              <img src="/assets/icons/img_arrow_left.svg" alt="left-arrow" />
            </button>
            <p className="!text-gray-900 !font-medium text-base leading-5">
              Page
            </p>
            <button
              size="sm"
              className="!text-gray-700 font-medium min-w-[42px] h-[36px] px-[15px] text-lg rounded-lg bg-white"
            >
              5
            </button>
            <p className="!text-gray-900 !font-medium text-base leading-5 ">
              of 80
            </p>
            <button className="w-[15%] h-[40px] px-3.5 rounded-[5px] bg-red-300">
              <img src="/assets/icons/img_arrow_right.svg" alt="right-arrow" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Shop;
