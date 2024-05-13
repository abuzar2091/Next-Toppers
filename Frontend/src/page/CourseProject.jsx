// import React from "react";
import CourseProjectData from "../data/courseprojectdata.json";

import React, { useEffect, useRef } from "react";
import gsap from "gsap"; // You'll need GreenSock Animation Platform library for animations
import ScrollTrigger from "gsap/ScrollTrigger"; // ScrollTrigger plugin for GSAP
import { useInView } from "react-intersection-observer";

// Ensure that GSAP plugins are registered
gsap.registerPlugin(ScrollTrigger);

const CourseProject1 = () => {
  // Refs for each card
  const CourseProject = CourseProjectData.Projects;
  const leftCardRef = useRef(null);
  const middleCardRef = useRef(null);
  const rightCardRef = useRef(null);

  // useInView hook to detect when the component is in view
  const { ref, inView } = useInView({
    //threshold:.1
    //   triggerOnce: true,
    // Trigger the animation only once when the component comes into view
  });

  // Function to animate the cards
  const animateCards = () => {
    if (inView) {
      // Fade in and move up animation for the middle card
      gsap.fromTo(
        middleCardRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 2 }
      );

      // Slide in animation for the left card
      gsap.fromTo(
        leftCardRef.current,
        { x: "-100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
      );

      // Slide in animation for the right card
      gsap.fromTo(
        rightCardRef.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
      );
    }
  };

  useEffect(() => {
    animateCards(); // Call the animation function when component mounts or when inView changes
  }, [inView]);

  return (
    // <div className="flex flex-wrap justify-center" >
    <div
      ref={ref}
      className="flex flex-col justify-center items-center mx-16 gap-24"
    >
      <h1 className="text-3xl font-semibold">
        Build Industry Grade <span className="text-orange-400">Projects</span>{" "}
      </h1>
      <div className="grid grid-cols-3 gap-3" >
      <div
        ref={leftCardRef}
        className="bg-slate-200 hover:bg-slate-300 rounded-lg flex flex-col justify-center items-center py-10 px-5 "
      >
        <img
          src={CourseProject[0].icon}
          alt={CourseProject[0].name}
          className="h-14 w-14"
        />
        <h2 className="!font-semibold text-[18px]">{CourseProject[0].name}</h2>
        <p className="text-base w-[80%] ">{CourseProject[0].descripton}</p>
   
      </div>

      {/* Middle Card */}
      <div ref={middleCardRef}  className="bg-slate-200 hover:bg-slate-300 rounded-lg flex flex-col justify-center items-center py-10 px-5 "
      >
        <img
          src={CourseProject[1].icon}
          alt={CourseProject[1].name}
          className="h-14 w-14"
        />
        <h2 className="!font-semibold text-[18px]">{CourseProject[1].name}</h2>
        <p className="text-base w-[80%] ">{CourseProject[1].descripton}</p></div>

      {/* Right Card */}
      <div ref={rightCardRef}  className="bg-slate-200 rounded-lg flex flex-col justify-center items-center py-10 px-5 hover:bg-slate-300 "
      >
        <img
          src={CourseProject[2].icon}
          alt={CourseProject[2].name}
          className="h-14 w-14"
        />
        <h2 className="!font-semibold text-[18px]">{CourseProject[2].name}</h2>
        <p className="text-base w-[80%] ">{CourseProject[2].descripton}</p></div>
     </div>
    </div>
  );
};

export default CourseProject1;

