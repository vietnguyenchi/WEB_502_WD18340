import { SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Product } from '~/common/Product'
import ProductCard from './ProductCard'
import instance from '~/apis'

function ProductList() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await instance.get('/products')
        setProducts(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <SimpleGrid maxW='7xl' mx='auto' my='120px' columns={4} spacing={10}>
      {products && products.map((product) => <ProductCard maxW='200px' data={product} key={product.id} />)}
    </SimpleGrid>
  )
}

export default ProductList
