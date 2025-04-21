/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductCard from "../product/productCard";

interface IProp {
  title: string;
  isLoading: boolean;
  products: any[];
}

const ProductList: React.FC<IProp> = ({
  title = "Most Sale",
  products,
  isLoading = false,
}) => {
  return (
    <div className="w-full px-4">
      <div className="w-full py-2">
        <h1 className="font-bold text-2xl tracking-wider">{title}</h1>
      </div>

      {/* if loading */}

      {isLoading && <p>Loading..</p>}

      {/* if data  */}
      {!isLoading && products.length > 0 && (
        <div className="flex gap-4 my-2 flex-wrap">
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
      {/* if data array is empty */}

      {!isLoading && products && products.length === 0 && <p>No Data found</p>}
    </div>
  );
};

export default ProductList;
