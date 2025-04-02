// components/Footer.js
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* Column 1: Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="relative w-40 h-12">
              <Image
                src="/logo.png"
                alt="WhateverStore Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="font-medium text-base mb-1">Quick Links</h3>
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              About Us
            </Link>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="font-medium text-base mb-1">Contact Us</h3>
            <a
              href="mailto:contact@whateverstore.com"
              className="flex items-center text-sm text-gray-600 hover:text-blue-600"
            >
              <FaEnvelope className="mr-2 text-sm" /> contact@whateverstore.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center text-sm text-gray-600 hover:text-blue-600"
            >
              <FaPhone className="mr-2 text-sm" /> +977 9817111522
            </a>
            <div className="flex items-start text-sm text-gray-600">
              <FaMapMarkerAlt className="mr-2 mt-1 text-sm" />
              <span>New Bansewor</span>
            </div>
          </div>

          {/* Column 4: Social Links  */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <h3 className="font-medium text-base">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/aadarsha.subedi.18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://github.com/Aadarsha00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://instagram.com/s.aadarsha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
