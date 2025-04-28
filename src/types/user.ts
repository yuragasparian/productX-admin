import { Product } from "./product";

export type User = {
  id: number;
  userName: string;
  password: string;
  image: string;
  products?: Product[];
};

export type PublicUser = Omit<User, "password">;

export type Login = Pick<User, "userName" | "password">;
