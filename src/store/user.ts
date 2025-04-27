import { create } from "zustand";
import type { PublicUser } from "@/types/user";

type UserStore = {
  user: PublicUser | null;
  token: string | null;
  setUser: (user: PublicUser) => void;
  setToken: (token: string) => void;
};

const userStore = create<UserStore>((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
}));

export default userStore;
