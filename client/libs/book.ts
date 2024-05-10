export const getAllBook = async () => {
  let url = `${process.env.BACKEND_URL}/book`;

  const response = await fetch(url, { cache: "no-cache" });

  return await response.json();
};
