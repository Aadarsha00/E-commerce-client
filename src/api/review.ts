/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/axios/api.axios";

export const review = async (data: {
  rating: number;
  review: string;
  productId: string;
}) => {
  const response = await api.post("/review/", data);
  return response?.data;
};

export const getReview = async (productId: string) => {
  try {
    const response = await api.get(`/review/${productId}`);
    return response?.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
