import { ProductCategory, ProductStatus } from "@/types/product";
import { Role } from "@/types/user";

export const roleOptions = [
  { label: "Admin", value: Role.Admin },
  { label: "Moderator", value: Role.Moderator },
];

export const statusOptions = [
  { label: "In Stock", value: ProductStatus.IN_STOCK },
  { label: "Low Stock", value: ProductStatus.LOW_STOCK },
  { label: "Out of Stock", value: ProductStatus.OUT_OF_STOCK },
  { label: "All Stock", value: ProductStatus.ALL_STOCK },
];

export const categoryOptions = Object.entries(ProductCategory).map(([key, label]) => ({
  label,
  value: key,
}));
