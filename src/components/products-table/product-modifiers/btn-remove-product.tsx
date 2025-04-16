import { deleteProduct } from '@/actions/products/delete-product'
import Button from '@/components/ui/button'
import PopupAlert from '@/components/ui/popup-alert'
import Image from 'next/image'

type Props = {
  selectedProductId:number
}

const BtnRemoveProduct = ({selectedProductId}:Props) => {
  const handleRemove = () => {
    PopupAlert.show({message:"Do you want to remove the product?", async onConfirm() {
      const o = await deleteProduct(selectedProductId)
      console.log(o);
    },})
  }
  return (
    <Button size={"icon"} variant={"default"} onClick={handleRemove}>
    <Image width={16} height={16} src={"icons/delete.svg"} alt={""}></Image>
  </Button>
  )
}

export default BtnRemoveProduct