import { useUserContext, INITIAL_USER } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useSignOutAccount } from "@/lib/react-query/queryAndMutation";
import { usePopover } from "@/context/PopoverContext";
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
    { name: "Login", redirection: "/sign-in", active: !isAuthenticated },
    { name: "Signup", redirection: "/sign-up", active: !isAuthenticated },
    { name: "All Posts", redirection: "/all-posts", active: isAuthenticated },
    { name: "Add Post", redirection: "/add-post", active: isAuthenticated },
  ];
  return (
    <div
      className={`h-[580px] w-full relative  ${
        ["sign-in", "sign-up"].find((items) => pathname.includes(items))
          ? " bg-[rgba(138,133,133,0.5)] -z-6"
          : ""
      }`}
    >
      <ul className=" flex ml-auto">
        {navItems.map((item) =>
          item.active ? (
            <li key={item.name}>
              <NavLink
                to={`${item.redirection}`}
                // onClick={item.redirection === "/sign-up" ? togglePopover : null}
                className={({ isActive }) =>
                  `inline-block px-6 py-2 duration-200 hover:bg-blue-100
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
          <Button
            variant="ghost"
            className="shad-button_ghost mt-4"
            onClick={handleSignOut}
          >
            <p className="small-medium lg:base-medium">Logout</p>
          </Button>
        )}
      </ul>
    </div>
  );
}

export default Header;
