import { Product } from "@/types/product";

const getProducts = async (page:number):Promise<Product[]> => {
    const userProducts = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/products`,
        {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    return userProducts.json()
}

export default getProducts