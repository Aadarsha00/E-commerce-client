import Hero from "@/components/home/hero";
import SummerSale from "@/components/home/productList/summerSale";

import TrendingProduct from "@/components/home/productList/trendingProduct";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrendingProduct />
      <SummerSale />
    </main>
  );
}
