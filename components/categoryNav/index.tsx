import { Box, Center, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import CategoryNavItem from '../../fragments/categoryNavItem'

const CategoryNav = () => {
  
  const categories = ['all', 'beleza', 'horto', 'saude', 'lanches', 'doces', 'pet', 'restaurante']
  const [seeAll, setSeeAll] = React.useState(false)
  return (
    <Box minW="400px">
      <Flex>
        <Text fontSize='2xl' layerStyle="title">Categorias</Text>
        <Spacer />
        <Text fontSize='md' color='blue' cursor="pointer" _hover={{ filter: "brightness(0.4)" }} >Ver todas</Text>
      </Flex>
      <HStack spacing={4} py={4} overflowX="scroll">
        {categories.map((category) => (
          <CategoryNavItem key={category} category={category} />
        ))}
      </HStack>
    </Box>
  )
}

export default CategoryNav