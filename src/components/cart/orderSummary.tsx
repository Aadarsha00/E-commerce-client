import Link from "next/link";
import { useRouter } from "next/navigation";

const OrderSummary = ({ total }: { total: number }) => {
  const router = useRouter();
  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="border-t border-b py-4 mb-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>रु.{total}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>रु.0</span>
          </div>
        </div>
        <div className="flex justify-between font-bold text-lg mb-6">
          <span>Total</span>
          <span>रु.{total}</span>
        </div>
        <button
          onClick={() => {
            router.push("/checkout");
          }}
          className="w-full py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300"
        >
          Proceed to Checkout
        </button>
        <div className="mt-4">
          <Link href="/products">
            <button className="w-full py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
