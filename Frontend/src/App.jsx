// import SignUpForm from "./auth/forms/SignUpForm"

// import SignUpForm from "./auth/forms/SignUpForm";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import SignInForm from "./auth/forms/SignInForm";
import { SignUpForm } from "./auth/forms/Index";
import RootLayout from "./components/RootLayout";
import Shop from "./components/Shop";
import Courses from "./components/Courses";
import CourseDetails from "./components/CourseDetails";
import MentorDetails from "./components/MentorDetails";
import AllMentors from "./components/AllMentors";
import JoinAsMentor from "./components/JoinAsMentor";
import HomePage from "./components/HomePage";
import EnrollNowForm from "./shared/EnrollNowForm";
//import { useUserContext } from "./context/AuthContext";

function App() {
  //const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  // const { data: currUser, refetch } = useGetCurrentUser();
  // let currUser;
  // useEffect(()=>{
  //  const fetchUser=async()=>{

  //     currUser= await getCurrentUSer();
  //  }
  //  fetchUser();
  // },[])

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/sign-up" element={<SignUpForm />} />
           <Route path="/sign-in" element={<SignInForm />} />
           <Route path="/shop" element={<Shop />} />
           <Route path="/courses" element={<Courses />} />
           <Route path="/course-details" element={<CourseDetails />} />
           <Route path="/pages.razorpay.com/unnayan-june" element={<EnrollNowForm/>} />
           <Route path="/faculty-wade-warren" element={<MentorDetails />} />
           <Route path="/mentors" element={<AllMentors />} />
           <Route path="/mentor" element={<JoinAsMentor />} />
         </Route>
      </Routes>
    </>
  );
}

export default App;
