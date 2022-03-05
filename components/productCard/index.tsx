import { GridItem } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

type Props = {
  product: any
}
const ProductCard = ({product}: Props) => {
  console.log(product)
  return (
    <GridItem bg="white" borderRadius={8}>
      {product.fields.nome}
      {product.fields.descricao}
      {product.fields.logo && <Image src={`https:${product?.fields?.logo?.fields?.file?.url}`} alt={product.fields.nome} width={100} height={100} />
      }
    </GridItem>
    
  )
}

export default ProductCard