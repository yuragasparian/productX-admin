import React from "react";
import Button from "../ui/button";
import getCSV from "@/actions/products/get-csv";

const DownloadCSVButton = () => {
  const handleDownload = async () => {
    const blob = await getCSV();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "products.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button size={"sm"} variant={"secondary"} onClick={handleDownload}>
      CSV
    </Button>
  );
};

export default DownloadCSVButton;
