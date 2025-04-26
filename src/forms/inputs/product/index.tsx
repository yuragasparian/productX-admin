import React, { useContext } from "react";
import MainInfo from "./main-info";
import Description from "./description";
import { StepContext } from "./step-context";

const ProductInput = () => {
  const { step } = useContext(StepContext);
  const stepComponents = {
    1: <MainInfo />,
    2: <Description />,
  };

  return stepComponents[step];
};

export default ProductInput;
