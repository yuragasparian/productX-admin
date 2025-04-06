
import getProducts from "./actions/get-products"

const Home = async () => {
  const products = await getProducts()
  return (
    <p>{JSON.stringify(products)}</p>
  )
  
}

export default Home
