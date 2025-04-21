/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from "@/interface/auth/product.interface";
import ProductTitle from "./product-title";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import QuantityInput from "@/components/ui/quantity-input";
import { useMutation } from "@tanstack/react-query";
import { addToCart } from "@/api/cart";
import toast from "react-hot-toast";
import { useState } from "react";
import { addToWishList } from "@/api/wishlist";

interface IProps {
  product: IProduct;
}

const ProductDetails: React.FC<IProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  //?query mutation for cart
  const { mutate: addToCartMutate, isPending: isCartPending } = useMutation({
    mutationFn: addToCart,
    mutationKey: ["add-to-cart"],
    onSuccess(data: any) {
      toast.success(data?.data?.message ?? "Added to Cart");
    },
    onError(err: Error) {
      toast.error(err?.message ?? "Failed to add to the cart");
    },
  });

  //?query mutation for wishlist
  const { mutate: addToWishListMutate, isPending: isWishlistPending } =
    useMutation({
      mutationFn: addToWishList,
      mutationKey: ["add-to-wishlist"],
      onSuccess(data: any) {
        toast.success(data?.data?.message ?? "Added to wishlist");
      },
      onError(err: Error) {
        toast.error(err?.message ?? "Failed to add to the wishlist");
      },
    });

  if (!product) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <div className="text-lg font-medium">Loading product details...</div>
      </div>
    );
  }
  const addProductToCart = () => {
    addToCartMutate({ productId: product._id, quantity });
  };

  const addProductToWishList = () => {
    addToWishListMutate({ productId: product._id });
  };
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="mb-6">
          <ProductTitle
            name={product.productName}
            rating={product.averageRating ?? 0}
          />
          <p className="text-2xl font-bold text-indigo-600 mt-2">
            रु.{product.productPrice}
          </p>
        </div>

        {/*Quantity*/}
        <div>
          <QuantityInput value={quantity} setValue={setQuantity} />
        </div>

        {/* Buttons add to cart */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={addProductToCart}
            disabled={isCartPending}
            className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
          >
            <FaShoppingCart className="h-4 w-4 mr-2" />
            {isCartPending ? "Adding..." : "Add to Cart"}
          </button>

          {/* Buttons wishlist */}

          <button
            onClick={addProductToWishList}
            disabled={isWishlistPending}
            className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
          >
            <FaHeart className="h-4 w-4 mr-2" />
            {isWishlistPending ? "Adding..." : "Add to Wishlist"}
          </button>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-medium text-bold text-gray-900 mb-3">
            Description
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {product?.productDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
