"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import ImageSlider from "./image-slider";
import { getProductsById } from "@/api/product";
import ProductDetails from "./product-detail";
import Index from "@/components/review";

interface IProp {
  id: string;
}

const ProductDetail: React.FC<IProp> = ({ id }) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["get-product-by-id", id],
    queryFn: () => getProductsById(id),
  });

  useEffect(() => {
    if (isError) {
      toast.error(error?.message ?? "Something went wrong");
    }
  }, [error, isError]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-xl font-medium text-gray-600">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-10 py-8 max-w-7xl">
      {/* Product Content (image + details) */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full bg-white rounded-lg shadow-sm p-4 md:p-6">
        {/* Left side - image section */}
        <div className="w-full lg:w-2/5 xl:w-1/3">
          <div className="w-full h-80 md:h-96 lg:h-112 bg-gray-50 rounded-md overflow-hidden">
            <ImageSlider images={data?.data?.images ?? []} />
          </div>
        </div>

        {/* Right side - product detail */}
        <div className="flex-1 lg:pl-4">
          <ProductDetails product={data?.data} />
        </div>
      </div>

      {/* Reviews Section - now below product content */}
      <div className="mt-12 w-full bg-white rounded-lg shadow-sm p-4 md:p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-4">
          Review
        </h2>
        <Index productId={id} />
      </div>
    </div>
  );
};

export default ProductDetail;
