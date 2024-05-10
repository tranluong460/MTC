export const getAllCategory = async () => {
  const response = await fetch(process.env.BACKEND_URL + "/category");
  return await response.json();
};
