"use client";

import DashboardFooter from "@/components/dashboard/dashboard-footer";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen gap-4 p-4">
      <DashboardHeader />
      {children}
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
