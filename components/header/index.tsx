import { Box, Center, Container, Divider, Flex, Spacer } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import unaLogo from '../../assets/unaLogo.png'

const Header = () => {
  return (
    <Container as="header" px={2} maxW="auto" maxH="80px" display="flex" alignItems="center" bg="white" >
        <Box className="unaLogo" mt={4} px={2}>
          <Image src={unaLogo} width={100} height={65} alt="Logo" objectFit='cover'/>
        </Box>
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