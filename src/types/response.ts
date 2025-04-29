import { Product } from "./product";
import { PublicUser } from "./user";

export type Response<T> = {
  meta: {
    status: number;
    error: {
      code: number;
      message: string;
    } | null;
  };
  data: T | null;
};

export type UserInfo = {
  item: PublicUser;
};

export type Token = {
  item: string;
};

export type ProductsGet = {
  items: Product[];
  pages: number;
};

export type ProductItem = {
  item: Product;
};

export type ProductDelete = {
  item: number;
};
