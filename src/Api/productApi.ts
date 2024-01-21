import { IProduct } from "../interfaces/IProduct";
import api from "./api";

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await api.get<IProduct[]>("/product");
  return response.data;
};

export const getProduct = async (id: string): Promise<IProduct> => {
  const response = await api.get<IProduct>(`/product/${id}`);
  return response.data;
}

export const addProduct = async (product: IProduct): Promise<IProduct> => {
  const response = await api.post<IProduct>("/product", product);
  return response.data;
};

export const updateProduct = async (product: IProduct): Promise<IProduct> => {
  const response = await api.put<IProduct>(`/product/${product._id}`, product);
  return response.data;
};