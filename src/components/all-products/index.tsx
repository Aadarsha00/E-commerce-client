"use client";
import { getAllProducts } from "@/api/product";
import { IProduct } from "@/interface/auth/product.interface";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../product/productCard";

const AllProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500">
        Error loading products. Please try again later.
      </div>
    );
  }

  // If no products
  if (!data?.data?.data || data.data.data.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600">
        No products available.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.data.data.map((product: IProduct) => (
          <div key={product._id} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
