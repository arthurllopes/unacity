import { Box } from '@chakra-ui/react'
import React from 'react'

const ContactInfo = () => {
  return (
    <Box display='flex' flex={1} h='100%' p={4} flexDirection='column' bg='brand.purple' borderRadius={8} boxShadow='xl'>
        <Box>
            Telefone: (21) 97002-1384
        </Box>
        <Box>
            Email: arthurllopes10@gmail.com
        </Box>
    </Box>
  )
}

export default ContactInfo