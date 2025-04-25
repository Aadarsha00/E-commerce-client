"use client";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const OrderConfirmation = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-100 p-4">
            <FaCheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your order. A confirmation email has been sent to your
          registered email address.
        </p>

        <Link href="/products">
          <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
