import { auth } from "../auth";
import { IUser } from "../interface/user";

export const currentUser = async () => {
  const session = await auth();

  if (session?.error) return null;

  return session?.user;
};

export const getUserById = async (_id: string): Promise<IUser> => {
  const response = await fetch(process.env.BACKEND_URL + "/user/" + _id);
  return await response.json();
};
