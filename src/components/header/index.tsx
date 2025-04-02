import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import Image from "next/image";

const Header = () => {
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
              <Link href={"/contact-us"}>
                <p className="text-gray-600 hover:text-blue-600 font-semibold">
                  Contact Us
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
          </div>

          {/* right section with icons */}
          <div className="flex space-x-4 justify-end">
            <Link href="/wishlist">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-600 transition-colors">
                <CiHeart size={20} />
              </div>
            </Link>
            <Link href="/cart">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-600 transition-colors">
                <BsCart3 size={18} />
              </div>
            </Link>
            <Link href="/login">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-600 transition-colors">
                <IoPersonOutline size={18} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
