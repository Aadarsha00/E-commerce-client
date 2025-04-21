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
