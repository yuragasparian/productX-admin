import { redirect } from "next/navigation";
import userStore from "@/store/user";

const checkTokenExistence = () => {
  const token = localStorage.getItem("token");
  const setToken = userStore.getState().setToken;
  if (token) {
    setToken(token);
  } else {
    redirect("/login");
  }
};

export default checkTokenExistence;
