import fetchWithAuth from "@/lib/fetch-with-auth"
import formDataFromObject from "@/lib/form-data-from-object"
import getDirtyValues from "@/lib/get-form-dirty-values"
import { MessageResponse } from "@/types/response";



const editProduct = async (dirtyFields: any, allFields: any, productId: number): Promise<MessageResponse> => {

    const dirtyValues = getDirtyValues(
        dirtyFields,
        allFields
    );

    const productForm = formDataFromObject(dirtyValues)

    if (dirtyValues.product_image) {
        productForm.append("image", dirtyValues.product_image[0]);
    }


    return fetchWithAuth(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/edit/${productId}`, {
        method: "PATCH",
        body: productForm
    })
}


export default editProduct