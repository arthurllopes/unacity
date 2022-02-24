import { Box, Center, Container } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Container maxW="auto" bg="gray.50" pt="auto" style={{position: 'absolute',
      bottom: '0',
      left: '0',
      }}>
      <Box>
        <Center pt={4}>
          Orgulhosamente feito pela comunidade para a comunidade. 
        </Center>
        <div>
          Entre em contato
        </div>
        <div>
          Entre em contato
        </div>
      </Box>
    </Container>
  )
}

export default Footer