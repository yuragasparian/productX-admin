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

export type ProductsGet = {
  items: Product[];
  pages: number;
};
