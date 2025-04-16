import fetchWithAuth from "@/lib/fetch-with-auth";
import { PublicUser } from "@/types/user";

const getUserInfo = async (): Promise<PublicUser> => {
  return fetchWithAuth<PublicUser>(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/me`);
};

export default getUserInfo;
