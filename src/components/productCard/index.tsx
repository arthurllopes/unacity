import { Badge, Box, Button, Center, Flex, GridItem, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import DeliveryTag from '../../fragments/deliveryTag'
import HourTag from '../../fragments/hourTag'
import { useTime } from '../../hooks/useTime'

type Props = {
  product: any
}
const ProductCard = ({product}: Props) => {
  const router = useRouter()
  const DynamicTimeTagComponent = dynamic(() => import('../../fragments/hourTag'),
  { ssr: false })
  const isOpen = useTime(product?.fields?.horario)

  return (
    <GridItem bg="white" borderRadius={8} boxShadow='xl' cursor='pointer' p={2} position='relative' onClick={() => router.push(`/store/${product.sys.id}`)}>
      <Flex alignItems='start' >
        <Box minW='60px'>
          {product.fields.logo && <Image src={`https:${product?.fields?.logo?.fields?.file?.url}`} alt={product.fields.nome} width={80} height={70} objectFit='cover' />}
        </Box>
        <Flex flexDirection='column' alignItems='start' ml={2}>
          <Text>{product.fields.nome}</Text>
          <Text layerStyle='description' pb={1}>{product.fields.titulo}</Text>
          {isOpen && <DynamicTimeTagComponent />}
          {product.fields.delivery &&
          <Box>
            <DeliveryTag />
          </Box> 
          }
        </Flex>
      </Flex>
      <Center pt={4} pb={2}>
          <Button w='70%' variant='solid' colorScheme='teal' color='white' >Saiba mais</Button>
      </Center>
    </GridItem>
    
  )
}

export default ProductCard