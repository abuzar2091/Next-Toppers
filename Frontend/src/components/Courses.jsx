import FreelanceEduCourses from "@/shared/FreelanceEduCourses";
import { SelectBox } from "@/shared/SelectBox";
import React, { useState } from "react";
import { Input } from "./ui/input";
import FreelanceCoursesDetailsCard from "@/shared/FreelanceCoursesDetailsCard";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

function Courses() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryName = params.get('category');
  const [showCourse,setShowCourse]=useState(false);
  const showMoreCourse=()=>{
        setShowCourse(true);
  }
  return (
    <div className="flex flex-col  justify-start w-full gap-[50px] bg-gray-100">
      <div className="flex flex-col items-start justify-start  mx-12 my-8 gap-[5px] p-5 md:px-5 bg-yellow-100 max-w-7xl rounded-[20px]">
        <h2 className="sub-route !font-medium">Home | Courses</h2>

        <div className="flex md:flex-row flex-col justify-between items-center w-[99%]  ml-2.5 md:gap-[436px] gap-2 ">
          <h1
            className="
      
          !font-semibold   
          w-[65%]  
          lg:text-[45px]  lg:w-[45%] text-[35px] md:w-[60%]
          "
          >
            FreeLanceIT Courses <br />
            For All Standards
          </h1>

          <div className="h-[210px] w-[32%] relative">
            <div className="h-[14px] w-full bottom-[1%] right-0 left-0 m-auto bg-black-900_cc backdrop-opacity-[0.5] blur-[81.00px] absolute rounded-[50%]" />
            <img
              src="/assets/images/img_image_210x374.png"
              alt="image_one"
              className="justify-center h-[210px] w-[97%]  left-0 bottom-0 right-0 top-0  object-cover absolute"
            />
            {/* flex flex-row justify-start w-[32%] left-[3%] top-0  absolute */}
            <div className="flex flex-row justify-start w-[32%] ">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col w-full gap-px">
                  <div className="flex flex-row justify-between items-center w-full text-deep_orange-400">
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                  </div>

                  <div className="flex flex-row justify-between items-center w-full text-deep_orange-400">
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                  </div>

                  <div className="flex flex-row justify-between w-full text-deep_orange-400">
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                  </div>

                  <div className="flex flex-row justify-between w-full text-deep_orange-400">
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                  </div>

                  <div className="flex flex-row justify-between w-full text-deep_orange-400">
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                    <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                      +
                    </p>
                  </div>
                  
                  {/* 
                <div className="flex flex-row justify-between w-full text-deep_orange-400">
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                </div>

                <div className="flex flex-row justify-between w-full text-deep_orange-400">
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                  <p className="!font-airbnbcerealapp text-center !text-[15px] font-semibold">
                    +
                  </p>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center  w-full gap-[47px]">
        <div className={`flex w-full gap-5 ${showCourse && `overflow-x-scroll `} px-10`}>
         <Link to="/courses/category?category=All Courses">
          <button className={`${categoryName==`All Courses` ?`bg-orange-300 text-white`:`bg-white`} text-gray-900  py-2 px-4 font-medium min-w-[150px] rounded-[10px]`}>
            All Courses
          </button> 
         </Link>
         <Link to="/courses/category?category=Programming and Software Development">
          <button className={` ${categoryName==`Programming and Software Development` ?`bg-orange-300 text-white`:`bg-white`} text-gray-900 py-2 px-4 font-medium min-w-[342px] rounded-[10px]`}>
          Programming and Software Development
          </button>
          </Link>
          <Link to="/courses/category?category=School Curriculum">
          <button className={`${!categoryName || categoryName==(`School Curriculum`) ?`bg-orange-300 text-white`:`bg-white`}  py-2 px-4 font-medium min-w-[170px] rounded-[10px]`}>
          School Curriculum
          </button>
          </Link>
          <Link to="/courses/category?category=Engineering and Technical Courses">
          <button className={`${categoryName==`Engineering and Technical Courses` ?`bg-orange-300 text-white`:`bg-white`}  text-gray-900  py-2  px-4 font-medium min-w-[300px] rounded-[10px]`}>
          Engineering and Technical Courses
          </button>
          </Link>
         {showCourse &&  (<>
          <Link to="/courses/category?category=Creative Arts and Design">
          <button className={`${categoryName==`Creative Arts and Design`?`bg-orange-300 text-white`:`bg-white`}  text-gray-900 py-2  px-4 font-medium min-w-[240px] rounded-[10px]`}>
          Creative Arts and Design
          </button>
          </Link>
          <Link to="/courses/category?category=Test Preparation">
          <button className={`${categoryName==`Test Preparation`?`bg-orange-300 text-white`:`bg-white`} text-gray-900 py-2 px-4 font-medium min-w-[150px] rounded-[10px]`}>
          Test Preparation
          </button>
          </Link>
          <Link to="/courses/category?category=Technology and Gadgets">
          <button className={`${categoryName==`Technology and Gadgets`?`bg-orange-300 text-white`:`bg-white`} text-gray-900  py-2  px-4 font-medium min-w-[212px] rounded-[10px]`}>
          Technology and Gadgets
          </button>
          </Link>
          </>
        )}
          {!showCourse && <>
            <button onClick={showMoreCourse} className="bg-white text-gray-900  py-2 px-4  text-deep_orange-400 font-medium min-w-[142px] rounded-[10px]">
            More Courses
            </button>
          </>
          }
        </div>
     {!categoryName && 
        <div className="flex flex-row justify-center mx-12 my-8">
          <div className="flex flex-col items-start justify-start w-full gap-[23px] md:px-5 max-w-7xl">
            <h1 className="text-3xl font-semibold">Standard Classes</h1>

            <div className="flex flex-row justify-center w-full">
              <div className="w-full grid gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center md:gap-5">
                <FreelanceEduCourses className="flex flex-col items-center justify-start w-full " />
                <FreelanceEduCourses
                  standard={"Standard Two"}
                  standardisa={
                    "Standard 2 builds on the foundations of Standard 1 and includes requirements..."
                  }
                  img={"/assets/icons/img_group_gray_800_02.svg"}
                  className="flex flex-col items-center justify-start w-full "
                />
                <FreelanceEduCourses
                  standard={"Standard Three"}
                  standardisa={
                    "Standard 3 of the Aged Care Quality Standards applies to all services delivering personal..."
                  }
                  img={"/assets/icons/img_group_teal_a400.svg"}
                  className="flex flex-col items-center justify-start w-full "
                />
                <FreelanceEduCourses
                  standard={"Standard Four"}
                  standardisa={
                    "Standard 4 of the Aged Care Quality Standards focuses on services and supports..."
                  }
                  img={"/assets/icons/img_group_gray_800_02_50x50.svg"}
                  className="flex flex-col items-center justify-start w-full "
                />
                <FreelanceEduCourses
                  standard={"Standard Five"}
                  standardisa={
                    "Standard 5 Learning Resources. Learning Resources ensure that the school has the..."
                  }
                  img={"/assets/icons/img_group_teal_a400_50x50.svg"}
                  className="flex flex-col items-center justify-start w-full "
                />
                <FreelanceEduCourses
                  standard={"Standard Six"}
                  standardisa={
                    "Standard 3 of the Aged Care Quality Standards applies to all services delivering personal..."
                  }
                  img={"/assets/icons/img_group_deep_orange_500.svg"}
                  className="flex flex-col items-center justify-start w-full "
                />
                <FreelanceEduCourses
                  standard={"Standard Seven"}
                  standardisa={
                    "Standard 4 of the Aged Care Quality Standards focuses on services and supports..."
                  }
                  img={"/assets/icons/img_group_red_500.svg"}
                  className="flex flex-col items-center justify-start w-full "
                />
                <FreelanceEduCourses
                  standard={"Standard Night"}
                  standardisa={
                    "Standard 5 Learning Resources. Learning Resources ensure that the school has the..."
                  }
                  img={"/assets/icons/img_group_orange_300.svg"}
                  className="flex flex-col items-center justify-start w-full "
                />
                <FreelanceEduCourses
                  standard={"Standard Nine"}
                  standardisa={
                    "Standard 3 of the Aged Care Quality Standards applies to all services delivering personal..."
                  }
                  img={"/assets/icons/img_group_red_500_50x50.svg"}
                  className="flex flex-col items-center justify-start w-full "
                />
                <FreelanceEduCourses
                  standard={"O-Level"}
                  standardisa={
                    "Standard 4 of the Aged Care Quality Standards focuses on services and supports..."
                  }
                  img={"/assets/icons/img_group_deep_orange_500_50x50.svg"}
                  className="flex flex-col items-center justify-start w-full "
                />
                <FreelanceEduCourses
                  standard={"A-Level"}
                  standardisa={
                    "Standard 5 Learning Resources. Learning Resources ensure that the school has the..."
                  }
                  img={"/assets/icons/img_group_50x50.svg"}
                  className="flex flex-col items-center justify-start w-full "
                />
              </div>
            </div>
          </div>
        </div>
        }

      </div>

      {/* <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="flex flex-col items-center justify-start w-full gap-[50px] px-12 max-w-7xl">
          <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2.5">
            <h1 className="text-3xl font-semibold">
              Other Courses For High School
            </h1>

            <div className="flex sm:flex-row flex-col justify-start w-full gap-[15px] sm:gap-5 ">
              <div className="relative md:w-[70%] sm:w-[60%] gap-[35px]  ">
                <Input
                  name="search"
                  placeholder="Search Class, Course, Book Name"
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e)}
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
                className="md:w-[30%]  sm:w-[35%] font-medium  bg-white "
              />
            </div>
          </div>

          <div className="justify-center w-full gap-10 sm:grid-cols-2  grid-cols-1 md:gap-5 grid">
            <FreelanceCoursesDetailsCard
              imageOne="/assets/images/img_image_103x160.png"
              className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
            />
            <FreelanceCoursesDetailsCard
              imageOne="/assets/images/img_image_2.png"
              className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
            />
            <FreelanceCoursesDetailsCard
              imageOne="/assets/images/img_image_3.png"
              className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
            />
            <FreelanceCoursesDetailsCard
              //   imageOne="/assets/images/img_image_4.png"
              className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
            />
            <FreelanceCoursesDetailsCard
              imageOne="/assets/images/img_image_2.png"
              className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
            />
            <FreelanceCoursesDetailsCard
              imageOne="/assets/images/img_image_103x160.png"
              className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
            />
            <FreelanceCoursesDetailsCard
              imageOne="/assets/images/img_image_3.png"
              className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
            />
            <FreelanceCoursesDetailsCard
              //   imageOne="/assets/images/img_image_4.png"
              className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
            />
            <FreelanceCoursesDetailsCard
              imageOne="/assets/images/img_image_2.png"
              className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
            />
            <FreelanceCoursesDetailsCard
              imageOne="/assets/images/img_image_103x160.png"
              className="flex flex-row justify-start w-full gap-6 p-[15px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center  w-[35%]">
          <button className="w-[15%] h-[40px] px-6 rounded-[5px] bg-white">
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
          <button className="w-[15%] h-[40px] px-6 rounded-[5px] bg-red-300">
            <img src="/assets/icons/img_arrow_right.svg" alt="right-arrow" />
          </button>
        </div>
      </div>

      <Footer /> */}
    </div>
  );
}

export default Courses;
