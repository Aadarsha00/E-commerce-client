import FormSignup from "@/components/auth/formSignup";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl overflow-hidden p-6 md:p-10">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
            Create Your Account
          </h1>
          <p className="text-gray-500 mt-2">
            Fill in your details to get started
          </p>
        </div>

        <div className="mt-6">
          <FormSignup />
        </div>

        <div className="mt-8 text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/login">
              <span className="font-medium text-blue-600 hover:text-blue-700 hover:underline transition-all">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
