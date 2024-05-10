import { ICategory } from "../interface/category";

export const getAllCategory = async (): Promise<ICategory[]> => {
  const response = await fetch(process.env.BACKEND_URL + "/category");
  return await response.json();
};
