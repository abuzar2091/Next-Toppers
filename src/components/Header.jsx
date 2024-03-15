import { useUserContext, INITIAL_USER } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useSignOutAccount } from "@/lib/react-query/queryAndMutation";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { SignUpForm } from "@/auth/forms/Index";
import SignInForm from "@/auth/forms/SignInForm";
import { useLocation } from "react-router-dom";
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
  const { mutate: signOutAccount } = useSignOutAccount();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const isAuthStatusTrue = await checkAuthUser();
  //     console.log(isAuthStatusTrue);
  //     setAuthStatus(isAuthStatusTrue);
  //   };
  //   fetchUser();
  // }, [isAuthenticated]);
  // console.log(authStatus);

  const handleSignOut = async (e) => {
    e.preventDefault();
    signOutAccount();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    setAuthStatus(false);
    navigate("/");
  };

  let navItems = [
    { name: "Home", redirection: "/", active: true },
    { name: "Courses", redirection: "/courses", active: true },
    { name: "Shop", redirection: "/shop", active: true },
    { name: "Mentors", redirection: "/mentors", active: true },
    { name: "Join As a Mentor", redirection: "/mentor", active: true },
    { name: "Login", redirection: "/sign-in", active: !isAuthenticated },
    { name: "Signup", redirection: "/sign-up", active: !isAuthenticated },
  ];
  return (
    <div className="">
      <div
        className={` w-full relative bg-gray-100 flex px-12 py-3 ${
          ["sign-in", "sign-up"].find((items) => pathname.includes(items))
            ? "h-screen bg-[rgba(138,133,133,0.5)] -z-6"
            : ""
        }`}
      >
        <img
          loading="lazy"
          src="/assets/images/freelanceItlogo.png"
          className="h-[50px]"
        />
        <ul className=" flex ml-auto">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <NavLink
                  to={`${item.redirection}`}
                  className={({ isActive }) =>
                    ` inline-block px-6 py-2 duration-200 hover:bg-blue-100
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
              <div className="flex justify-center items-start  gap-2">
                <button>
                  <p className="small-medium lg:base-medium py-1">My Account</p>
                </button>
                <img
                  src="/assets/icons/img_profile_24_outline.svg"
                  alt="profiletwentyfo"
                  className="h-[30px] w-[30px] mt-1"
                />
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
