import fetchWithAuth from "@/lib/fetch-with-auth"
import formDataFromObject from "@/lib/form-data-from-object"
import { ProductFormValues } from "@/types/forms"
import { Product } from "@/types/product"
import { MessageResponse } from "@/types/response"

type Props = {
    productData: Partial<Product> | ProductFormValues
}


const addProduct = async ({ productData }: Props):Promise<MessageResponse> => {
    
    const productForm = formDataFromObject(productData)
    if(productData.product_image[0]) {
        productForm.append("image", productData.product_image[0]);
    }
    

    return fetchWithAuth(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/new`, {
        method: "POST",
        body: productForm
    })    
}


export default addProduct