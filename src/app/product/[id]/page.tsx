import ProductDetails from "@/components/product/product-details.tsx";
import React from "react";

interface IProps {
  params: {
    id: string;
  };
}
const Page: React.FC<IProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="w-full lg:max-w-[1440px] lg:mx-auto">
      <ProductDetails id={id} />
    </div>
  );
};

export default Page;
