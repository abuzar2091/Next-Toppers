import MentorCard from "@/shared/MentorCard";
import React from "react";
import Footer from "./Footer";

function AllMentors() {
  const mentorsData = [
    { img: "/assets/images/img_bg_290x290.png", name: "Kristin Watson" },
    { img: "/assets/images/img_bg_1.png", name: "Brooklyn Simmons" },
    { img: "/assets/images/img_bg_2.png", name: "Robert Fox" },
    { img: "/assets/images/img_bg_3.png", name: "Kristin Watson" },
    { img: "/assets/images/img_bg_4.png", name: "Wade Warren" },
    { img: "/assets/images/img_bg_5.png", name: "Bessie Cooper" },
    { img: "/assets/images/img_bg_6.png", name: "Ronald Richards" },
    { img: "/assets/images/img_bg_7.png", name: "Guy Hawkins" },
    { img: "/assets/images/img_bg_9.png", name: "Floyd Miles" },
    { img: "/assets/images/img_bg_8.png", name: "Cody Fisher" },
    { img: "/assets/images/img_bg_10.png", name: "Jerome Bell" },
    { img: "/assets/images/img_bg_11.png", name: "Courtney Henry" },
  ];
  return (
    <div className="bg-gray-100">
      <div className="mx-12 flex flex-col gap-12 ">
        <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5  md:px-5 bg-red-50 my-8  max-w-7xl rounded-[20px]">
          <p className="mt-[5px]  md:ml-0 !text-black !font-medium">
            Home | Our Mentors
          </p>
          <div className="flex flex-row justify-between items-center w-[99%]  ml-2.5 gap-[420px] md:gap-10 ">
            <h1 className="w-[37%] !font-semibold text-[45px]  ">
              FreelanceIT has the
              <br />
              qualified mentor
            </h1>
            <div className="flex flex-row justify-end w-[35%]  py-[3px]">
              <div className="flex flex-col items-center justify-start w-[97%] mb-1">
                <div className="h-[198px] w-[99%]  relative">
                  <div className="flex flex-col items-end justify-start w-[87%] h-full left-0 bottom-0 top-0 my-auto absolute">
                    <img
                      src="/assets/icons/img_speech_bubble.svg"
                      alt="speechbubble"
                      className="h-[48px] mr-[63px] md:mr-5 z-[1]"
                    />
                    <div className="flex flex-row justify-end items-center w-full mt-[-33px]">
                      <img
                        src="/assets/icons/img_background_complete.svg"
                        alt="background_one"
                        className="h-[86px]"
                      />
                      <img
                        src="/assets/icons/img_device.svg"
                        alt="device_one"
                        className="h-[184px] ml-[-68px]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-center justify-start w-[37%] md:w-full ml-[113px] md:ml-5 z-[1]">
                      <div className="h-[157px] w-full relative">
                        <div className="flex flex-col items-start justify-start w-full bottom-0 right-0 left-0 m-auto absolute">
                          <div className="flex flex-row justify-start items-center w-full z-[1]">
                            <div className="h-[74px] w-[27%] sm:w-full z-[1] relative">
                              <img
                                src="/assets/icons/img_vector_deep_orange_400_74x38.svg"
                                alt="vector_one"
                                className="justify-center h-[74px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <img
                                src="/assets/icons/img_vector_blue_gray_900_03.svg"
                                alt="vector_three"
                                className="h-[19px] w-[19px] bottom-[9%] left-[8%] m-auto absolute"
                              />
                              <div className="flex flex-col items-start justify-start w-[64%] bottom-[24%] left-[11%] m-auto absolute">
                                <div className="flex flex-col items-end justify-start ml-1.5 md:ml-0">
                                  <img
                                    src="/assets/icons/img_vector_blue_gray_900_03_2x18.svg"
                                    alt="vector_five"
                                    className="h-[2px] z-[1]"
                                  />
                                  <img
                                    src="/assets/icons/img_vector_blue_gray_900_03_5x11.svg"
                                    alt="vector_seven"
                                    className="h-[5px] mr-0.5"
                                  />
                                </div>
                                <img
                                  src="/assets/icons/img_vector_black_900_02_9x20.svg"
                                  alt="vector_nine"
                                  className="h-[9px] mt-[-2px] opacity-0.3"
                                />
                              </div>
                              <img
                                src="/assets/icons/img_vector_blue_gray_900_03_12x2.svg"
                                alt="vector_eleven"
                                className="h-[12px] right-[9%] top-[6%] m-auto absolute"
                              />
                            </div>
                            <div className="flex flex-row justify-start items-center w-[80%] ml-[-9px]">
                              <img
                                src="/assets/icons/img_vector_deep_orange_400_90x87.svg"
                                alt="vector_thirteen"
                                className="h-[90px] z-[1]"
                              />
                              <img
                                src="/assets/icons/img_vector_deep_orange_400_78x35.svg"
                                alt="vector_fifteen"
                                className="h-[78px] ml-[-7px]"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row justify-start items-center w-[33%] md:w-full mt-[-60px] ml-1.5 md:ml-0">
                            <div className="h-[60px] w-[96%] sm:w-full z-[1] relative">
                              <img
                                src="/assets/icons/img_group_deep_orange_200.svg"
                                alt="image"
                                className="justify-center h-[60px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <img
                                src="/assets/icons/img_vector_deep_orange_300.svg"
                                alt="vector"
                                className="h-[16px] bottom-1/4 right-[19%] m-auto absolute"
                              />
                            </div>
                            <img
                              src="/assets/icons/img_vector_black_900_02_28x13.svg"
                              alt="vector_nineteen"
                              className="h-[28px] ml-[-11px] opacity-0.3"
                            />
                          </div>
                        </div>
                        <img
                          src="/assets/icons/img_vector_black_900_02_32x18.svg"
                          alt="vector"
                          className="h-[32px] bottom-[2%] right-[23%] m-auto opacity-0.3 absolute"
                        />
                        <div className="flex flex-col items-end justify-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-end justify-start w-[39%] md:w-full ml-[37px] md:ml-0 sm:ml-5 z-[1]">
                              <div className="flex flex-col items-center justify-start w-full z-[1]">
                                <div className="h-[97px] w-full relative">
                                  <img
                                    src="/assets/icons/img_vector_blue_gray_900_03_44x52.svg"
                                    alt="vector"
                                    className="h-[44px] top-0 right-0 left-0 m-auto absolute"
                                  />
                                  <div className="h-[92px] w-full sm:w-full bottom-0 right-0 left-0 m-auto absolute">
                                    <div className="flex flex-col items-start justify-start w-[40%] bottom-[3%] left-[16%] m-auto absolute">
                                      <img
                                        src="/assets/icons/img_vector_blue_gray_900_03_21x20.svg"
                                        alt="vector"
                                        className="h-[21px] w-[20px]"
                                      />
                                      <img
                                        src="/assets/icons/img_vector_black_900_02_21x13.svg"
                                        alt="vector"
                                        className="h-[21px] mt-[-21px] opacity-0.3"
                                      />
                                    </div>
                                    <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <div className="flex flex-col items-start justify-start w-[81%] md:w-full z-[1]">
                                          <img
                                            src="/assets/icons/img_vector_blue_gray_900_03_37x41.svg"
                                            alt="vector"
                                            className="h-[37px] z-[1]"
                                          />
                                          <div className="flex flex-row justify-start items-start mt-[-14px] ml-[3px] md:ml-0">
                                            <img
                                              src="/assets/icons/img_vector_blue_gray_900_03_12x2.svg"
                                              alt="vector"
                                              className="h-[5px] mt-[7px] z-[1]"
                                            />
                                            <img
                                              src="/assets/icons/img_vector_blue_gray_900_03_17x17.svg"
                                              alt="vector"
                                              className="h-[17px] w-[17px]"
                                            />
                                            <img
                                              src="/assets/icons/img_vector_blue_gray_900_03_1x4.svg"
                                              alt="vector"
                                              className="h-px mt-1"
                                            />
                                          </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-start w-full mt-[-37px]">
                                          <div className="flex flex-row justify-center items-start w-[97%]">
                                            <img
                                              src="/assets/icons/img_group_deep_orange_200_12x9.svg"
                                              alt="image_one"
                                              className="h-[12px] mt-[33px] z-[1]"
                                            />
                                            <div className="h-[87px] w-[90%] sm:w-full ml-[-3px] relative">
                                              <img
                                                src="/assets/icons/img_group_deep_orange_200_87x44.svg"
                                                alt="image_two"
                                                className="justify-center h-[87px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                              />
                                              <div className="flex flex-row justify-center items-center h-max w-[7px] mr-3.5 right-[33%] bottom-0 top-0 my-auto absolute">
                                                <img
                                                  src="/assets/icons/img_vector_blue_gray_900_03_7x6.svg"
                                                  alt="vector"
                                                  className="h-[7px] w-[6px] z-[1]"
                                                />
                                                <img
                                                  src="/assets/icons/img_vector_deep_orange_300_6x6.svg"
                                                  alt="vector"
                                                  className="h-[6px] w-[6px] ml-[-6px]"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <img
                                            src="/assets/icons/img_vector_blue_gray_900_03_16x16.svg"
                                            alt="vector_fortyone"
                                            className="h-[16px] w-[16px] mt-[19px] ml-[-14px]"
                                          />
                                        </div>
                                      </div>
                                      <img
                                        src="/assets/icons/img_vector_black_900_02_24x13.svg"
                                        alt="vector"
                                        className="h-[24px] mt-[-21px] mr-[7px] opacity-0.3"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[85px] w-[31%] md:w-full mt-[-26px] mr-2 relative">
                                <img
                                  src="/assets/icons/img_vector_blue_gray_900_03_85x16.svg"
                                  alt="vector"
                                  className="justify-center h-[85px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <div className="flex flex-col items-center justify-start w-[19%] gap-[19px] bottom-[8%] left-[23%] m-auto absolute">
                                  <img
                                    src="/assets/icons/img_group_white_a700.svg"
                                    alt="image_three"
                                    className="h-[26px]"
                                  />
                                  <img
                                    src="/assets/icons/img_vector_white_a700_3x3.svg"
                                    alt="vector"
                                    className="h-[3px] w-[3px]"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start items-center mt-[-85px]">
                              <img
                                src="/assets/icons/img_group_white_a700_86x134.svg"
                                alt="image_four"
                                className="h-[86px] z-[1]"
                              />
                              <img
                                src="/assets/icons/img_vector_black_900_02_9x19.svg"
                                alt="vector"
                                className="h-[9px] ml-[-19px] opacity-0.3"
                              />
                            </div>
                          </div>
                          <div className="h-[57px] w-[38%] md:w-full mt-[-57px] relative">
                            <img
                              src="/assets/icons/img_group_deep_orange_200_57x50.svg"
                              alt="image_five"
                              className="justify-center h-[57px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                            <div className="flex flex-col items-start justify-start w-[40%] gap-px bottom-[34%] right-[5%] m-auto absolute">
                              <img
                                src="/assets/icons/img_vector_blue_gray_900_03_4x20.svg"
                                alt="vector_fiftyone"
                                className="h-[4px]"
                              />
                              <img
                                src="/assets/icons/img_vector_blue_gray_900_03_4x17.svg"
                                alt="vector"
                                className="h-[4px] ml-[3px] md:ml-0"
                              />
                            </div>
                            <img
                              src="/assets/icons/img_vector_blue_gray_900_03_6x18.svg"
                              alt="vector"
                              className="h-[6px] bottom-[37%] right-[7%] m-auto absolute"
                            />
                          </div>
                        </div>
                        <div className="h-[15px] w-[5px] bottom-[37%] right-[21%] m-auto bg-blue_gray-900_03 absolute" />
                      </div>
                    </div>
                    <img
                      src="/assets/icons/img_plants.svg"
                      alt="plants_one"
                      className="h-[98px] mt-[-63px]"
                    />
                  </div>
                </div>
                <img
                  src="/assets/icons/img_vector_blue_gray_900_03_12x2.svg"
                  alt="table_one"
                  className="h-px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row  justify-center w-[100%]  gap-[19px] ">
          <button className="py-2 font-medium min-w-[142px] rounded-[10px] text-gray-900  bg-white">
            All Mentors
          </button>
          <button className="sm:px-5 font-medium min-w-[142px] rounded-[10px] text-gray-900  bg-white">
            For Kindergarten
          </button>
          <button className="sm:px-5 font-medium min-w-[142px] rounded-[10px] bg-orange-300 text-white">
            For high school
          </button>
          <button className="font-medium min-w-[142px] rounded-[10px] text-gray-900  bg-white">
            For college
          </button>
          <button className="sm:px-5 font-medium min-w-[142px] rounded-[10px] text-gray-900  bg-white">
            For Technology
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-12">
          <div className="grid grid-cols-4 gap-10">
            {mentorsData.map((item, index) => (
              <MentorCard key={index} data={item} />
            ))}
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
              1
            </button>
            <p className="!text-gray-900 !font-medium text-base leading-5 ">
              of 3
            </p>
            <button className="w-[15%] h-[40px] px-3.5 rounded-[5px] bg-red-300">
              <img src="/assets/icons/img_arrow_right.svg" alt="right-arrow" />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AllMentors;
