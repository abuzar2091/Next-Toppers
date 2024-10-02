import { Button } from "@/components/ui/button";
import React, { useState } from "react";
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
import { SignUpValidation } from "@/lib/validation";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Popover, PopoverContent } from "@/components/ui/popover";

import { useUserContext } from "@/context/AuthContext";
import Loader from "@/components/Loader";
import axios from "axios";
axios.defaults.withCredentials = true;

function SignUpForm() {
  const isLoading = false;
  const [eye, setEye] = useState(true);
  const [check, setCheck] = useState(false);
  const [submitform, setSubmitForm] = useState(false);

  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(values) {
    try {
      setSubmitForm(true);

      if (!check) {
        toast({
          title: "Read and check the terms and conditons, Please Try again",
        });
        console.log("Read and check the terms and conditons");
        setSubmitForm(false);
        return;
      }
      await axios
        .post(`${import.meta.env.VITE_BACKEND_API_URI}/api/v1/users/signup`, values,{
          withCredentials:true
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("error ", err);
        });
      checkAuthUser();
      form.reset();
      setSubmitForm(false);
      navigate("/");
    } catch (error) {
      setSubmitForm(false);
      console.log("Something happening wrong in registering the user ", error);
    }
  }
  // left-1/2  transform translate-x-[-50%] translate-y-[-50%] z-100 border-4  border-gray-400  absolute top-[45%]
  return (
    <div className="w-full   min-h-screen
    flex  bg-white  
     items-center justify-center
        border-gray-400
       md:flex-row flex-col md:gap-8
    ">
      <div
        className="flex bg-white justify-center items-center mt-4
      md:flex-row flex-col
      "
      >
        <div className="flex flex-col gap-4 sm:px-8 px-8 md:py-16 py-4 sm:mx-0">
          <img src="/assets/icons/logo.svg" className="px-0" />

          <h1 className="font-bold sm:text-2xl text-xl ">
            Welcome to
            <br />
            Next Toppers
            <br />
            Learning Platform
          </h1>
          <img
            src={"/assets/icons/home.svg "}
            alt="google logo"
            className="md:w-56 w-50 h-36"
          />
        </div>

        <div className="md:hidden flex flex-row sm:mx-0 mx-auto">
          <div className="border-gray-300   sm:w-[50px] border-[1px]  " />
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

        <div className="sm:px-8 px-6  md:py-4 py-8  ">
          <Form {...form}>
            <div className="sm:w-420 flex-col ">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-2 w-full mt-1"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="text"
                            placeholder="Enter name"
                            {...field}
                            className="border rounded p-2 pl-8"
                          />
                          <img
                            src="/assets/icons/account.svg"
                            alt="Account icon"
                            className="absolute top-3 left-2 w-4 h-4 pointer-events-none"
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                            className="absolute top-3 left-2 w-4 h-4 pointer-events-none"
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="text"
                            placeholder="+88xxxxxxxxxx"
                            {...field}
                            className="border rounded p-2 pl-8"
                          />
                          <img
                            src="/assets/icons/phone.svg"
                            alt="Account icon"
                            className="absolute top-3 left-2 w-4 h-4 pointer-events-none"
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
                  {submitform ? (
                    <div className="flex-center gap-2">
                      <Loader />
                      <p>Loading...</p>
                    </div>
                  ) : (
                    "Sign Up"
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
                Already have an account?
                <Link
                  to="/sign-in"
                  className="text-primary-500 text-small-semibold ml-1 text-red-600"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
