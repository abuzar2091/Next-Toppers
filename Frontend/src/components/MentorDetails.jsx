import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function MentorDetails() {
  const {mentorId}=useParams();
  console.log("id ",mentorId);
  let mentor="single mentor";
  const fetchMentor = async () => {
    const { data } = await axios.get(`/api/v1/faculty/get-faculty-mentor/${mentorId}`);
    return data.data.mentor[0]; // Return the data from the API response
  };
const { data: facultyMentor, isLoading, error } = useQuery({
  queryKey: ['faculty', mentor], // Use categoryName in queryKey
  queryFn: () => fetchMentor(),  
  enabled:!!mentorId
 // Ensure the query runs only if categoryName exists
});
const [seedetail,setDetail]=useState(0);
const handleAbout=()=>{
  setDetail(0);
}
const handleCourse=()=>{
  setDetail(1);
}
const handleEducation=()=>{
  setDetail(2);
}
const handleContact=()=>{
  setDetail(3);
}

useEffect(()=>{
  setDetail(0);
},[])

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="flex flex-col justify-center w-full bg-gray-100 ">
      <div className="flex flex-row justify-center w-full md:px-6 px-5 py-8 max-w-7xl">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row justify-start w-full p-[30px] sm:p-5 bg-red-50 rounded-[20px]">
            <p className="mb-[92px] !text-black !font-medium ">
              Home | Mentor | {facultyMentor.mentorDetails.fullName}
            </p>
          </div>

          <div className="flex flex-row justify-start w-[30%] md:w-full mt-[-81px] ml-[30px] ">
            <div className="flex flex-row  justify-start items-center w-full gap-5 ">
              <img
                src="/assets/images/img_bg_170x170.png"
                alt="bg_one"
                className="md:w-[170px]  mb-px object-cover rounded-[10px] sm:pb-0 pb-20"
              />
              <div className="flex flex-col items-start justify-start  sm:mt-[100px] mt-[50px] w-[90%] gap-0.5">
                <p className="!text-gray-900 md:text-3xl text-lg w-[100%] sm:font-medium">
                 {facultyMentor.mentorDetails.fullName}
                </p>
                <p className="sm:text-lg text-[10px] font-medium">Founder & Mentor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row justify-center w-full">
        <div className="flex  lg:flex-row flex-col  lg:justify-start lg:items-start items-center w-full gap-10  max-w-7xl px-4">
          <div className="flex flex-col justify-start lg:w-[66%] w-[100%] px-2 gap-[29px]">
            <div className="flex flex-row overflow-x-scroll justify-start sm:gap-[19px] gap-[16px] ">
              <button onClick={handleAbout} className={`py-2 font-medium min-w-[142px] rounded-[10px] ${seedetail===0?`bg-orange-300 text-white`:`bg-white`} text-black`}>
                About
              </button>
              <button onClick={handleCourse} className={`sm:px-5 py-2 font-medium min-w-[205px] rounded-[10px]  ${seedetail===1?`bg-orange-300 text-white`:`bg-white`} text-black`}>
                Courses
              </button>
              <button  onClick={handleEducation} className={`sm:px-5 py-2 font-medium min-w-[205px] rounded-[10px]  ${seedetail===2?`bg-orange-300 text-white`:`bg-white`} text-black`}>
                Education
              </button>
              <button onClick={handleContact} className={`font-medium py-2 min-w-[160px] rounded-[10px] bg-red-300`}>
                Contact Now
              </button>
            </div>
            
            {seedetail==0 && <div className="flex flex-col items-center justify-start w-full gap-[29px]">
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <h1 className="sm:text-3xl text-lg font-semibold">About {facultyMentor.mentorDetails.fullName}</h1>
                <p className="!leading-[30px]">
                  {facultyMentor.experience}
                  <br/>
                 {facultyMentor.about}
                </p>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <h1 className="sm:text-3xl text-lg font-semibold">Certification</h1>
                <p className="!leading-[30px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>}
             {seedetail==1 &&
              <div>
               {facultyMentor.courses?.length!=0  ?
                (
                <div className="flex flex-col">
                <p>Course Will be Upload Soon</p>
                </div>)
               :
               (
                <div>
                   There are {facultyMentor?.courses?.length} Courses Taught by Me
                 </div>)}

              </div>
              
            }
             {seedetail==2 &&
              <ul>
                {
                  facultyMentor.education?.map((education)=>(
                    <li>{education}.</li>
                  ))
                }
              </ul>
            
            }
            {seedetail==3 &&
              <div className="flex flex-col">
              <p>Email to: {facultyMentor.mentorDetails.email}</p>
              <p>Phone to: {facultyMentor.mentorDetails.phoneNumber}</p>
              </div>
            }

          </div>

          <div className="flex flex-col items-center justify-center lg:w-[32%]  gap-[19px] p-5 bg-white rounded-[10px]">
            <div className="flex flex-row justify-between items-center w-full mt-[9px]">
              <h1 className="!text-gray-700 text-xl font-semibold">
                Total Course
              </h1>
              <h4 className="text-deep_orange-400 text-right text-[25px] font-semibold">
                30
              </h4>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-start gap-2">
                <h1 className="!text-gray-700 text-xl font-semibold">
                  Ratings
                </h1>
                <img
                  src="/assets/icons/img_vector_amber_500.svg"
                  alt="vector_one"
                  className="h-[16px] w-[16px] mt-0.5"
                />
              </div>
              <h1 className="text-right text-xl font-semibold">4.9(153)</h1>
            </div>
            <div className="flex flex-row justify-between w-full">
              <h1 className="mt-px !text-gray-700 text-xl font-semibold">
                Experiences
              </h1>
              <h1 className="text-right text-xl font-semibold">10 Years</h1>
            </div>
            <div className="flex flex-row justify-between w-full">
              <h1 className="mb-px !text-gray-700 text-xl font-semibold">
                Graduated
              </h1>
              <h1 className="text-right text-xl font-semibold">Yes</h1>
            </div>
            <div className="flex flex-row justify-between w-full">
              <h1 className="!text-gray-700 text-xl font-semibold">Language</h1>
              <h1 className="text-right text-xl font-semibold">
                English, Bangali
              </h1>
            </div>

            <div className="flex flex-row justify-between items-center w-full mb-2.5">
              <h1 className="!text-gray-700 text-xl font-semibold">Social</h1>

              <div className="flex flex-row justify-between items-center w-auto gap-[15px]">
                <img
                  src="/assets/icons/img_facebook_logo_1.svg"
                  alt="facebooklogoone"
                  className="h-[22px] w-[22px]"
                />

                <img
                  src="/assets/icons/img_instagram_icon.svg"
                  className="bg-red-400 w-[36px] rounded-[50%] h-[36px] px-[9px]"
                />
                <img
                  src="/assets/icons/img_twitter_logo.svg"
                  alt="twitterlogo_one"
                  className="h-[17px]"
                />
                <img
                  src="/assets/icons/img_linkedin_icon.svg"
                  alt="linkedinicon"
                  className="h-[18px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-8">
        <Footer />
      </footer>
    </div>
  );
}

export default MentorDetails;
