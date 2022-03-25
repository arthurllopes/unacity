import { Box, Center, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryNavItem from '../../fragments/categoryNavItem'
import { getCategories, setPage } from '../../store/Category'
import { RootState } from '../../store/configureStore'

const CategoryNav = () => {
  const {categories, category} = useSelector((state: RootState) => state.Category)
  const dispatch = useDispatch()
  //abrir aba p/ ver todas as categorias
  const [seeAll, setSeeAll] = React.useState(false)

  React.useEffect(() => {
    //receber todas categorias existentes
    //se ja foi feito uma vez, nao vai fazer o request novamente
    if (!(categories.length > 0)) {
      dispatch(getCategories())
    }
  }, [dispatch, categories])

  React.useEffect(() => {
    //toda vez que mudar categoria, ir p pag 1
    dispatch(setPage(1))
  }, [dispatch, category])
  
  return (
    <Box py={6}>
      <Flex>
        <Text fontSize='2xl' layerStyle="title">Categorias</Text>
        <Spacer />
        <Text fontSize='md' color='blue' cursor="pointer" _hover={{ filter: "brightness(0.4)" }} >Ver todas</Text>
      </Flex>
      <HStack spacing={4} py={4} overflowX="scroll" sx={{
        '&::-webkit-scrollbar': {
          backgroundColor: `gray.100`,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: `gray.300`,
          borderRadius: '20px',
          width: '40px',

        },
      }}>
        <CategoryNavItem key='all' item={{
          id: 'all',
          cor: '#FFFF',
          nome: 'TUDO'
        }} />

        {categories?.map((item: any) => (
          <CategoryNavItem key={item.id} item={item} />
          )
        )}
      </HStack>
    </Box>
  )
}

export default CategoryNav