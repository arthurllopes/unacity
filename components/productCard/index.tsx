import { GridItem } from '@chakra-ui/react'
import React from 'react'

type Props = {
  product: any
}
const ProductCard = ({product}: Props) => {
  return (
    <GridItem>
      {product.fields.nome}
      {product.fields.descricao}
      
    </GridItem>
    
  )
}

export default ProductCard