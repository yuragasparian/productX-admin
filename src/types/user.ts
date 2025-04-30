import { Product } from "./product";

export type User = {
  id: number;
  userName: string;
  password: string;
  image: string;
  role: Role;
  products?: Product[];
};

export type PublicUser = Omit<User, "password">;

export type Login = Pick<User, "userName" | "password">;

export enum Role {
  Admin,
  Moderator,
}
