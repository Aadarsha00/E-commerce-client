"use client";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

import Image from "next/image";
import { useAuth } from "@/context/auth.contex";

const Header = () => {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);

  return (
    <div className="bg-gray-100 py-1 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="w-1/5">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="WhateverStore Logo"
                width={75}
                height={25}
                className="h-auto"
              />
            </Link>
          </div>

          {/* center section  */}
          <div className="flex gap-5 text-base justify-center">
            <div>
              <Link href={"/"}>
                <p className="text-gray-600 hover:text-blue-600 font-semibold">
                  Home
                </p>
              </Link>
            </div>

            <div>
              <Link href={"/about-us"}>
                <p className="text-gray-600 hover:text-blue-600 font-semibold">
                  About Us
                </p>
              </Link>
            </div>
            <div>
              <Link href={"/contact-us"}>
                <p className="text-gray-600 hover:text-blue-600 font-semibold">
                  Contact Us
                </p>
              </Link>
            </div>
          </div>

          {/* right section with icons - authentication conditional rendering */}
          {isAuthenticated ? (
            <div className="flex space-x-4 justify-end w-1/5 pr-2">
              <Link href="/wishlist">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow">
                  <CiHeart size={21} />
                </div>
              </Link>
              <Link href="/add-to-cart">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow">
                  <BsCart3 size={19} />
                </div>
              </Link>

              <button
                onClick={logout}
                className="cursor-pointer font-semibold border border-red-500 text-red-500 px-3 py-2 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4 justify-end w-1/5 pr-2">
              <Link href="/login">
                <button className="cursor-pointer font-semibold border border-blue-500 text-blue-500 px-3 py-2 min-w-[100px] rounded-md hover:bg-blue-50 transition-all duration-300">
                  Login
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="cursor-pointer font-semibold bg-blue-500 text-white px-3 py-2 min-w-[100px] rounded-md hover:bg-blue-600 transition-all duration-300">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
