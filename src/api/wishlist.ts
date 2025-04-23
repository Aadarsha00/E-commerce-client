import api from "@/axios/api.axios";

/* eslint-disable @typescript-eslint/no-explicit-any */

export const addToWishList = async (data: { productId: string }) => {
  try {
    const response = await api.post("/wishlist", data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data;
  }
};

export const getWishList = async () => {
  try {
    const response = await api.get("/wishlist");
    return response.data;
  } catch (error: any) {
    throw error.response?.data;
  }
};

export const removeWishList = async (productId: string) => {
  try {
    const response = await api.delete(`/wishlist/remove/${productId}`);
    return response.data;
  } catch (error: any) {
    throw error.response.data || "Failed to remove product from wishlist";
  }
};

export const deleteWishlist = async () => {
  try {
    const response = await api.delete("/wishlist/");
    return response.data;
  } catch (error: any) {
    console.error("Error removing from wishlist:", error);
    throw error.response.data || "Failed to delete the wishlist.";
  }
};
