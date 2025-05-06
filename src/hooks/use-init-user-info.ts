import getUserInfo from "@/actions/auth/get-user-info";
import { useEffect } from "react";
import userStore from "@/store/user";

const useInitiUserInfo = () => {
  const user = userStore((state) => state.user);
  const setUser = userStore.getState().setUser;

  useEffect(() => {
    const getUser = async () => {
      const userInfo = await getUserInfo();
      setUser(userInfo);
    };
    getUser();
  }, [setUser]);

  return user;
};

export default useInitiUserInfo;
