import { Center, CircularProgress, Grid } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/configureStore'
import Pagination from '../pagination'
import ProductCard from '../productCard'
import ServiceCard from '../serviceCard'
type Props = {
  data: any
}
const CardList = ({data}: any) => {
  const {type, loading} = useSelector((state: RootState) => state.Category)
  const {products} = useSelector((state: RootState) => (state as any).Category[type])
  
  const prods = products || data
  return (
    <>
      {loading ? (
        <Center h={100}>
          <CircularProgress isIndeterminate color='brand.purple' />
        </Center>
      ) : (
        (prods?.length > 0 ) ? (
          <Grid templateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)'}} justifyContent='center' gap={6} minH={200} >
            {prods.map((item: any) => (
                type === 'servico' ? (
                  <ServiceCard key={item.sys.id} item={item}/>
                ) : (
                  <ProductCard key={item.sys.id} product={item}/>
                ) 
                
            ))}
          </Grid>
        ) : (
          <Center layerStyle="description" h={100}>
            Ainda não há nada cadastrado nesse segmento.
          </Center>
        )
      )}
      {(prods.length > 0) && <Pagination />}
    </>
  )
}

export default CardList