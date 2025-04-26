import { Product } from "@/types/product";

const formDataFromObject = (data: Product) => {
  const formData = new FormData();
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      formData.append(key, String(data[key as keyof Product]));
    }
  }
  return formData;
};

export default formDataFromObject;
