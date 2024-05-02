import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { SignInValidation } from "@/lib/validation";
// import Loader from "@/components/shared/Loader";
import { Link, useNavigate } from "react-router-dom";
// import { createUserAccount } from "@/lib/appwrite/api";
import { useToast } from "@/components/ui/use-toast";
import { useSignInAccount } from "@/lib/react-query/queryAndMutation";
import { useUserContext } from "@/context/AuthContext";
import { account } from "@/lib/appwrite/config";
import { saveUserToDB } from "@/lib/appwrite/api";
import Loader from "@/components/Loader";

function SignInForm() {
  // const isLoading = false;
  const [check, setCheck] = useState(false);
  const [eye, setEye] = useState(true);
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const { toast } = useToast();

  // const { mutateAsync: createUserAccount, isPending: isCreatingAccount } =
  //   useCreateUserAccount();
  const { mutateAsync: signInAccount, isPending } = useSignInAccount();
  const form = useForm({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    //console.log(values);
    if (check === false) {
      console.log("Read and accept terms and condition, Please Try again");
      return toast({
        title: "Read and accept terms and condition, Please Try again",
      });
    }

    const session = await signInAccount(values);
    console.log(session);
    // console.log(newUser);
    if (!session) {
      toast({
        title: "Sign In failed, Please Try again",
      });
    }
    const isLoggedIn = await checkAuthUser();
    if (isLoggedIn) {
      console.log(isLoggedIn);
      form.reset();
      navigate("/");
    } else {
      return toast({
        title: "Sign In failed, Please Try again",
      });
    }
  }
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(false);

  async function handleGoogleLogin(e) {
    setIsLoading(true);

    e.preventDefault();
    try {
      console.log("sign in with google");
      // const redirectURL = 'https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/google/65e068bd561fe10d2152'; // Replace with your redirect URL
      const provider = "google";

      const success = "http://localhost:5173/"; // Redirect URL on successful login
      // const failure = "http://localhost:5173/sign-in";
      account.createOAuth2Session(provider, success);
      console.log("outside of auth1");
      // const session=await account.getOAuth2Session('google');
      // console.log(session);
      //  if(session){
      //const users = await account.get();
      setUser(true);
      //   console.log(users);
      //   console.log("outside of auth2");

      //   // Check if user information is available
      //   if (users) {
      //     // Save user information to the Appwrite database
      //     await saveUserToDB({
      //       accountId: users.$id,
      //       email: users.email,
      //       name: users.name,
      //     });

      //     console.log("User information saved to Appwrite database.");
      //     window.location.href = success;
      //   }
      //}
    } catch (error) {
      console.error("Error initiating Google login:", error);
      window.location.href = "http://localhost:5173/sign-in";
    } finally {
      setIsLoading(false);
    }
  }
  //console.log("inside sign-in");
  useEffect(() => {
    console.log(" enter to save the data in dbms");
    console.log(user);
    const fetchUser = async () => {
      try {
        const users = await account.get();
        console.log(" enter to save the data2 in dbms");
        if (users) {
          // Save user information to the Appwrite database
          const newUser = await saveUserToDB({
            accountId: users.$id,
            email: users.email,
            name: users.name,
          });

          console.log("User information saved to Appwrite database:", newUser);
        }
      } catch (error) {
        console.error("Error fetching or saving user information:", error);
      }
    };

    if (user) {
      fetchUser();
    }
  }, [user]);

  return (
    <div className="w-full bg-gray-100 -z-200 relative  h-screen ">
      <div
        className="
    flex shadow-custom rounded-3xl bg-white  
    justify-around  
    
    absolute top-[45%] left-1/2  transform translate-x-[-50%]
    translate-y-[-50%] z-200
       border-4 border-gray-400

       md:flex-row flex-col 

      
      "
      >
        <div className="flex flex-col   gap-4 ml-12 md:py-16 py-4 w-[280px]">
          <img src="/assets/icons/logo.svg" className="px-0" />

          <h1 className="font-bold md:text-2xl sm:text-xl w-[250px] ">
            Welcome to
            <br />
            FreeLanceIT Online
            <br />
            Learning Platform
          </h1>
          <img
            src={"/assets/icons/home.svg "}
            alt="google logo"
            className=" md:w-56 w-50 h-40 "
          />
        </div>

        <div className="md:hidden flex flex-row ">
          <div className="border-gray-300 ml-[20px]  w-[50px] border-[1px]  " />
          <div className="border-gray-400  border-[1px]  w-[50px]" />
          <div className="border-gray-800  border-[1px]  w-[150px] " />
          <div className="border-gray-400 border-[1px]  w-[50px] " />
          <div className="border-gray-300 border-[1px] w-[50px]  " />
        </div>
        <div className="hidden md:flex flex-col ">
          <div className="border-gray-300 mt-[60px] border-[1px]  h-[50px]" />
          <div className="border-gray-400  border-[1px]   h-[50px]" />
          <div className="border-gray-800  border-[1px]  h-[150px]" />
          <div className="border-gray-400 border-[1px] h-[50px]" />
          <div className="border-gray-300 border-[1px]   h-[50px]" />
        </div>

        <div className="px-16 md:py-4 py-8  w-[400px]">
          <div className=" text-lg border-2 border-gray-200 md:mt-16 mt-4 rounded-md h-12 ">
            <div
              className="flex justify-center items-center gap-4   cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <img
                src="/assets/icons/google.svg"
                className="bg-red-400 rounded-md h-10 mt-[2px]"
              />
              {isLoading ? (
                <div className="flex gap-3">
                  <Loader />
                  <p>Loading...</p>
                </div>
              ) : (
                <button>Sign in with google</button>
              )}
            </div>
          </div>
          <Form {...form}>
            <div className="sm:w-420 flex-col">
              <h2 className="h3-bold  md:h2-bold lg:pt-2 sm:pt-0 text-center">
                --- or sign in with your email ---
              </h2>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-2 w-full mt-1"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="email"
                            placeholder="user@example.com"
                            {...field}
                            className="border rounded p-2 pl-8"
                          />
                          <img
                            src="/assets/icons/msg.svg"
                            alt="Account icon"
                            className="absolute top-2 left-2 w-4 h-4 pointer-events-none"
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={eye ? "password" : "text"}
                            placeholder="************"
                            {...field}
                            className="border rounded p-2 pl-8"
                          />
                          <img
                            src="/assets/icons/locked.svg"
                            alt="Account icon"
                            className="absolute top-2 left-2 w-4 h-4 pointer-events-none"
                          />

                          <img
                            src={
                              eye
                                ? "/assets/icons/eye.svg"
                                : "/assets/icons/eye-off.svg"
                            }
                            alt="Account icon"
                            className="absolute top-3 right-3 w-4 h-4  cursor-pointer"
                            onClick={(e) => setEye((prev) => !prev)}
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-red-400">
                  {isPending ? (
                    <div className="flex flex-center gap-2">
                      <Loader />
                      <p> Loading... </p>
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
              <div className="flex justify-center items-center gap-2 mt-4 ">
                <img
                  src={
                    check
                      ? "/assets/icons/square-check.svg"
                      : "/assets/icons/checked.svg"
                  }
                  onClick={(e) => setCheck((prev) => !prev)}
                />

                <p className="text-sm">I agree to the terms and conditions</p>
              </div>

              <p className="text-small-regular text-sm text-light-2 text-center mt-2 ">
                Don't have an account?
                <Link
                  to="/sign-up"
                  className="text-primary-500 text-small-semibold ml-1 text-red-600"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
