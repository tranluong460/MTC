import { ICategory } from "../interface/category";

export const getAllCategory = async () => {
  const response = await fetch(process.env.BACKEND_URL + "/category");

  return await response.json();
};

export const getCategoryBy = async (payload: ICategory) => {
  const response = await fetch(process.env.BACKEND_URL + "/category/get-by", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return await response.json();
};
