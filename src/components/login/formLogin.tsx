// FormLogin.tsx
"use client";

import { ILogin } from "@/interface/auth/auth.interface";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schema/login.schema";
import { LuAsterisk, LuMail, LuLock, LuLogIn } from "react-icons/lu";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "all",
  });

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2">
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
              type="text"
              name="email"
              placeholder="johndoe@gmail.com"
              className={`w-full text-base border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } p-3 pl-10 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            />
          </div>
          {errors?.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
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
            <p className="text-xs text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
            Remember me
          </label>
        </div>

        <button
          className="flex justify-center items-center gap-2 text-base font-semibold px-4 py-3 bg-blue-600 rounded-lg text-white cursor-pointer hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 shadow-sm w-full mt-4"
          type="submit"
          disabled={isSubmitting}
        >
          <LuLogIn />
          {isSubmitting ? "Signing in..." : "Sign In"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
