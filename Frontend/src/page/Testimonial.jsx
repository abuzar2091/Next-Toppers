// import TestimonialCard from '@/components/TestimonialCard'
// import React from 'react'

// function Testimonial() {
//   return (
//     <div className="flex flex-col items-center">
//         {/* <div> */}
//         <h1 className="!font-semibold w-[100%] lg:text-[45px] text-[35px] text-center">Testimonials</h1>
//         <p className="!font-semibold text-[25px] "> Across the nation, we're the institute of choice for thousands of students and parents</p>
         
//           <div className="flex relative overflow-hidden">
//             <img src="/testimonial/left.png" className="h-20 cursor-pointer mx-4 absolute left-20 top-16"/>
//             <div className="flex ">
//                 <TestimonialCard/>
//                 <TestimonialCard/>
//                 <TestimonialCard/>
//             </div>
//             <img src="/testimonial/right.png" className="h-20 cursor-pointer mx-4  absolute right-20 top-16"/>
//           </div>
//         {/* </div> */}

//     </div>
//   )
// }

// export default Testimonial



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React, { useRef } from 'react';

const Testimonials = () => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1   ,
    //   };

      var data=[
        {
            name:"Faruqi Afzal",
            img:"/course/tablet.png",
            coursePurchased: "10th Standard Class",
            review:"The 10th Standard Full Course was incredibly helpful. The content was well-structured, and the interactive elements kept me engaged. The instructors' explanations were easy to understand, and the practical examples in science made learning fun. The comprehensive coverage of all subjects definitely prepared me well for my board exams.",
        },
        {
            name:"James Lee",
            img:"/course/tablet.png",
            coursePurchased: "Full-Stack Web Development",
            review:"This course was a game-changer for me. The hands-on projects were particularly beneficial, and I now feel confident in my skills to build full-scale web applications. The support from the instructors was also top-notch.",
         
        },
        {
            name:"Md Ifta khairul",
            img:"/course/tablet.png",
            coursePurchased:"Graphic Design Essentials",
            review:"The Graphic Design Essentials course was fantastic! It covered all the basics and more, with plenty of real-world applications. The instructor's feedback on my projects was incredibly helpful. I feel much more confident in my design skills now.",
    
        },
        {
            name:"Chris Nguyen",
            img:"/course/tablet.png",
            coursePurchased:"Python Programming for Beginners",
            review:"The Python Programming for Beginners course was exactly what I needed. The lessons were clear and concise, and the coding exercises were very practical. I appreciated the step-by-step approach, which made learning Python easy and enjoyable",
    
        }
    ]
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default to 1 slide to show
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 640, // Align with md
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // Align with lg
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
             initialSlide: 2,
            },
          },
          {
            breakpoint: 1024, // Align with lg
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            // initialSlide: 2,
            },
          },
        ],
      };

  return (
   
    // <div className="flex gap-4 m-12">
    <div id="testimonial-section" className="flex flex-col bg-gray-200 py-2">

    <h1 className="!font-semibold w-[100%] lg:text-[45px] md:text-[35px] text-[25px] text-center">Testimonials</h1>
    <p className="!font-semibold md:text-[25px] text-[18px] text-center px-2"> Across the nation, we're the institute of choice for thousands of students and parents</p>
    <div className="md:m-16 m-8">
      <Slider {...settings}>
        {data.map((card) => (
          <div key={card.name} className="sm:p-1">
            <div className="flex flex-col gap-4 rounded-lg">
              <img
                src={card.img}
                className="h-16 rounded-full mx-auto"
                alt={card.name}
              />
              <p className="text-center font-semibold mt-4">
                {card.coursePurchased}
              </p>
              <p className="mt-2">{card.review}</p>
              <p className="font-semibold text-center mt-6">{card.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>

);
};

export default Testimonials;

