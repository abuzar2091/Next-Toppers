import { useUserContext, INITIAL_USER } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";


import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { SignUpForm } from "@/auth/forms/Index";
import SignInForm from "@/auth/forms/SignInForm";
import { useLocation } from "react-router-dom";
import axios from "axios";
function Header() {
  const { pathname } = useLocation();

  const {
    setUser,
    setIsAuthenticated,
    isAuthenticated,
    checkAuthUser,
    isLoading: isUserLoading,
  } = useUserContext();
  const navigate = useNavigate();

  const [authStatus, setAuthStatus] = useState(isAuthenticated);
  console.log(isAuthenticated);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hammenu, setHammenu] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

  const handleSignOut = async (e) => {
    e.preventDefault();
     setIsAuthenticated(false);
     setUser(INITIAL_USER);
    // setAuthStatus(false);
    // navigate("/");
    await axios.post(`${import.meta.env.VITE_BACKEND_API_URI}/api/v1/users/logout`
  ).then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log("error ",err);
  });
  };

  let navItems = [
    { name: "Home", redirection: "/", active: true },
    { name: "Courses", redirection: "/courses", active: true },
    { name: "Shop", redirection: "/shop", active: true },
    { name: "Mentors", redirection: "/mentors", active: true },
    { name: "Join As a Mentor", redirection: "/join as mentor", active: true },
    { name: "Sign-In", redirection: "/sign-in", active: !isAuthenticated },
    { name: "Sign-Up", redirection: "/sign-up", active: !isAuthenticated },
  ];
 
  return (
      <navbar  className={`sticky top-0 z-10  w-full  bg-gray-100  flex sm:px-12 px-4 py-2 ${
          ["sign-in", "sign-up"].find((items) => pathname.includes(items))
            ? " bg-[rgba(138,133,133,0.5)] -z-100 relative"
            : ""
        }`}>
        <div className="flex w-[100%] justify-between">
        <Link to="/" >
        <img
          src="/assets/images/logoNT.png"
          className="h-12 w-24 sm:ml-0 md:ml-4 ml-4"
        />
        </Link>
        <div className="md:hidden flex items-center mr-4">
                    <button onClick={toggleMenu} className="text-gray-900">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
        </div>
        <ul className="hidden  md:flex ml-auto opacity-100  ">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <NavLink
                  to={`${item.redirection}`}
                  className={({ isActive }) =>
                    ` inline-block  lg:px-3 md:px-1 py-2  duration-200 hover:bg-blue-100
                                        rounded-full
                                         ${
                                           isActive
                                             ? "text-blue-700 "
                                             : "text-white-700"
                                         }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ) : null
          )}
          {isAuthenticated && (
            <div className="flex items-start gap-4">
              <button onClick={handleSignOut} className="px-2 py-[6px]">
                Sign out
              </button>
              <Link to="/my-profile">
              <div className="flex justify-center items-start  gap-2 cursor-pointer">
                <button>
                  <p className="small-medium lg:base-medium py-1">My Account</p>
                </button>
                <img
                  src="/assets/icons/img_profile_24_outline.svg"
                  alt="profiletwentyfo"
                  className="h-[30px] w-[30px] mt-1"
                />
              </div>
              </Link>
            </div>
          )}
        </ul>
        </div>
        <div className={`fixed top-0 left-0 h-full min-w-[180px] bg-white shadow-lg z-50 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex justify-between p-4">
                    <h2 className="text-xl font-bold">Menu</h2>
                    <button onClick={toggleMenu} className="text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col gap-4 p-4">
                    {navItems.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                <NavLink
                                    to={item.redirection}
                                    className={({ isActive }) =>
                                        `inline-block px-4 py-2 duration-200 hover:bg-blue-100
                                            rounded-full ${isActive ? "text-blue-700" : "text-gray-700"}`
                                    }
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ) : null
                    )}
                    {isAuthenticated && (
                        <div className="flex flex-col gap-4 items-start">
                            <button onClick={(e) => { handleSignOut(e); toggleMenu(); }} className="ml-4 py-2">
                                Sign out
                            </button>
                            <Link to="/my-profile" onClick={toggleMenu}>
                                <div className="flex justify-start items-center gap-2 cursor-pointer px-4 py-2">
                                    <button>
                                        <p className="small-medium lg:base-medium">My Account</p>
                                    </button>
                                    <img
                                        src="/assets/icons/img_profile_24_outline.svg"
                                        alt="profiletwentyfo"
                                        className="h-[30px] w-[30px]"
                                    />
                                </div>
                            </Link>
                        </div>
                    )}

                  
                </ul>
            </div>

    </navbar>
  );
}

export default Header;

