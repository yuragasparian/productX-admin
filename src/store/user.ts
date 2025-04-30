import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PublicUser } from "@/types/user";

type UserStore = {
  user: PublicUser | null;
  token: string | null;
  _hasHydrated: boolean;
  setUser: (user: PublicUser) => void;
  setToken: (token: string) => void;
  setHasHydrated: (state: boolean) => void;
  reset: () => void;
};

const userStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      _hasHydrated: false,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      setHasHydrated: (state) => set({ _hasHydrated: state }),
      reset: () => set({ user: null, token: null }),
    }),
    {
      name: "user-store",
      partialize: ({ user, token }) => ({ user, token }),
      onRehydrateStorage: (state) => () => {
        state?.setHasHydrated(true);
      },
    },
  ),
);

export default userStore;
