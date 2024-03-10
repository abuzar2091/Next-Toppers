// import SignUpForm from "./auth/forms/SignUpForm"

// import SignUpForm from "./auth/forms/SignUpForm";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import SignInForm from "./auth/forms/SignInForm";
import { SignUpForm } from "./auth/forms/Index";
import RootLayout from "./components/RootLayout";
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
        <Route  path="/" element={<RootLayout />}>
          {/* <Route index path="/" element={<Header />} /> */}
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/sign-in" element={<SignInForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
