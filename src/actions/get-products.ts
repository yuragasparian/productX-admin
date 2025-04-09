import { ReqReturnType } from "@/types/product";

const getProducts = async (page:number):Promise<ReqReturnType> => {
    const userProducts = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/products?page=${page}`,
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