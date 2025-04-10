
type Props = {
  productDescription: string
}
const ProductInfoDescription = ({productDescription}:Props) => {
  return (
    <p className="h-47 scrollbar-hide text-left overflow-y-scroll">{productDescription}</p>
  )
}

export default ProductInfoDescription