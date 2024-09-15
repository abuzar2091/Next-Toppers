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
import Select from "react-select";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";

import { useUserContext } from "@/context/AuthContext";
import Loader from "@/components/Loader";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ApplyAsMentorValidation } from "@/lib/validation";
// import { ApplyAsMentorValidation } from "@/lib/validation";

function ApplicationFormForMentor() {
  const isLoading = false;
  const [submitform, setSubmitForm] = useState(false);

  const subjectOptions = [
    {
      value: "Programming (C++, Java, JavaScript)",
      label: "Programming (C++, Java, JavaScript)",
    },
    {
      value: "Advanced Data Structures and Algorithms",
      label: "Advanced Data Structures and Algorithms",
    },
    { value: "Operating Systems", label: "Operating Systems" },
    {
      value: "Database Management Systems (DBMS)",
      label: "Database Management Systems (DBMS)",
    },
    { value: "Computer Networks", label: "Computer Networks" },
    { value: "Machine Learning and AI", label: "Machine Learning and AI" },
    { value: "Software Engineering", label: "Software Engineering" },
    { value: "Discrete Mathematics", label: "Discrete Mathematics" },
    { value: "Calculus", label: "Calculus" },
    { value: "Linear Algebra", label: "Linear Algebra" },
    {
      value: "Probability and Statistics",
      label: "Probability and Statistics",
    },
    { value: "Algebra", label: "Algebra" },
    { value: "Geometry", label: "Geometry" },
    { value: "Classical Mechanics", label: "Classical Mechanics" },
    { value: "Electromagnetism", label: "Electromagnetism" },
    { value: "Quantum Physics", label: "Quantum Physics" },
    { value: "Thermodynamics", label: "Thermodynamics" },
    { value: "Optics", label: "Optics" },
    { value: "Modern Physics", label: "Modern Physics" },
    { value: "Mathematics (10th Grade)", label: "Mathematics (10th Grade)" },
    { value: "Science (10th Grade)", label: "Science (10th Grade)" },
    { value: "Mathematics (12th Grade)", label: "Mathematics (12th Grade)" },
    { value: "Physics (12th Grade)", label: "Physics (12th Grade)" },
    { value: "Chemistry (12th Grade)", label: "Chemistry (12th Grade)" },
    { value: "Biology (12th Grade)", label: "Biology (12th Grade)" },
    {
      value: "Web Development (HTML, CSS, JavaScript)",
      label: "Web Development (HTML, CSS, JavaScript)",
    },
    { value: "Data Science", label: "Data Science" },
    { value: "Computer Vision", label: "Computer Vision" },
    {
      value: "Natural Language Processing",
      label: "Natural Language Processing",
    },
    { value: "Blockchain Technology", label: "Blockchain Technology" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Mobile App Development", label: "Mobile App Development" },
  ];
  // const form =
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ApplyAsMentorValidation),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      resume: null,
      linkedinUrl: "",
      experience: "",
      education: "",
      subjects: [], // Add subjects field
    },
  });
  async function onSubmit(values) {
    try {
      setSubmitForm(true);
      console.log("inside submit", values);
      await axios
        .post(`${import.meta.env.VITE_BACKEND_API_URI}/api/v1/admin/request_as_mentor`, values)
        .then((res) => {
          console.log("hello world response ", res);
          setSubmitForm(false);
        })
        .catch((err) => {
          console.log("error ", err);
        });
      // checkAuthUser();
      // form.reset();
      // setSubmitForm(false);
      // navigate("/");
    } catch (error) {
      setSubmitForm(false);
      console.log("Something happening wrong in registering the user ", error);
    } finally {
      setSubmitForm(false);
    }
  }
  return (
    <div className=" bg-gray-100  min-h-screen ">
      <div
        className="flex   bg-white   justify-center  border-gray-400
      md:flex-row flex-col
      "
      >
        <div className="flex flex-col gap-4  md:py-16 py-4 mx-auto ">
          <img src="/assets/icons/logo.svg" className="px-0" />

          <h1 className="font-bold sm:text-2xl text-center text-xl w-[250px] ">
            Welcome to
            <br />
            Next Toppers to
            <br />
            Joining as A Mentor
          </h1>
          <img
            src={"/assets/icons/home.svg "}
            alt="google logo"
            className="md:w-56 w-50 h-36"
          />
        </div>

        <div className="md:hidden flex flex-row justify-center">
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

        <div className="px-16  md:py-4 py-8  w-[100%] md:w-[50%]">
          <Form {...control}>
            <div className="sm:w-420 flex-col ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col  gap-2 w-full mt-1"
              >
                <p className="font-bold sm:text-2xl  text-xl w-[250px]">
                  Basic Information
                </p>
                <FormField
                  control={control}
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
                  control={control}
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
                  control={control}
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
                  control={control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="text"
                            placeholder="Enter address"
                            {...field}
                            className="border rounded p-2 pl-8"
                          />
                          <img
                            src="/assets/icons/house.svg"
                            alt="Account icon"
                            className="absolute top-3 left-2 w-4 h-4 pointer-events-none"
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="font-bold text-2xl  sm:text-xl w-[250px]">
                  Professional Information
                </p>
                <FormField
                  control={control}
                  name="resume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Upload Resume/CV</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="file"
                            placeholder="Optional"
                            accept="image/*"
                            {...field}
                            className="border rounded p-2 pl-8"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="linkedinUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Linked In Profile URL</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="text"
                            placeholder="Optional"
                            {...field}
                            className="border rounded p-2 pl-8"
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="font-bold text-2xl  sm:text-xl w-[250px]">
                  Teaching Information
                </p>

                <FormField
                  //   <Controller
                  control={control}
                  name="subjects"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subjects of Expertise</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          isMulti
                          options={subjectOptions}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          onChange={(selected) =>
                            field.onChange(
                              selected.map((option) => option.value)
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Education Background</FormLabel>

                      <FormControl>
                        <div className="relative">
                          <Input
                            type="text"
                            placeholder="Degrees, institutions attended, and graduation years. seprated by comas"
                            {...field}
                            className="border rounded p-2 pl-8"
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teaching Experience</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="text"
                            placeholder="Describe teaching experience"
                            {...field}
                            className="border rounded p-2 pl-8"
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
                    "Submit "
                  )}
                </Button>
              </form>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ApplicationFormForMentor;
