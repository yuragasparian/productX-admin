"use client";
import calculateRowsPerPage from "@/lib/calc-rows-per-page";
import { useState, useEffect } from "react";

export function useRowsPerPage() {
  const [rowsPerPage, setRowsPerPage] = useState(calculateRowsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setRowsPerPage(calculateRowsPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return rowsPerPage;
}
