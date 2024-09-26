import React, { useEffect, useState } from "react";
import FreelanceEduCourses from "@/shared/FreelanceEduCourses";
import { SelectBox } from "@/shared/SelectBox";
import { Input } from "./ui/input";
import FreelanceCoursesDetailsCard from "@/shared/FreelanceCoursesDetailsCard";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { UsersRound, Link as Connection } from "lucide-react";
import { useInView } from "react-intersection-observer";
import NewBatch from "./NewBatch";
import JoinUs from "@/page/JoinUs";
import Testimonial from "@/page/Testimonial";

function HomePage() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [happyLearner,setHappyLearner]=useState(5000);
  const [monthlyEnrollment,setMonthlyEnrollment]=useState(100)
  const words = "Learning Platform"; // Words to animate
  const { ref, inView } = useInView({
    threshold: 0.1, // Triggers when 10% of the component is in view
  });

  // Animation to append characters from words to currentText
  useEffect(() => {
    let intervalId;
    const typeNextWord = () => {
      if (currentIndex < words.length) {
        setCurrentText((prevtext) => prevtext + words[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };
    intervalId = setInterval(typeNextWord, 200);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, words]);

  // Animation to remove characters from currentText when it reaches the end of words
  useEffect(() => {
    if (currentIndex === words.length) {
      let intervalId;
      const removeLastCharacter = () => {
        if (currentText.length > 0) {
          setCurrentText((prevtext) => prevtext.slice(0, -1)); // Remove last character
        } else {
          clearInterval(intervalId);
          setCurrentIndex(0); // Reset currentIndex after removing all characters
        }
      };
      intervalId = setInterval(removeLastCharacter, 200); // Change word every 200 milliseconds
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [currentIndex, currentText, words]);
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setHappyLearner((prevLearning) =>
          prevLearning < 20000 ? prevLearning + 100 :20000
        );
        setMonthlyEnrollment((prevEnrollment) =>
          prevEnrollment < 500 ? prevEnrollment + 5 : 500
        );
      }, 10);

      return () => clearInterval(interval);
    }
    setHappyLearner(10000);
    setMonthlyEnrollment(100);
  }, [inView, happyLearner,monthlyEnrollment]);
  return (
    <div id="home" className="flex flex-col sm:justify-start w-full gap-[50px] bg-gray-100 ">
      <div className="flex md:flex-row flex-col items-center  mx-12 my-8 gap-[0px]   bg-red-50 max-w-7xl rounded-[20px] md:px-12 pb-10">
        <div className="flex flex-col w-[80%] py-8 items-start justify-start mx-0 my-8 gap-[0px] p-0 bg-red-50 max-w-7xl rounded-[20px]">
          <h1 className="!font-semibold w-[100%]  lg:text-[45px] sm:text-[35px] text-[20px]">
            Next Toppers{" "}
            <span className="animate-typewriter text-orange-300">
              {currentText}
            </span>
          </h1>
          <h2 className="sub-route !font-medium">
            Register now and Start learning with Next Toppers Expert faculty at home.
            
          </h2>
          <Link to={"/courses"}>
            <button className="mt-2 bg-orange-300 text-white py-2 px-2 font-medium min-w-[120px] rounded-[10px]">
              Explore Courses
            </button>
          </Link>
        </div>
        <div className="md:w-[50%] w-[100%]">
          <img
            src="/assets/images/NTimg.png"
            className="rounded-lg object-cover w-[250px] mx-auto"
            loading="lazy"
          />
        </div>
      </div>

      <div id="toptop" ref={ref} className="!font-semibold sm:text-[25px] text-[15px] text-center">
        <h2 >INDIA'S MOST LOVED ONLINE LEARNING PLATFROM ❤️</h2>
        <div className="flex justify-center sm:gap-[200px] mt-8">

          <div className="flex items-center flex-col px-6">
            <div className="flex gap-2 items-center">
              {/* <UsersRound /> */}
               <p>{happyLearner}+</p>
            </div>
            <p className="!font-semibold sm:text-[20px]">HAPPY LEARNERS</p>
          </div>
          <div className="flex items-center flex-col">
              <div className="flex gap-2 items-center">
                <Connection /> <p>{monthlyEnrollment}+</p>
              </div>
              <p className="!font-semibold sm:text-[20px]">NEW MONTHLY ENROLLMENT</p>
          </div>
        </div>
        
      </div>
      <NewBatch/>
      <Testimonial/>
      <JoinUs className=''/>
      <Footer />
    </div>
  );
}

export default HomePage;
