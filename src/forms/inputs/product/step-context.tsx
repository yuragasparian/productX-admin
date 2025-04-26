import { createContext, Dispatch, SetStateAction, useState } from "react";
import CancelButton from "./buttons/cancel-button";
import SaveButton from "./buttons/save-button";

const defaultContext: {
  step: 1 | 2;
  setStep: Dispatch<SetStateAction<1 | 2>>;
} = {
  step: 1,
  setStep: () => {
    throw new Error("setStep called outside of StepProvider");
  },
};

type Provider = {
  children: React.JSX.Element;
};

export const StepContext = createContext(defaultContext);

const StepProvider = ({ children }: Provider) => {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
      <div className="flex justify-between gap-2 mt-4">
        <CancelButton />
        <SaveButton />
      </div>
    </StepContext.Provider>
  );
};

export default StepProvider;
