import React, { useEffect, useState } from 'react'
import { Outlet} from "react-router-dom";
import Courses from './Courses';
import { Input } from "./ui/input";
import { SelectBox } from "@/shared/SelectBox";
import FreelanceCoursesDetailsCard from "@/shared/FreelanceCoursesDetailsCard";
import Footer from './Footer';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useDebounce from '@/hooks/useDebounce';
function CourseLayout() {
    const [searchBarValue, setSearchBarValue] = useState("");
    const debouncedSearchBarValue = useDebounce(searchBarValue, 500);
    const categoryName="All Courses";
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState(""); 
    const [dropDownFilter,setDropDownFilter]=useState([]);
    const cardsPerPage = 6;
    const fetchCourses = async (categoryName) => {
        const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_API_URI}/api/v1/admin/getcourse-basedon-category`, { categoryName });
        return data.data.courses; // Return the data from the API response
      };
    const dropDownOptions = [
      { label: "Sort by :", value: "" },
        { label: "Latest", value: "latest" },
        { label: "Alphabetical", value: "alphabetical" },
        { label: "Highest Rated", value: "rating" },
      ];
      const { data: coursesByCategory, isLoading, error } = useQuery({
        queryKey: ['courses', categoryName], // Use categoryName in queryKey
        queryFn: () => fetchCourses(categoryName),
        enabled: !!categoryName // Ensure the query runs only if categoryName exists
      });
      useEffect(() => {
        setCurrentPage(1);
      }, [categoryName]);

      useEffect(() => {
        if (coursesByCategory && filter) {
          const flattenedCourses = coursesByCategory.flatMap(categoryGroup => categoryGroup.courses);
          const sorted = [...flattenedCourses].sort((a, b) => {
            if (filter === "latest") {
              return new Date(b.createdAt) - new Date(a.createdAt);
            } else if (filter === "alphabetical") {
              return a.courseName.localeCompare(b.courseName);
            } else if (filter === "rating") {
              return b.courseRating - a.courseRating
              ;
            }
            return 0;
          });
          setDropDownFilter(sorted);
        }
      }, [filter, coursesByCategory]);

      const handleViewMore = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(totalCards / cardsPerPage)));
      };
    
      const handleViewLess = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
      };
  
    
      if (isLoading) return <p className="text-center min-h-screen bg-gray-100">Loading...</p>;
  if (error) return <p className="mx-12">Errors loading courses: {error.message}</p>;
 
  console.log("dropdown",dropDownFilter);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  let displayedCourses = [];
  let currentCount = 0;
  const filteredCourses = coursesByCategory?.flatMap(categoryGroup =>
    categoryGroup.courses.filter(course =>
        course.courseName.toLowerCase().includes(searchBarValue.toLowerCase())
    ))
    //  console.log("filter course ",dropDownFilter);



  if(!debouncedSearchBarValue && filter.length==0){
      for (const categoryGroup of coursesByCategory) {
        for (const course of categoryGroup.courses) {
          if (currentCount >= startIndex && currentCount < endIndex) {
            displayedCourses.push(course);
          }
          currentCount++;
        }
      }

  }else if(filter.length>0 && !debouncedSearchBarValue ){
    for (const course of dropDownFilter) {
        if (currentCount >= startIndex && currentCount < endIndex) {
          displayedCourses.push(course);
        }
        currentCount++;
      }
  }
  else if(debouncedSearchBarValue.length>0 && filter.length==0) {
    for (const course of filteredCourses ) {
        if (currentCount >= startIndex && currentCount < endIndex) {
            displayedCourses.push(course);
          }
          currentCount++;
        }
  }else{
    const filteredCourse = dropDownFilter?.filter(course =>
          course.courseName.toLowerCase().includes(searchBarValue.toLowerCase())
      )
    for (const course of filteredCourse) {
      if (currentCount >= startIndex && currentCount < endIndex) {
        displayedCourses.push(course);
      }
      currentCount++;
    }
  }
const totalCards=debouncedSearchBarValue.length>0?filteredCourses.length:coursesByCategory.reduce((acc, categoryGroup) => acc + categoryGroup.courses.length, 0);
const totalPages = Math.ceil(totalCards / cardsPerPage);

    
  return (
    <div className="bg-gray-100">
        <Courses/>
        <section className="my-20">
        <Outlet/> 
        </section>  

         <div className="flex flex-col justify-center items-center gap-8 w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[50px] px-12 max-w-7xl">
          <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2.5">
            <h1 className="sm:text-3xl text-2xl font-semibold">
              Other Courses 
            </h1>
          
            <div className="flex sm:flex-row flex-col justify-start w-full gap-[15px] sm:gap-5 ">
              <div className="relative md:w-[70%] sm:w-[60%] gap-[35px]  ">
                <Input
                  name="search"
                  placeholder="Search Class, Course, Book Name"
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e.target.value)}
                  type="text"
                  className="text-gray-700 md:pl-6 rounded-tr-[10px] rounded-br-[10px] font-medium md:text-[16px] h-12"
                />
                <div className="bg-orange-600 cursor-pointer w-7 h-7 absolute top-[10px] right-3  rounded-sm">
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
                placeholder="Sort by : "
                options={dropDownOptions}
                 //value={filter}
                 onChange={(option) => setFilter(option.value)}
                className="md:w-[30%]  sm:w-[35%] font-medium  bg-white "
              />
            </div>
          </div>        
          <div className="justify-center w-full gap-3 sm:grid-cols-2 grid-cols-1 md:gap-5  grid">
          {displayedCourses.length > 0 ? displayedCourses.map((course) => (
          <FreelanceCoursesDetailsCard
            key={course._id} 
            imageOne="/assets/images/img_image_103x160.png"
            thethree={course.courseName}
            className="flex flex-row justify-start w-full gap-6 sm:p-[15px] p-[10px] bg-white cursor-pointer rounded-[10px] hover:shadow-xs"
          />
        )):(
            <p className="text-[20px]">No results found for {searchBarValue}</p>
        )}
        </div>
        </div>
        <div className="flex flex-row justify-between items-center  md:w-[35%] sm:w-[50%]
        w-[70%]">
          <button onClick={handleViewLess} className="w-[15%] h-[40px]  rounded-[5px] bg-white"
          disabled={currentPage === 1}>
            <img src="/assets/icons/img_arrow_left.svg" alt="left-arrow" className="mx-auto" />
          </button>
          <p className="!text-gray-900 !font-medium text-base leading-5">
            Page
          </p>
          <button
            size="sm"
            className="!text-gray-700 font-medium min-w-[4px] h-[36px] px-[15px] text-lg rounded-lg bg-white"
          >
           {currentPage} 
          </button>
          
          <p className="!text-gray-900 !font-medium text-base leading-5">
          of &nbsp; {totalPages}
          </p>
          <button onClick={handleViewMore} className="w-[15%] h-[40px]  rounded-[5px] bg-red-300 hover:bg-red-400" 
           disabled={currentPage === totalPages}>
            <img src="/assets/icons/img_arrow_right.svg" alt="right-arrow" className="mx-auto" />
          </button>
        </div>
        </div>

      <Footer />

    </div>
  )
}

export default CourseLayout
