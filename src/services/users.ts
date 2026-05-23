import { axiosPublic } from "@/lib/axios";

export type UserPayload = {
  name: string;
  email: string;
};

export const createUserInDb = async (data: UserPayload) => {
  const res = await axiosPublic.post("/api/users", data);
  return res.data;
};

