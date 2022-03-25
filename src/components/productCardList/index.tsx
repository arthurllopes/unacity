import { Box, Center, CircularProgress, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from '../../hooks/useNavigate'
import { client } from '../../services/contentful'
import { getProducts } from '../../store/Category'
import { RootState } from '../../store/configureStore'
import Pagination from '../pagination'
import ProductCard from '../productCard'
type Props = {
  data: any
}
const ProductCardList = ({data}: Props) => {
  const {category, loading, products, page} = useSelector((state: RootState) => state.Category)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getProducts())
  }, [category, page, dispatch])
  
  return (
    <>
      {loading ? (
        <Center h={100}>
          <CircularProgress isIndeterminate color='brand.purple' />
        </Center>
      ) : (
        (products?.length > 0 ) ? (
          <Grid templateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)'}} justifyContent='center' gap={6} minH={200} >
            {products.map((product: any) => (
                <ProductCard key={product.sys.id} product={product}/>
            ))}
          </Grid>
        ) : (
          <Center layerStyle="description" h={100}>
            Ainda não há comércios cadastradas nesse segmento.
          </Center>
        )
      )}
      {(products.length > 0) && <Pagination />}
    </>
  )
}

export default ProductCardList