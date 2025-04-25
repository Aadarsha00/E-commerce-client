import api from "@/axios/api.axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const placeOrder = async () => {
  try {
    const response = await api.post("/order");
    return response.data;
  } catch (error: any) {
    throw error?.response?.message;
  }
};
