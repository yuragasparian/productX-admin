import { cookies } from "next/headers";


const getProducts = async () => {
    const userProducts = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/products`,
        {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Cookie: cookies().toString()
            },
            cache: "force-cache"
        }
    );

    return userProducts.json()
}

export default getProducts