import React, { useEffect, useState } from 'react'
import { ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function NewBatch() {
    const [launchCourse,setLaunchCourse]=useState(null);
    useEffect(()=>{
        const getRecentlyLaunchedCourse=async()=>{
            await axios.get(`/api/v1/admin/recent-course`)
            .then((res)=>{
                setLaunchCourse(res.data.data)
                console.log("recently launced cousre ",res.data.data);
            })
            .catch((err)=>{
                console.log(err);
            })
          
        }
        getRecentlyLaunchedCourse();
    },[])
    //console.log(launchCourse?.newCourse._id);
  return (
    <div className="flex flex-col gap-4 items-center px-4">
        <h1 className="!font-semibold text-orange-400 text-[22px]">NEW AUG'24 BATCH 🔥</h1>
        <p className="!font-semibold text-[18px]">SIGMA 2.0 : WEB DEVELOPMENT </p>
        <img src="/assets/images/webdev.png"
        className=" object-cover rounded-lg w-[300px]  h-auto"/>
        <p className="!font-semibold ">Start Your Learning Journey Today!</p>
        <Link to={`/course-details/${launchCourse?.newCourse._id}`}>
        <div className="flex gap-1 items-center bg-orange-500 text-white  rounded-lg
         px-4 py-1 hover:bg-orange-400">
        <button className="!font-semibold text-[25px]  
        ">Explore</button>
           <ChevronsRight className="mt-1"/>
        </div>
        </Link>
    </div>
  )
}

export default NewBatch