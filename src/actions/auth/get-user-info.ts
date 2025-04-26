import fetchWithAuth from "@/lib/fetch-with-auth";
import { UserInfo } from "@/types/response";
import { redirect } from "next/navigation";

const getUserInfo = async () => {
  const { data } = await fetchWithAuth<UserInfo>(`/auth`);
  if (!data) return redirect("/login");
  return data.item;
};

export default getUserInfo;
