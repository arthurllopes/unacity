import { Box, Center, CircularProgress, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from '../../hooks/useNavigate'
import { client } from '../../services/contentful'
import Pagination from '../pagination'
import ProductCard from '../productCard'

const ProductCardList = () => {
  const {category} = useNavigate()
  const [itemsByCategory, setItemsByCategory] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [total, setTotal] = React.useState(0)
  const [loading, setLoading] = React.useState(false)

  const limitPerPage = 12
  const skip = page === 1 ? 0 : (page - 1) * limitPerPage
  React.useEffect(() => {
    const getItemsByCategory = async () => {
      setLoading(true)
      const data = await client.getEntries({'metadata.tags.sys.id[in]': `${category}`, 'limit': limitPerPage, 'skip': skip})
      setTotal(data.total)
      const items = data.items
      setItemsByCategory(items)
      setLoading(false)
    }
    getItemsByCategory()
  }, [category, skip])
  return (
    <>
      {loading ? (
        <Center h={100}>
          <CircularProgress isIndeterminate color='brand.purple' />
        </Center>
      ) : (
        itemsByCategory.length > 0 ? (
          <Grid templateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)'}} justifyContent='center' gap={6} minH={200} >
            {itemsByCategory?.map((product: any) => (
                <ProductCard key={product.sys.id} product={product}/>
            ))}
          </Grid>
        ) : (
          <Center layerStyle="description" h={100}>
            Ainda não há comércios cadastradas nesse segmento.
          </Center>
        )
      )}
      {itemsByCategory.length > 0 && <Pagination page={page} setPage={setPage} total={total} limitPerPage={limitPerPage} />}
    </>
  )
}

export default ProductCardList