import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';

function MyProfile() {
      const [data,setData]=useState(null);
    useEffect(()=>{
        const getMyProfile=async()=>{
            await axios.get(`${import.meta.env.VITE_BACKEND_API_URI}/api/v1/users/my-profile`)
            .then((res)=>{
                setData(res.data.data.user[0])
                console.log("myprofile ",res.data.data.user[0]);
            })
            .catch((err)=>{
                     console.log("something going wrong fetching my data ",err);
            })
        }
        getMyProfile();
    },[])
  return (
    <div className="flex flex-col  items-center w-full gap-[40px] bg-gray-100 ">

        <h1 className="bg-white w-full text-center py-8 font-semibold sm:text-[20px]">HI {data?.fullName}, WELCOME TO YOUR COURSES!</h1>
           {
             data?.myCourses?.length>0 && 
            <h2 className="!font-semibold text-[24px]">COURSES</h2>
           }
        <div className="flex justify-center gap-12 flex-wrap my-8 w-[80%]">
            {data?.myCourses.map((course)=>( 
                <Link to={`/learning/courseid=${course._id}`}>
                <div key={course._id} className="flex flex-col justify-between gap-4 w-[380px]  bg-white border-1 rounded-sm ">
                    <img src="/assets/images/batchgraphic.png" className="w-96"/>
                    <h2 className="font-semibold text-[24px] pl-4">UNAYYAN BATCH ( {course.courseName}  )</h2>
                    <p className="text-base text-gray-500 font-sens pl-4">{course.courseDescription}.</p>
                    <p  className="text-base text-gray-500 font-sens pl-4">All lectures will be uploaded at 6PM on alternate days.</p>
                    <button className="bg-blue-400 mb-0 text-white  font-semibold rounded-sm px-4 py-2">Continue</button>
                </div>
                </Link>
            ))}
        </div>
        <Footer/>
    </div>
  )
}

export default MyProfile