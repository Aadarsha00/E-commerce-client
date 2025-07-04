import api from "@/axios/api.axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllProducts = async () => {
  try {
    const response = await api.get("/product");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getProductsById = async (id: string) => {
  console.log(id);
  try {
    const response = await api.get(`/product/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getTrendingProduct = async () => {
  try {
    const response = await api.get("/product/trending");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getSummerSale = async () => {
  try {
    const response = await api.get("/product/summersale");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
