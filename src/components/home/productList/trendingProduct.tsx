"use client";
import React, { useEffect } from "react";
import ProductList from "../product-list";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/api/product";
import toast from "react-hot-toast";

const TrendingProduct = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["trending-products"],
    queryFn: getAllProducts,
  });
  console.log("trending", data);
  useEffect(() => {
    if (isError) {
      toast.error(error?.message ?? "Something went wrong");
    }
  }, [isError, error]);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Our Collection
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-lg mx-auto">
            Discover our latest trending products, handpicked for quality and
            style.
          </p>
        </div>
        <ProductList
          title="Trending Products"
          isLoading={isPending}
          products={data?.data?.data ?? []}
        />
      </div>
    </div>
  );
};

export default TrendingProduct;
