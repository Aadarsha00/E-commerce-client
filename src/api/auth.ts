import api from "@/axios/api.axios";
import { ILogin, ISignup } from "@/interface/auth/auth.interface";

export const login = async (data: ILogin) => {
  const response = await api.post("/user/login", data);
  console.log(response);
  return response.data;
};

export const signUP = async (data: ISignup) => {
  const response = await api.post("/user/", data);
  console.log(response);
  return response;
};
