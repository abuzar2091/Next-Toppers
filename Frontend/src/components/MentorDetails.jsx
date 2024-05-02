import React from "react";
import Footer from "./Footer";

function MentorDetails() {
  return (
    <div className="flex flex-col justify-center w-full bg-gray-100 ">
      <div className="flex flex-row justify-center w-full md:px-12 px-5 py-8 max-w-7xl">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row justify-start w-full p-[29px] sm:p-5 bg-red-50 rounded-[20px]">
            <p className="mb-[92px] !text-black !font-medium ">
              Home | Mentor | Kristin Watson
            </p>
          </div>

          <div className="flex flex-row justify-start w-[32%] md:w-full mt-[-81px] ml-[30px] ">
            <div className="flex flex-row  justify-start items-center w-full gap-5 ">
              <img
                src="/assets/images/img_bg_170x170.png"
                alt="bg_one"
                className="w-[170px]  mb-px object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-start justify-start w-[53%] mt-[100px] sm:w-full gap-0.5">
                <p className="!text-gray-900 text-3xl font-medium">
                  Kritsin Watson
                </p>
                <p className="text-lg font-medium ">Founder & Mentor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center w-full">
        <div className="flex lg:flex-row flex-col  lg:justify-start lg:items-start items-center w-full gap-10 md:gap-5 px-12 max-w-7xl">
          <div className="flex flex-col  justify-start w-[66%]  gap-[29px]">
            {/* <div className="flex flex-row justify-start w-full gap-6 md:gap-5"> */}
            <div className="flex flex-row flex-wrap  justify-start w-full gap-[19px] ">
              <button className="py-2 font-medium min-w-[142px] rounded-[10px] bg-orange-300 text-white">
                About
              </button>
              <button className="sm:px-5 py-2 font-medium min-w-[205px] rounded-[10px] bg-white">
                Courses
              </button>
              <button className="sm:px-5 py-2 font-medium min-w-[205px] rounded-[10px] bg-white">
                Reviews
              </button>
              <button className=" font-medium py-2 min-w-[160px] rounded-[10px] bg-red-300">
                Contact Now
              </button>
            </div>
            {/* </div> */}
            <div className="flex flex-col items-center justify-start w-full gap-[29px]">
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <h1 className="text-3xl font-semibold">About Kritsin</h1>
                <p className="!leading-[30px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </p>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-2">
                <h1 className="text-3xl font-semibold">Certification</h1>
                <p className="!leading-[30px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
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
