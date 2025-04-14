import Button from '@/components/ui/button'
import Image from 'next/image'

type Props = {
  selectedProductId:number
}

const BtnRemoveProduct = ({selectedProductId}:Props) => {
  return (
    <Button size={"icon"} variant={"default"}>
    <Image width={16} height={16} src={"icons/delete.svg"} alt={""}></Image>
  </Button>
  )
}

export default BtnRemoveProduct