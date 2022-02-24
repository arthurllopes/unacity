import { Box, Center, Container, Divider, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Container as="header" p={6} maxW="auto" display="flex" alignItems="center" bg="gray.100" >
        <div className="logo">
          LOGO
        </div>
          <Spacer />
        <Flex as="nav" d="flex" alignItems="center" justifyContent="spaceBetween">
          <Box px='2'>
            Home
          </Box>
          <Box>
          <Center height='20px' bg="gray.400">
            <Divider orientation='vertical'  />
          </Center>
          </Box>
          <Box px='2'>
            Serviços
          </Box>
        </Flex>
    </Container>
  )
}

export default Header