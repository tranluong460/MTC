import { ILoginAccount } from "../interface/auth";

export const LoginAccount = async (data: ILoginAccount) => {
  const response = await fetch(process.env.BACKEND_URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};
