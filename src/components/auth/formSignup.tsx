/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { ISignup } from "@/interface/auth/auth.interface";
import { signupSchema } from "@/schema/signup.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  LuAsterisk,
  LuUser,
  LuPhone,
  LuMail,
  LuLock,
  LuUserPlus,
} from "react-icons/lu";
import Gender from "../ui/gender-input";
import { useMutation } from "@tanstack/react-query";
import { signUP } from "@/api/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const FormSignup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<ISignup>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      gender: {},
      confirmPassword: "",
    },
    resolver: yupResolver(signupSchema),
    mode: "all",
  });

  //query mutation
  const { mutate, isPending, error } = useMutation({
    mutationFn: signUP,
    onSuccess: (response) => {
      console.log("response", response);
      toast.success("User registered successfully");
      console.log(isPending);
      console.log(error);
      router.replace("/login");
    },
    onError: () => {
      toast.error("Login Failed");
    },
  });

  const onSubmit: SubmitHandler<ISignup> = (data) => {
    console.log(data);
    const { confirmPassword, gender, ...others } = data;
    mutate({ ...others, gender: gender?.value });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/*FirstName*/}
        <div className="space-y-2">
          <div className="flex items-center">
            <label
              className="text-sm tracking-wide font-medium text-gray-700"
              htmlFor="firstName"
            >
              First Name
            </label>
            <LuAsterisk className="text-xs text-red-500 ml-1" />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LuUser className="text-gray-400" />
            </div>
            <input
              {...register("firstName")}
              type="text"
              name="firstName"
              placeholder="John"
              className={`w-full text-base border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } p-3 pl-10 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            />
          </div>
          {errors?.firstName && (
            <p className="text-xs text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        {/*Last Name*/}
        <div className="space-y-2">
          <div className="flex items-center">
            <label
              className="text-sm tracking-wide font-medium text-gray-700"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <LuAsterisk className="text-xs text-red-500 ml-1" />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LuUser className="text-gray-400" />
            </div>
            <input
              {...register("lastName")}
              type="text"
              name="lastName"
              placeholder="Doe"
              className={`w-full text-base border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } p-3 pl-10 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            />
          </div>
          {errors?.lastName && (
            <p className="text-xs text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/*phone Number*/}
      <div className="space-y-2">
        <div className="flex items-center">
          <label
            className="text-sm tracking-wide font-medium text-gray-700"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <LuAsterisk className="text-xs text-red-500 ml-1" />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LuPhone className="text-gray-400" />
          </div>
          <input
            {...register("phoneNumber")}
            type="text"
            name="phoneNumber"
            placeholder="986538767"
            className={`w-full text-base border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } p-3 pl-10 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
          />
        </div>
        {errors?.phoneNumber && (
          <p className="text-xs text-red-500">{errors.phoneNumber.message}</p>
        )}
      </div>

      {/*Gender*/}
      <div className="space-y-2">
        <Gender control={control} />
      </div>

      {/*Email*/}
      <div className="space-y-2">
        <div className="flex items-center">
          <label
            className="text-sm tracking-wide font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <LuAsterisk className="text-xs text-red-500 ml-1" />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LuMail className="text-gray-400" />
          </div>
          <input
            {...register("email")}
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            className={`w-full text-base border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } p-3 pl-10 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
          />
        </div>
        {errors?.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/*Password*/}
      <div className="space-y-2">
        <div className="flex items-center">
          <label
            className="text-sm tracking-wide font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <LuAsterisk className="text-xs text-red-500 ml-1" />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LuLock className="text-gray-400" />
          </div>
          <input
            {...register("password")}
            type="password"
            name="password"
            placeholder="••••••••"
            className={`w-full text-base border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } p-3 pl-10 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
          />
        </div>
        {errors?.password && (
          <p className="text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/*Confirm Password*/}
      <div className="space-y-2">
        <div className="flex items-center">
          <label
            className="text-sm tracking-wide font-medium text-gray-700"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <LuAsterisk className="text-xs text-red-500 ml-1" />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LuLock className="text-gray-400" />
          </div>
          <input
            {...register("confirmPassword")}
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            className={`w-full text-base border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } p-3 pl-10 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
          />
        </div>
        {errors?.confirmPassword && (
          <p className="text-xs text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          id="terms"
          className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
          I agree to the Terms of Service and Privacy Policy
        </label>
      </div>

      <button
        className="flex justify-center items-center gap-2 w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
        type="submit"
        disabled={isSubmitting}
      >
        <LuUserPlus />
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
};

export default FormSignup;
