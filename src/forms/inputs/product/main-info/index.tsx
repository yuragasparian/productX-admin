import React from "react";
import Picture from "./picture";
import Details from "./details";

const MainInfo = () => {
  return (
    <div className="flex justify-between gap-4">
      <Picture />
      <Details />
    </div>
  );
};

export default MainInfo;
