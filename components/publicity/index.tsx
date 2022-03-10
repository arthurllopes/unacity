import { Box, Center } from '@chakra-ui/react'
import React from 'react'

const Publicity = () => {
  return (
    <Box bg="white" display='flex' flexDirection='column' alignItems='center' justifyContent='center' borderRadius={8} h="360px" boxShadow='md'>
      <Center p={2}>
        ANUNCIE AQUI
      </Center>
      <Center layerStyle="description">
        Entre em contato para saber mais.
      </Center>

    </Box>
  )
}

export default Publicity