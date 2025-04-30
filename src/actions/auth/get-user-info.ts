import fetchWithAuth from "@/lib/fetch-with-auth";
import userStore from "@/store/user";
import { UserInfo } from "@/types/response";
import { redirect } from "next/navigation";

const getUserInfo = async () => {
  const { data } = await fetchWithAuth<UserInfo>(`/auth`);
  if (!data) {
    //in case when user manually edited his token in local storage
    const resetUser = userStore.getState().reset;
    resetUser();
    redirect("/login");
  }
  return data.item;
};

export default getUserInfo;
