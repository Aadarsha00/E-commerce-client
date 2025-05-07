"use client";
import { useRef } from "react";
import Hero from "@/components/home/hero";
import TrendingProduct from "@/components/home/productList/trendingProduct";

const ScrollWrapper = () => {
  const trendingRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    trendingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero onClickShopNow={handleClick} />
      <div ref={trendingRef}>
        <TrendingProduct />
      </div>
    </>
  );
};

export default ScrollWrapper;
