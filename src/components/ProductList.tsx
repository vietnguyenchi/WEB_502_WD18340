import { SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Product } from '~/common/Product'
import ProductCard from './ProductCard'

function ProductList() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  return (
    <SimpleGrid maxW='8xl' mx='auto' columns={4} spacing={10}>
      {products && products.map((product) => <ProductCard maxW='200px' data={product} key={product.id} />)}
    </SimpleGrid>
  )
}

export default ProductList
