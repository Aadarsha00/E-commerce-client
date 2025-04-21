/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/axios/api.axios";

//post cart
export const addToCart = async (data: {
  productId: string;
  quantity: number;
}) => {
  try {
    const response = await api.post("/cart/add", data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

//get users cart item
export const getCart = async () => {
  try {
    const response = await api.get(`/cart/user`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || "Failed to fetch cart";
  }
};

//remove one item from cart
export const removeItemFromCart = async (productId: string) => {
  try {
    const response = await api.delete(`/cart/remove/${productId}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || "Failed to remove item from cart";
  }
};

//delete the entire cart
export const deleteCart = async () => {
  try {
    const response = await api.delete("/cart/clear");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || "Failed to delete cart";
  }
};
