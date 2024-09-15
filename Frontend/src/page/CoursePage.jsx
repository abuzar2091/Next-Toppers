import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'; // You'll need GreenSock Animation Platform library for animations
import ScrollTrigger from 'gsap/ScrollTrigger'; // ScrollTrigger plugin for GSAP
import { useInView } from 'react-intersection-observer';
import CourseProjectData from "../data/courseprojectdata.json";
// Ensure that GSAP plugins are registered
gsap.registerPlugin(ScrollTrigger);

const  CourseProject2 = () => {
  // Refs for each card
  const leftCardRef = useRef(null);
  const middleCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const CourseProject = CourseProjectData.Projects;

  // useInView hook to detect when the component is in view
  const { ref, inView } = useInView();
  // Function to animate the cards
  const animateCards = () => {
    if (inView) {
      gsap.fromTo(
        [leftCardRef.current, middleCardRef.current, rightCardRef.current],
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
      );
    }
  };
  useEffect(() => {
    animateCards(); // Call the animation function when component mounts or when inView changes
  }, [inView]);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 sm:mx-16 mx-6"  ref={ref}>
    <div
      ref={leftCardRef}
      className="bg-slate-200 hover:bg-slate-300 rounded-lg flex flex-col justify-center items-center py-10 px-5 "
    >
      <img
        src={CourseProject[3]?.icon}
        alt={CourseProject[3]?.name}
        className="h-14 w-14"
      />
      <h2 className="!font-semibold text-[18px]">{CourseProject[3]?.name}</h2>
      <p className="text-base w-[80%] ">{CourseProject[3]?.descripton}</p>
 
    </div>

    {/* Middle Card */}
    <div ref={middleCardRef}  className="bg-slate-200 hover:bg-slate-300 rounded-lg flex flex-col justify-center items-center py-10 px-5 "
    >
      <img
        src={CourseProject[4]?.icon}
        alt={CourseProject[4]?.name}
        className="h-14 w-14"
      />
      <h2 className="!font-semibold text-[18px]">{CourseProject[4]?.name}</h2>
      <p className="text-base w-[80%] ">{CourseProject[4]?.descripton}</p></div>

    {/* Right Card */}
    <div ref={rightCardRef}  className="bg-slate-200 hover:bg-slate-300 rounded-lg flex flex-col justify-center items-center py-10 px-5 "
    >
      <img
        src={CourseProject[5]?.icon}
        alt={CourseProject[5]?.name}
        className="h-14 w-14"
      />
      <h2 className="!font-semibold text-[18px]">{CourseProject[5]?.name}</h2>
      <p className="text-base w-[80%] ">{CourseProject[5]?.descripton}</p></div>
  
  </div>
);
  
};

export default CourseProject2;
