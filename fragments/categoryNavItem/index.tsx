import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'
type Props = {
    category: string
}
const CategoryNavItem = ({category}: Props) => {
  return (
    <Box minW={160} bg="yellow">
        <Text fontSize='md' layerStyle="text">{category}</Text>
    </Box>
  )
}

export default CategoryNavItem