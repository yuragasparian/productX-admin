"use client";

import userStore from "@/store/user-store";
import { useEffect } from "react";

const DashboardHeader = () => {
  const { user, identifyUser } = userStore();
  useEffect(() => {
    identifyUser();
  }, [identifyUser]);

  return (
    user && (
      <div className="flex justify-between items-center">{user.username}</div>
    )
  );
};

export default DashboardHeader;
