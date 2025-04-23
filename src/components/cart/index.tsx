/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { deleteCart, getCart, removeItemFromCart } from "@/api/cart";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OrderSummary from "./orderSummary";
import ItemsDetails from "./itemsDetails";

const Index = () => {
  const [total, setTotal] = useState(0);
  //fetching cart items
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get-cart-items"],
    queryFn: () => getCart(),
  });
  console.log(data);

  //handle item removal
  const { mutate: removeItem } = useMutation({
    mutationKey: ["remove-cart-item"],
    mutationFn: removeItemFromCart,
    onSuccess: () => {
      toast.success("Product removed from card");
      refetch();
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  //handle cart clearing
  const { mutate: clearCart } = useMutation({
    mutationKey: ["clear-cart"],
    mutationFn: deleteCart,
    onSuccess: () => {
      toast.success("Cart deleted successfully");
      refetch();
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  //calculating the total price if item is removed
  useEffect(() => {
    if (data?.data?.items) {
      const cartTotal = data.data.items.reduce((sum: number, item: any) => {
        const price = Number(item.product.productPrice) || 0;
        const quantity = Number(item.quantity) || 0;
        return sum + price * quantity;
      }, 0);
      setTotal(cartTotal);
    }
  }, [data]);
  const handleRemoveItem = (productId: string) => {
    removeItem(productId);
  };
  const handleClearCart = () => {
    clearCart();
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  //if the cart is empty
  if (!data?.data?.items || data?.data?.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex justify-center mb-6"></div>
          <p className="text-lg text-gray-600 mb-6">Your cart is empty</p>
          <Link href="/products">
            <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <ItemsDetails
          items={data.data.items}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />

        {/* Order Summary */}
        <OrderSummary total={total} />
      </div>
    </div>
  );
};

export default Index;
