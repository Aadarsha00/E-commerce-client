import SummerSale from "@/components/home/productList/summerSale";

import TrendingProduct from "@/components/home/productList/trendingProduct";
import ScrollWrapper from "@/components/scrool-wrapped-hero";

export default function Home() {
  return (
    <main>
      <ScrollWrapper />
      <div>
        <TrendingProduct />
      </div>

      <SummerSale />
    </main>
  );
}
