import { Box, Center, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import CategoryNavItem from '../../fragments/categoryNavItem'
import { client } from '../../services/contentful'

const CategoryNav = () => {
  //abrir aba p/ ver todas as categorias
  const [seeAll, setSeeAll] = React.useState(false)

  //receber todas categorias existentes
  const [categories, setCategories] = React.useState<any[]>([])

  React.useEffect(() => {
    const getCategories = async () => {
      const {items} = await client.getEntries({
        content_type: 'categoria'
      })
      setCategories(items)
    }
    getCategories()
  }, [])
  
  return (
    <Box minW="400px">
      <Flex>
        <Text fontSize='2xl' layerStyle="title">Categorias</Text>
        <Spacer />
        <Text fontSize='md' color='blue' cursor="pointer" _hover={{ filter: "brightness(0.4)" }} >Ver todas</Text>
      </Flex>
      <HStack spacing={4} py={4} overflowX="scroll">
        {categories?.map((category) => (
          <CategoryNavItem key={category.fields.id} category={category} />
          )
        )}
      </HStack>
    </Box>
  )
}

export default CategoryNav