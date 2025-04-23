"use client";
import { deleteWishlist, getWishList, removeWishList } from "@/api/wishlist";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "../product/productCard";
import { IProduct } from "@/interface/auth/product.interface";
import toast from "react-hot-toast";
import { Trash, ShoppingBag, X } from "lucide-react";

const Wishlist = () => {
  // Fetching wishlist
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getWishList"],
    queryFn: getWishList,
  });

  // Handle product removal
  const { mutate: removeItem } = useMutation({
    mutationKey: ["remove-product"],
    mutationFn: removeWishList,
    onSuccess: () => {
      toast.success("Product removed from wishlist");
      refetch();
    },
    onError: () => {
      toast.error("Failed to remove the product");
    },
  });

  // Handle wishlist deleting
  const { mutate: removeWishlist } = useMutation({
    mutationKey: ["remove-wishlist"],
    mutationFn: deleteWishlist,
    onSuccess: () => {
      toast.success("Wishlist deleted successfully");
      refetch();
    },
    onError: () => {
      toast.error("Failed to delete the wishlist");
    },
  });

  const handleRemoval = (productId: string) => {
    console.log("Trying to remove:", productId);
    removeItem(productId);
  };

  const handleDelete = () => {
    removeWishlist();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Checking if the wishlist is empty
  if (!data?.data || data?.data?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Your wishlist is empty
        </h2>
        <p className="text-gray-500">
          Items added to your wishlist will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">
          My Wishlist ({data?.data?.length})
        </h1>
        {data?.data?.length > 0 && (
          <button
            onClick={handleDelete}
            className="bg-red-50 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 transition flex items-center text-sm font-medium"
          >
            <X className="mr-2 h-4 w-4" />
            Clear All
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {data?.data?.map((item: IProduct) => {
          return (
            <div key={item._id} className="mb-6 relative">
              <ProductCard product={item} wishList={true} />
              <button
                onClick={() => handleRemoval(item._id)}
                className="absolute bottom-12 left-0 right-0 bg-red-500 text-white py-2 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <Trash className="mr-2 w-4 h-4" />
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
