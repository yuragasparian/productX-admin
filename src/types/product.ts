import { User } from "./user";

export type Product = {
  id: number;
  createdAt?: string;
  name: string;
  sku: number;
  description: string;
  price: number;
  stockQuantity: number;
  image: string;
  category: ProductCategory;
  creator?: User;
  history?: ProductHistory[];
};

export type ProductHistory = {
  id: number;
  productId: number;
  changeDescription: string;
  changedAt: string;
  product?: Product;
};

export type ProductFormFields = Pick<
  Product,
  "name" | "sku" | "category" | "price" | "stockQuantity" | "description"
> & {
  image: FileList | null;
};

export enum ProductCategory {
  Electronics = "Electronics",
  Clothing = "Clothing",
  HomeAppliances = "Home Appliances",
  Books = "Books",
  Beauty = "Beauty",
  Sports = "Sports",
  Food = "Food",
  Furniture = "Furniture",
  Toys = "Toys",
  Automotive = "Automotive",
}

export type ProductCategoryWithNone = ProductCategory | "";

export enum ProductStatus {
  IN_STOCK = "in_stock",
  LOW_STOCK = "low_stock",
  OUT_OF_STOCK = "out_of_stock",
  ALL_STOCK = "",
}
