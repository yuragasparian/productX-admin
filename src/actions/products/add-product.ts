import { ProductFormValues } from "@/types/forms"

type Props = {
    productData:ProductFormValues
}

const addProduct = async ({productData}:Props) => {
    const productAdded = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/products/new`,
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData)
        }
    );
    return productAdded.json()
}


export default addProduct