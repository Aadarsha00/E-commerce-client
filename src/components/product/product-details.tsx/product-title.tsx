import RatingStar from "@/components/ui/rating";
import React from "react";

interface IProp {
  name: string;
  rating: number;
}

const ProductTitle: React.FC<IProp> = ({ name, rating }) => {
  return (
    <div className="mb-2">
      <p className="text-xl font-semibold text-gray-800 mb-2">{name}</p>
      <div className="flex items-center gap-2">
        <RatingStar rating={rating} />
        <p className="tracking-wider text-sm text-gray-500">({rating})</p>
      </div>
    </div>
  );
};

export default ProductTitle;
