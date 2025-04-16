import { create } from "zustand";
import type { PublicUser } from '@/types/user';
import getUserInfo from "@/actions/get-user-info";


type UserStore = {
    user: PublicUser | null,
    setUser: (user: PublicUser) => void
    getUserData: () => Promise<void>
    // token: string | null
    // setToken: (token: string) => void
}

const userStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    getUserData: async () => {
        const user = await getUserInfo()
        set({ user })
    },
    // token: null,
    // setToken: (token) => set({ token })
}))

export default userStore