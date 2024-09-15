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
import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/AuthContext";
import Loader from "@/components/Loader";
import axios from "axios";
function SignInForm() {
  // const isLoading = false;
  const [check, setCheck] = useState(false);
  const [eye, setEye] = useState(true);
  const navigate = useNavigate();
  const [submitform, setSubmitForm] = useState(false);
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
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
        .post("/api/v1/users/login", values)
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
      console.log("Something happening wrong in logging the user ", error);
    }
  }
  const [isLoading, setIsLoading] = useState(false);

  // absolute top-[45%] left-1/2  transform translate-x-[-50%]
  // translate-y-[-50%] z-200  border-4
  return (
    // <div className="w-full bg-gray-100 -z-200 relative  min-h-screen">
      <div
        className="
    flex  bg-white  
     items-center justify-center
        border-gray-400
       md:flex-row flex-col md:gap-8
      "
      >
        <div className="flex flex-col gap-4  md:py-16 py-4">
          <img src="/assets/icons/logo.svg" className="px-0 " />

          <h1 className="font-bold md:text-2xl sm:text-xl  ">
            Welcome to
            <br />
            Next Toppers
            <br />
            Learning Platform
          </h1>
          <img
            src={"/assets/icons/home.svg "}
            alt="google logo"
            className="md:w-56 w-50 h-40"
          />
        </div>
        <div className="md:hidden flex flex-row justify-start ">
          <div className="border-gray-300 ml-[20px]  w-[80px] border-[1px]  " />
          <div className="border-gray-400  border-[1px]  w-[50px]" />
          <div className="border-gray-800  border-[1px]  w-[100px] " />
          <div className="border-gray-400 border-[1px]  w-[50px] " />
          {/* <div className="border-gray-300 border-[1px] w-[20px]  " /> */}
        </div>
        <div className="hidden md:flex flex-col ">
          <div className="border-gray-300 mt-[60px] border-[1px]  h-[50px]" />
          <div className="border-gray-400  border-[1px]   h-[50px]" />
          <div className="border-gray-800  border-[1px]  h-[150px]" />
          <div className="border-gray-400 border-[1px] h-[50px]" />
          <div className="border-gray-300 border-[1px]   h-[0px]" />
        </div>

        <div className="px-0 md:py-4 py-8  ">
          <Form {...form}>
            <div className="sm:w-420 flex-col">
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
                  {submitform ? (
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
    // </div>
  );
}

export default SignInForm;
