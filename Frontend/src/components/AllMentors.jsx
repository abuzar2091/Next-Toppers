import MentorCard from "@/shared/MentorCard";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function AllMentors() {
  const mentor="all mentor"
  const [index,setIndex]=useState(0);
  const fetchMentors = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_API_URI}/api/v1/faculty/get-faculty-mentors`);
    return data.data.mentors; // Return the data from the API response
  };
const { data: facultyMentor, isLoading, error } = useQuery({
  queryKey: ['faculty', mentor], // Use categoryName in queryKey
  queryFn: () => fetchMentors(),  
 // Ensure the query runs only if categoryName exists
});
const [currentPage, setCurrentPage] = useState(1);
const cardsPerPage = 12;
// console.log("faculty babu ",facultyMentor);
const startIndex = (currentPage - 1) * cardsPerPage;
const endIndex = startIndex + cardsPerPage;
let displayedMentor=[];
let currentCount = 0;
if(facultyMentor?.length>0)
{for (const mentor of facultyMentor) {
  if (currentCount >= startIndex && currentCount < endIndex) {
    displayedMentor.push(mentor);
  }
  currentCount++;
 }}
 const totalCards=facultyMentor?.length>0 && facultyMentor?.length;
 const totalPages = Math.ceil(totalCards / cardsPerPage);
 const handleViewLess = () => {
  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};
const handleViewMore = () => {
  setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(totalCards / cardsPerPage)));
};
useEffect(()=>{
  setIndex(0);
})

  let mentorsImg = [
      "/assets/images/img_bg_290x290.png" ,
      "/assets/images/img_bg_1.png",
      "/assets/images/img_bg_2.png",
     "/assets/images/img_bg_3.png",
      "/assets/images/img_bg_4.png",
      "/assets/images/img_bg_5.png",
      "/assets/images/img_bg_6.png",
      "/assets/images/img_bg_7.png",
      "/assets/images/img_bg_9.png",
      "/assets/images/img_bg_8.png",
      "/assets/images/img_bg_10.png",
      "/assets/images/img_bg_11.png",
  ];
  const renderMentor=()=>{
    let currentIndex=index;

  return (
    <div className="bg-gray-100">
      <div className="sm:mx-12 flex flex-col gap-12 mx-6 ">
        <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5  md:px-5 bg-red-50 my-8  max-w-7xl rounded-[20px]">
          <p className="mt-[5px]  md:ml-0 !text-black !font-medium">
            Home | Our Mentors
          </p>
          <div className="flex sm:flex-row flex-col  w-[99%]  ml-2.5  ">
            <h1
              className="
            lg:text-[40px] font-semibold  md:w-[60%]
             lg:w-[75%] md:text-[35px]  text-[25px]
            "
            >
              Next Toppers have the
              <br />
              qualified mentor
            </h1>
          
            <img
              src="assets/images/img_kisspng_bookcas.png"
              alt="book-img"
              className="object-cover mx-auto sm:w-1/3 w-[80%]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-12">
          <div className="grid cursor-pointer xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {displayedMentor.length>0 && displayedMentor?.map((mentor, index) => 
             {   const image = mentorsImg[currentIndex % mentorsImg.length];
                currentIndex += 1;
               return (
          //  <Link to={`/mentors/${mentor._id}`}>
               <MentorCard key={mentor._id} data={mentor} img={image}/>
          //  </Link>
                

               )
          }
            )}
          </div>

          <div className="flex flex-row justify-between items-center lg:w-[35%] w-[70%]">
            <button onClick={handleViewLess} disabled={currentPage === 1}  className="w-[15%] h-[40px] px-3.5 rounded-[5px] bg-white">
              <img src="/assets/icons/img_arrow_left.svg" alt="left-arrow" className="mx-auto" />
            </button>
            <p className="!text-gray-900 !font-medium text-base leading-5">
              Page
            </p>
            <button
              size="sm"
              className="!text-gray-700 font-medium min-w-[42px] h-[36px] px-[15px] text-lg rounded-lg bg-white"
            >
              {currentPage}
            </button>
            <p className="!text-gray-900 !font-medium text-base leading-5 ">
              of {totalPages}
            </p>
            <button onClick={handleViewMore}
            disabled={currentPage === totalPages}  className="w-[15%] h-[40px] px-3.5 rounded-[5px] bg-red-300 hover:bg-red-400">
              <img src="/assets/icons/img_arrow_right.svg" alt="right-arrow" className="mx-auto" />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
return (
  <div>
    {renderMentor()}
  </div>
);
}

export default AllMentors;
