"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCart } from "@/api/cart";
import { placeOrder } from "@/api/order";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const router = useRouter();
  const [total, setTotal] = useState(0);
  //get cart data
  const { data, isLoading } = useQuery({
    queryKey: ["cart-data"],
    queryFn: getCart,
  });

  //handle order placement
  const { mutate: confirmOrder, isPending: placingOrder } = useMutation({
    mutationKey: ["place-order"],
    mutationFn: placeOrder,
    onSuccess: () => {
      toast.success("Order placed successfully");
      router.push("/order-confirmation");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to place order please try again");
    },
  });

  //onclick function for confirm order button
  const onClick = () => {
    confirmOrder();
  };

  //calculate the total price of cart
  useEffect(() => {
    if (data?.data?.items) {
      const cartTotal = data.data.items.reduce((sum: any, item: any) => {
        const price = Number(item.product.productPrice);
        const quantity = Number(item.quantity);
        return sum + price * quantity;
      }, 0);
      setTotal(cartTotal);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  //checking if the cart has items or no
  if (!data?.data?.items || data.data.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <p className="text-lg text-gray-600 mb-6">Your cart is empty</p>
          <button
            onClick={() => router.push("/products")}
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Order Details</h2>

        {data.data.items.map((item: any) => (
          <div
            key={item.product._id}
            className="flex justify-between py-2 border-b"
          >
            <div>
              <span className="font-medium">{item.product.productName}</span>
              <span className="text-gray-600 ml-2">x {item.quantity}</span>
            </div>
            <span>रु.{Number(item.product.productPrice) * item.quantity}</span>
          </div>
        ))}

        <div className="flex justify-between mt-4 font-bold">
          <span>Total</span>
          <span>रु.{total}</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <button
          onClick={onClick}
          disabled={placingOrder}
          className="w-full py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300 disabled:bg-indigo-400"
        >
          {placingOrder ? "Processing..." : "Confirm Order"}
        </button>

        <button
          onClick={() => router.push("/cart")}
          className="w-full mt-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors duration-300"
        >
          Back to Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
