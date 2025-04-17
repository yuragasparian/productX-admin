"use client";

import Dashboard from "@/components/dashboard";
import React, { useEffect, useState } from "react";
import ProductsTable from "./../components/products-table/index";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
    } else {
      setChecked(true);
    }
  }, [router]);

  if (!checked) return null;

  return (
    <Dashboard>
      <ProductsTable />
    </Dashboard>
  );
};

export default Home;
