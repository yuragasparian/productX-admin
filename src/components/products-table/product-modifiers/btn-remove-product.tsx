import Button from '@/components/button'
import Image from 'next/image'

const BtnRemoveProduct = () => {
  return (
    <Button size={"icon"} variant={"default"}>
    <Image width={16} height={16} src={"icons/delete.svg"} alt={""}></Image>
  </Button>
  )
}

export default BtnRemoveProduct