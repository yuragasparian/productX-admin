"use client";

import { z } from "zod";
import { ProductCategory } from "@/types/product";

const categoryEnum = z.enum(Object.values(ProductCategory) as [string, ...string[]]).optional();

const MAX_STOCK_QAUNTITY = 10_000;

export const productSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),

  sku: z
    .number({ invalid_type_error: "SKU must be a number" })
    .int("SKU must be an integer")
    .positive("SKU must be positive"),

  category: categoryEnum,

  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .min(0.01, "Price must be greater than 0")
    .max(1_000_000, "Price is too high"),

  stockQuantity: z
    .number({ invalid_type_error: "Stock Quantity must be a number" })
    .int("Stock must be an integer")
    .nonnegative("Stock cannot be negative")
    .max(MAX_STOCK_QAUNTITY, "Stock limit exceeded"),

  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description must be under 500 characters"),
});

export type ProductFormValues = z.infer<typeof productSchema>;
