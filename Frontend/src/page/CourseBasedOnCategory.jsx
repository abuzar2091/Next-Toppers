// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useLocation } from "react-router-dom";

// function CourseBasedOnCategory() {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const categoryName = params.get('category');
//   const [courses,setCourses]=useState(null);
//   useEffect(()=>{
    
//     const getCourseBasedOnCategory=async()=>{
//         await axios.post("/api/v1/admin/getcourse-basedon-category",{categoryName})    
//         .then((res)=>{
//             setCourses(res.data.data.course);
//             console.log("cousre based on category ",res.data.data.course);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
      
//     }
//     getCourseBasedOnCategory();


//   },[categoryName]);

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {courses  && courses.length>0 && (
//         courses.map((course) => (
//           <div className="flex flex-col p-4 border border-gray-200 rounded" key={course._id}>
//             <h1 className="text-lg font-bold">{course.courseName}</h1>
//             <p>{course.courseDescription}</p>
//             <p>Rating: {course.courseRating}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default CourseBasedOnCategory;
//   useEffect(() => {
//     const getCourseBasedOnCategory = async () => {
//       try {
//         const response = await axios.post("/api/v1/admin/getcourse-basedon-category", { categoryName });
//         setCoursesByCategory(response.data.data.courses);
//       //  setCourse(response.data.data.courses);
//         console.log("course based on category", response.data.data.courses);
//       } catch (err) {
//         setError(err);
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getCourseBasedOnCategory();
//     setRowsToShow(1);
//   }, [categoryName]);

//   const [coursesByCategory, setCoursesByCategory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

import FreelanceEduCourses from '@/shared/FreelanceEduCourses';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';

function CourseBasedOnCategory() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryName = params.get('category');

  const [rowsToShow, setRowsToShow] = useState(1);
  const fetchCourses = async (categoryName) => {
    const { data } = await axios.post("/api/v1/admin/getcourse-basedon-category", { categoryName });
    return data.data.courses; // Return the data from the API response
  };
// UseQuery hook to fetch data
// const { data: coursesByCategory, isLoading, error } = useQuery({
//     queryKey: ['courses'],
//     queryFn: fetchCourses,
//   });
  const { data: coursesByCategory, isLoading, error } = useQuery({
    queryKey: ['courses', categoryName], // Use categoryName in queryKey
    queryFn: () => fetchCourses(categoryName),
    enabled: !!categoryName // Ensure the query runs only if categoryName exists
  });
  useEffect(() => {
    setRowsToShow(1);
  }, [categoryName]);

  const handleViewMore = () => {
    setRowsToShow(rowsToShow + 1);
  };

  if (isLoading) return <p className="mx-12">Loading...</p>;
  if (error) return <p className="mx-12">Error loading courses: {error.message}</p>;
  console.log("data ",coursesByCategory);

  return (
        <div className="sm:mx-12 mx-8">
    {coursesByCategory?.length>0 && coursesByCategory.map((categoryGroup) => (
        <div key={categoryGroup.courseCategory}>
          <h2 className="text-xl font-bold mb-4">{categoryGroup.courseCategory}</h2>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 mb-8">
            {categoryGroup.courses.slice(0, rowsToShow * 3).map((courseByCategory) => (
              <div className="flex flex-col md:p-1 lg:p-4 p-0" key={courseByCategory._id}>
                <FreelanceEduCourses
                  standard={courseByCategory.courseName}
                  standardisa={courseByCategory.courseDescription}
                  img={"/assets/icons/img_group_teal_a400.svg"}
                  className="flex flex-col items-center justify-start w-full"
                />
              </div>
            ))}
          </div>
          {rowsToShow * 3 < categoryGroup.courses.length && (
            <div className="flex justify-end mb-4">
            <button
              onClick={handleViewMore}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              View More
            </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default CourseBasedOnCategory;
