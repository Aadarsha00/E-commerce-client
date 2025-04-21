import React from "react";
import ProductList from "../product-list";
const products = [
  {
    _id: "1",
    coverImage: "/product/product.webp",
    productName: "Speaker",
    productPrice: 230,
  },
  {
    _id: "2",
    coverImage: "/product/product.webp",
    productName: "Trending Products",
    productPrice: 230,
  },
  {
    _id: "3",
    coverImage: "/product/product.webp",
    productName: "Trending Products",
    productPrice: 230,
  },
];

const SummerSale = () => {
  return (
    <div>
      <ProductList title="Summer Sale" products={products} isLoading={false} />
    </div>
  );
};

export default SummerSale;
