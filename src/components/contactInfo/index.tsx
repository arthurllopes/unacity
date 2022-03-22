import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ContactInfo = () => {
  return (
    <VStack spacing={4} alignItems='start' minH='100%' w={{base: '100%', md: 'auto'}} py={4} p={4} bg='brand.purple' borderRadius={8} boxShadow='xl'>
      <Text textAlign='center' layerStyle="title">Contato:</Text>
        <Box>
          <Text layerStyle="text">Telefone:</Text>
          <Text>(21) 97002-1384</Text>
            
        </Box>
        <Box>
          <Text layerStyle="text">Email:</Text>
            arthurllopes10@gmail.com
        </Box>
    </VStack>
  )
}

export default ContactInfo