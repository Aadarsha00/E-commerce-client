/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IProduct {
  _id: string;
  productName: string;
  coverImage: {
    path: string;
  };
  images: string[];
  averageRating: number;
  createdBy?: any;
  productPrice: string;
  productDescription?: string;
}
