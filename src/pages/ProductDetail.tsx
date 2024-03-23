import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  // Image,
  Stack,
  Text
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import Carousel from 'react-bootstrap/Carousel'
import { Product } from '~/common/Product'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import instance from '~/apis'

function Slider(images: string[] | undefined) {
  return (
    <Carousel data-bs-theme='dark'>
      {images?.map((image) => (
        <Carousel.Item key={image}>
          <img
            style={{ maxHeight: '418px', objectFit: 'cover', border: '1px' }}
            className='d-block w-100'
            src={image}
          />
          {/* <Image w='100%' src={image} alt='' /> */}
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await instance.get(`/products/${id}`)
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    })()
  })

  const images = product?.images

  return (
    <>
      <Box my='60px' maxW='7xl' mx='auto'>
        <Text color='gray.300'>Home/Shop/Product</Text>

        <Grid border='1px' borderColor='gray.300' p='30px' templateColumns='1fr 2fr' gap='30px'>
          <GridItem position='relative'>
            <Badge bg='gray.500' color='white' px={3}>
              New
            </Badge>

            <Text my={3} as='h1'>
              {product?.title}
            </Text>

            <Stack direction={'row'} align={'center'}>
              {/* <Text mb={1} textDecoration='line-through' color='gray.500' fontSize='xl' fontWeight='medium'>
            </Text> */}
              <Text mb={1} fontSize='xl' fontWeight='medium'>
                ${product?.price}
              </Text>
            </Stack>

            <Text fontWeight='medium' color='gray.500'>
              Review: {product?.rating} <StarIcon mt={-1} color='blue.500' />
            </Text>

            <Text>{product?.description}</Text>

            <Text fontSize='xl' color='gray.500' fontWeight='medium'>
              Stock:{product?.stock}
              <Badge ms={2} color='white' bg='blue.500' px={3}>
                {product?.brand}
              </Badge>
            </Text>

            <Text mb={1} fontWeight='medium'>
              Quantity:
            </Text>
            <Grid templateColumns='1fr 1fr' gap={3}>
              <GridItem>
                <Flex border='1px' borderColor='gray.200' p={2} alignItems='center' justifyContent='space-between'>
                  <Button colorScheme='gray'>-</Button>1<Button colorScheme='gray'>+</Button>
                </Flex>
              </GridItem>
              <GridItem>
                <Button fontWeight='bold' width='100%' height='100%' display='flex' alignItems='center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-heart-fill'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314'
                    />
                  </svg>
                  <Text ms={2} mb={0.5}>
                    Favorite
                  </Text>
                </Button>
              </GridItem>
            </Grid>

            <Button mt={5} w='100%' colorScheme='blue'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-cart-fill'
                viewBox='0 0 16 16'
              >
                <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2' />
              </svg>
              <Text ms={2} mb={0}>
                Add to cart
              </Text>
            </Button>
          </GridItem>
          <GridItem>
            {/* <Image w='100%' src='https://cdn.dummyjson.com/product-images/1/thumbnail.jpg' alt='' /> */}
            {Slider(images)}
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export default ProductDetail
