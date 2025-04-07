import { create } from "zustand";
import type { PublicUser } from '@/types/user';
import identifyUser from "@/actions/identify-user";


type UserStore = {
    user: PublicUser | null,
    setUser: (user: PublicUser) => void
    identifyUser: () => Promise<void>
}

const userStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    identifyUser: async () => {
        const user = await identifyUser()
        set({ user })
    }
}))

export default userStore