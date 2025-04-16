import fetchWithAuth from "@/lib/fetch-with-auth"

export const deleteProduct = async (productId:number) => {
    return fetchWithAuth(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/delete/${productId}`, {
        method: "DELETE",
    })
}