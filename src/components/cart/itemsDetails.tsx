/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Trash } from "lucide-react";

const ItemsDetails = ({ items, onRemoveItem, onClearCart }: any) => {
  return (
    <div className="w-full lg:w-2/3">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Cart Items ({items.length})</h2>
          <button
            onClick={onClearCart}
            className="text-red-500 text-sm flex items-center hover:text-red-600"
          >
            <Trash className="mr-1 w-3 h-3" />
            Clear Cart
          </button>
        </div>

        <div className="hidden md:grid grid-cols-12 gap-4 mb-4 font-medium text-gray-600 pb-2 border-b">
          <div className="col-span-6">Product</div>
          <div className="col-span-2 text-center">Price</div>
          <div className="col-span-2 text-center">Quantity</div>
          <div className="col-span-2 text-center">Subtotal</div>
        </div>

        {items.map((item: any) => (
          <div
            key={item.product._id}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b last:border-0 items-center"
          >
            <div className="col-span-1 md:col-span-6">
              <div className="flex items-center">
                <div className="w-20 h-20 flex-shrink-0 mr-4 bg-gray-100 rounded-md overflow-hidden">
                  <Image
                    height={80}
                    width={80}
                    src={
                      item.product.coverImage
                        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${item.product.coverImage}`
                        : "/public/product/product.webp"
                    }
                    alt={item.product.productName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">
                    {item.product.productName}
                  </h3>
                  <button
                    onClick={() => onRemoveItem(item.product._id)}
                    className="text-red-500 text-sm flex items-center mt-2 hover:text-red-600"
                  >
                    <Trash className="mr-1 w-3 h-3" />
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 text-center">
              ₹{Number(item.product.productPrice).toFixed(2)}
            </div>

            <div className="col-span-1 md:col-span-2 flex justify-center">
              <span className="text-gray-700">{item.quantity}</span>
            </div>

            <div className="col-span-1 md:col-span-2 text-center font-medium">
              ₹{(item.product.productPrice * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsDetails;
