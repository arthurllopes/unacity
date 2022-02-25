import { Search2Icon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'

const searchBox = () => {
  return (
    <Box py={6} display="flex" justifyContent="center">
      <InputGroup w="60%">
        <Input type="text" focusBorderColor='brand.yellow' bg="white" placeholder='Busque pelo que você precisa...' />
        <InputRightElement>
          <Search2Icon color='gray.700' />
        </InputRightElement> 
      </InputGroup>
    </Box>
  )
}

export default searchBox