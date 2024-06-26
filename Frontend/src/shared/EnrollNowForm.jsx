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
import { EnrollCourseValidation } from "@/lib/validation";
// import Loader from "@/components/shared/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/AuthContext";
import Loader from "@/components/Loader";
import axios from "axios";
import RazorpayForm from "./RazorPayFrom";

function EnrollNowForm() {


  const navigate = useNavigate();
  
  // const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  //const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(EnrollCourseValidation),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      price: 2999,
    },
  });
  const [razorpayFormData, setRazorpayFormData] = useState(null);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const courseId="6643a37569f68e952940768c";
  async function onSubmit(values) {
    setFormSubmitted(true);
    console.log(values);
    setRazorpayFormData({
      fullName: values.fullName,
      email: values.email,
      phone: values.phoneNumber,
    });
   
   try {
     await axios.post("/api/v1/users/enroll-course",courseId)
     .then((res)=>{
         console.log("enrolled successfully ",res);
         navigate("/my-profile")
     })
     .catch((err)=>{
         console.log(err);
        navigate("/sign-in");
     })
   } catch (error) {
    console.log("Some error occured during enrolling in the course ",error);
    
   }
   
  }

  return (
    <div className="w-full bg-gray-100 -z-200 relative  h-screen ">
      <div
        className="
    flex shadow-custom rounded-sm bg-white  
    justify-around  items-center absolute top-[45%] left-1/2  transform translate-x-[-50%]
    translate-y-[-50%] z-200
       border-1 border-gray-400
        flex-col 
      "
      >
        <h1 className="!font-semibold text-[20px] p-4 mt-4">Payment Details</h1>
        <div className="  w-[600px]">
          <Form {...form}>
            <div className="  flex-col">
              <form
                //  sm:w-420
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-16 w-full mt-1"
              >
                <div className="px-16 flex flex-col gap-4">
                  <div className="w-full flex justify-between">
                    <p className="!font-semibold">Amount</p>
                    <div className="w-[300px]">
                      <p className="border rounded p-2 !font-semibold">
                        <span className=" text-[16px] ">&#2547;</span> 2,999.00
                      </p>
                      <p className="text-sm flex flex-wrap">
                        18% GST included which is paid to the Government.
                      </p>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex flex-col justify-between">
                        <div className="flex items-start  justify-between">
                          <FormLabel className="mt-3">Email</FormLabel>
                          <FormControl>
                            <div className="w-[300px]">
                              <Input
                                type="email"
                                // placeholder="user@example.com"
                                {...field}
                                className="border rounded p-2  w-full"
                              />
                              <p className="text-sm flex flex-wrap">
                                Please recheck as access will be provided for
                                this email.
                              </p>
                            </div>
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="flex flex-col  ">
                        <div className="flex items-start  justify-between">
                          <FormLabel className="mt-3">Phone Number</FormLabel>
                          <FormControl>
                            <div className="w-[300px]">
                              <Input
                                type="text"
                                // placeholder="+88xxxxxxxxxx"
                                {...field}
                                className="border rounded p-2  w-full"
                              />
                            </div>
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <div className="flex items-start  justify-between">
                          <FormLabel className="mt-3">Full name</FormLabel>
                          <FormControl>
                            <div className="w-[300px]">
                              <Input
                                type="text"
                                //   placeholder="Enter name"
                                {...field}
                                className="border rounded p-2 w-full"
                              />
                              <p className="text-sm">
                                Please enter your full name
                              </p>
                            </div>
                          </FormControl>
                        </div>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex w-full justify-between items-center bg-gray-100">
                  <div className="flex gap-2 items-center ml-16">
                    <img src="/payment/upi.png" className="h-4 object-cover" />
                    <img src="/payment/visa.png" className="h-5 object-cover" />
                    <img
                      src="/payment/rupay.png"
                      className="h-5 object-cover"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-blue-600 rounded-none px-8 py-7"
                  >
                    <div className="flex gap-2">
                      {/* <p className="flex items-center gap-1">
                     < RazorpayForm/>
                        </p> */}
                      {!formSubmitted && !razorpayFormData && <>Pay</>}
                      {formSubmitted && razorpayFormData && (
                        <RazorpayForm
                          fullName={razorpayFormData.fullName}
                          email={razorpayFormData.email}
                          phone={razorpayFormData.phone}
                        />
                      )}
                      <p>
                        <span className="text-[25px] !font-semibold ">
                          &#2547;
                        </span>{" "}
                        2,999.00
                      </p>
                    </div>
                  </Button>
                </div>
              </form>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default EnrollNowForm;
