import formDataFromObject from "@/lib/form-data-from-object"
import { ProductFormValues } from "@/types/forms"

type Props = {
    productData: ProductFormValues
}

const addProduct = async ({ productData }: Props) => {
    
    const productForm = formDataFromObject(productData)
    productForm.append("image", productData.product_image[0]);

    console.log(productForm);
    
    
    const productAdded = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/products/new`,
        {
            method: "POST",
            credentials: "include",
            body: productForm
        }
    );    
    return productAdded.json()
}


export default addProduct