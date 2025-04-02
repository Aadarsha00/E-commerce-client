import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="overflow-hidden tracking-wider border border-gray-300 w-fit rounded-md ">
      {/* image */}
      <div className="h-50 w-60 aspect-square p-3">
        <Image
          className="h-full w-full"
          height={1000}
          width={1000}
          src="/product/product.webp"
          alt="product image"
        />
      </div>
      <div className="p-3">
        <p className="text-[15px]">Speaker</p>
        <span className="text-[15px]">750</span>
      </div>
      <div>
        <button className="cursor-pointer py-3 w-full text-[14px] bg-black text-white font-semibold">
          View Detail
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
