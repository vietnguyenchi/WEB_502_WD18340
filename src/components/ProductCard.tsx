'use client'

import { Box, Center, useColorModeValue, Heading, Text, Stack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Product } from '~/common/Product'

export default function ProductCard({ data }: Product | any) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${data.thumbnail})`,
            filter: 'blur(15px)',
            zIndex: -1
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)'
            }
          }}
        >
          <Link to={`/shop/${data.id}`}>
            <Image rounded={'lg'} height={230} width={282} objectFit={'cover'} src={data.thumbnail} alt={data.title} />
          </Link>
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {data.brand}
          </Text>
          <Link to={`/shop/${data.id}`}>
            <Heading fontSize={'xl'} color='blue.400' fontFamily={'body'} fontWeight={500}>
              {data.title}
            </Heading>
          </Link>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={600} fontSize={'xl'}>
              ${data.price.toFixed(2)}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              ${(data.price - (data.price - data.price * data.discountPercentage)).toFixed(2)}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}
