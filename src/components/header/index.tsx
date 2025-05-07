"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { useAuth } from "@/context/auth.contex";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure mobile menu is initialized only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (!isClient) return null;

  return (
    <div className="bg-gray-100 py-2 border-b border-gray-200 relative shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo - pushed to far left */}
          <div className="flex-shrink-0 mr-auto">
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

          {/* Center navigation - desktop only */}
          <div className="hidden md:flex items-center justify-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <p className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 text-base relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
            <Link href="/about-us">
              <p className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 text-base relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
            <Link href="/contact-us">
              <p className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 text-base relative group">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
          </div>

          {/* Right section - pushed to far right */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-5">
              <Link href="/wishlist" className="hidden sm:block">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow">
                  <CiHeart size={21} />
                </div>
              </Link>
              <Link href="/cart" className="hidden sm:block">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow">
                  <BsCart3 size={19} />
                </div>
              </Link>
              <button
                onClick={logout}
                className="cursor-pointer font-semibold border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Logout
              </button>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-blue-600 md:hidden focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <IoCloseOutline size={28} className="text-red-500" />
                ) : (
                  <HiOutlineMenuAlt3 size={24} />
                )}
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <button className="cursor-pointer font-semibold border border-blue-500 text-blue-500 px-5 py-2 rounded-md hover:bg-blue-50 transition-all duration-300">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="cursor-pointer font-semibold bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-sm">
                  Register
                </button>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-blue-600 ml-2 md:hidden focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <IoCloseOutline size={28} className="text-red-500" />
                ) : (
                  <HiOutlineMenuAlt3 size={24} />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden absolute w-full left-0 top-full z-20 shadow-lg transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="block"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="text-gray-700 hover:text-blue-600 font-semibold py-2 border-b border-gray-100">
                Home
              </p>
            </Link>
            <Link
              href="/about-us"
              className="block"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="text-gray-700 hover:text-blue-600 font-semibold py-2 border-b border-gray-100">
                About Us
              </p>
            </Link>
            <Link
              href="/contact-us"
              className="block"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="text-gray-700 hover:text-blue-600 font-semibold py-2">
                Contact Us
              </p>
            </Link>

            {/* Show cart and wishlist in mobile menu for authenticated users */}
            {isAuthenticated && (
              <div className="flex space-x-6 pt-3 sm:hidden border-t border-gray-100">
                <Link
                  href="/wishlist"
                  className="flex items-center gap-2 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <CiHeart size={21} />
                  <span>Wishlist</span>
                </Link>
                <Link
                  href="/cart"
                  className="flex items-center gap-2 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BsCart3 size={19} />
                  <span>Cart</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
