import { Box, Center, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from '../../hooks/useNavigate'
import { client } from '../../services/contentful'
import ProductCard from '../productCard'

const ProductCardList = () => {
  const {category} = useNavigate()
  const [itemsByCategory, setItemsByCategory] = React.useState([])
  React.useEffect(() => {
    const getItemsByCategory = async () => {
      const {items} = await client.getEntries({'metadata.tags.sys.id[in]': `${category}`})
      setItemsByCategory(items)
    }
    getItemsByCategory()
  }, [category])
  return (
    <>
      {itemsByCategory.length > 0 ? (
        <Grid templateColumns='repeat(3, 1fr)' justifyContent='center' pt={4} gap={6} maxW='100%'>
          {itemsByCategory?.map((product: any) => (
              <ProductCard key={product.sys.id} product={product}/>
          ))} 
        </Grid>
      ) :
      <Center layerStyle="description" h={200}>
        Ainda não há comércios cadastradas nesse segmento.
      </Center>
      }
    </>
  )
}

export default ProductCardList