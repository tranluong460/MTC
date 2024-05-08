import { auth } from "../auth";

export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};

export const getUserById = async (_id: string) => {
  const response = await fetch(process.env.BACKEND_URL + "/user/" + _id);

  return await response.json();
};
