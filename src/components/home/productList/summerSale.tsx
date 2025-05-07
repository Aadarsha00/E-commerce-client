"use client";
import React, { useEffect } from "react";
import ProductList from "../product-list";
import { useQuery } from "@tanstack/react-query";
import { getSummerSale } from "@/api/product";
import toast from "react-hot-toast";
import Link from "next/link";

const TrendingProduct = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["summer-sale"],
    queryFn: getSummerSale,
  });

  useEffect(() => {
    if (isError) {
      toast.error(error?.message ?? "Something went wrong");
    }
  }, [isError, error]);

  const displayProducts = data?.data?.slice(0, 5) || [];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Summer Sale</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our seasonal collection, curated for exceptional quality
            and timeless style.
          </p>
        </div>

        {/* Products section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Featured Items
            </h3>
            {data?.data?.length > 5 && (
              <Link
                href="/products"
                className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors duration-200"
              >
                View All
              </Link>
            )}
          </div>

          <ProductList
            title="Summer Sale"
            isLoading={isPending}
            products={displayProducts}
          />
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
