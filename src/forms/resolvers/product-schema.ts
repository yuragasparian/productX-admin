"use client";

import { z } from "zod";
import { ProductCategory } from "@/types/product";

// Constants
export const MIN_NAME_LENGTH = 2;
export const MAX_NAME_LENGTH = 100;

export const MIN_PRICE = 0.01;
export const MAX_PRICE = 1_000_000;

export const MAX_STOCK_QUANTITY = 10_000;

export const MIN_DESCRIPTION_LENGTH = 1;
export const MAX_DESCRIPTION_LENGTH = 500;

// Category Enum
const categoryEnum = z.enum(Object.values(ProductCategory) as [string, ...string[]]).optional();

// Schema
export const productSchema = z.object({
  name: z
    .string()
    .min(MIN_NAME_LENGTH, `Name must be at least ${MIN_NAME_LENGTH} characters`)
    .max(MAX_NAME_LENGTH, `Name must be less than ${MAX_NAME_LENGTH} characters`),

  sku: z
    .number({ invalid_type_error: "SKU must be a number" })
    .int("SKU must be an integer")
    .positive("SKU must be positive"),

  category: categoryEnum,

  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .min(MIN_PRICE, `Price must be greater than ${MIN_PRICE}`)
    .max(MAX_PRICE, "Price is too high"),

  stockQuantity: z
    .number({ invalid_type_error: "Stock Quantity must be a number" })
    .int("Stock must be an integer")
    .nonnegative("Stock cannot be negative")
    .max(MAX_STOCK_QUANTITY, "Stock limit exceeded"),

  description: z
    .string()
    .min(MIN_DESCRIPTION_LENGTH, "Description is required")
    .max(MAX_DESCRIPTION_LENGTH, `Description must be under ${MAX_DESCRIPTION_LENGTH} characters`),
});

export type ProductFormValues = z.infer<typeof productSchema>;
