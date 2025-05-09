"use client";

const calculateRowsPerPage = () => {
  if (typeof window === "undefined") {
    return 0; // Return a default value or handle SSR case
  }
  const windowPadding = 32;
  const windowHeight = window.innerHeight;
  const headerHeight = 48;
  const tableHeaderHeight = 44;
  const tableRowHeight = 88;
  const footerHeight = 42;

  // Available space for table rows
  const usableHeight =
    windowHeight - windowPadding - headerHeight - tableHeaderHeight - footerHeight;

  const rows = Math.floor(usableHeight / tableRowHeight);

  return Math.max(rows, 3); // Make sure at least 3 rows are shown
};

export default calculateRowsPerPage;
