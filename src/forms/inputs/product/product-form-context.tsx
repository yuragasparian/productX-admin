import { ProductFormFields } from "@/types/product";
import { createContext, Dispatch, SetStateAction, useState, ReactNode, useContext } from "react";
import { UseFormReturn } from "react-hook-form";

interface ProductFormContextType {
  step: 1 | 2;
  setStep: Dispatch<SetStateAction<1 | 2>>;
  formMethods: UseFormReturn<ProductFormFields>;
  imageUrl?: string;
}
export const ProductFormContext = createContext<ProductFormContextType | null>(null);

interface ProviderProps {
  children: ReactNode;
  formMethods: UseFormReturn<ProductFormFields>;
  imageUrl?: string;
}
const ProductFormProvider = ({ children, formMethods, imageUrl }: ProviderProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  return (
    <ProductFormContext.Provider value={{ step, setStep, formMethods, imageUrl }}>
      {children}
    </ProductFormContext.Provider>
  );
};
export default ProductFormProvider;

export const useProductFormContext = () => {
  const context = useContext(ProductFormContext);
  if (!context) {
    throw new Error("useProductFormContext must be used inside a ProductFormProvider");
  }
  return context;
};
