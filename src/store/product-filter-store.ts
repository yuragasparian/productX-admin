import { create } from "zustand";

type ProductFilterStore = {
    searchQuery: string
    statusId: string
    setSearchQuery: (query: string) => void
    setStatusId: (statusId: string) => void
    page: number
    setPage: (page: number) => void
}

export const productFilterStore = create<ProductFilterStore>((set) => ({
    searchQuery: "",
    statusId: "",
    setSearchQuery: (query) => {
        set({ searchQuery: query })
    },
    setStatusId: (statusId) => {
        set({ statusId })
    },
    page: 1,
    setPage: (page) => {
        set({ page })
        console.log(page);

    }
}))