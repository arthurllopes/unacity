import { Box, Center, Container, Divider, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import unaLogo from '../../assets/unaLogo.png'

const Header = () => {
  const mobile = useBreakpointValue({ base: true, md: false })
  return (
    <Container as="header" px={8} maxW="auto" maxH="80px" display="flex" alignItems="center" bg="white" >
        <Link href="/" passHref>
          <Box className="unaLogo" mt={4} px={2} cursor='pointer'>
            <Image src={unaLogo} width={80} height={55} alt="Logo" objectFit='cover'/>
          </Box>
        </Link>
          <Spacer />
        {mobile ? (
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition='all 0.2s'
              borderRadius='md'
              _hover={{ bg: 'gray.400' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </MenuButton>
            <MenuList>
                <Link href="/" passHref>
                  <MenuItem>
                    Comércios
                  </MenuItem>
                </Link>
              <MenuDivider />
                <Link href="/services" passHref>
                  <MenuItem>
                  Serviços
                  </MenuItem>
                </Link>
              <MenuDivider />
                <Link href="/contact" passHref>
                  <MenuItem>
                    Contato
                  </MenuItem>
                </Link>
            </MenuList>
        </Menu>
        ) : (
        <Flex as="nav" d="flex" alignItems="center" justifyContent="spaceBetween">
          <Box px='2'>
            <Link href="/">
              Comércios
            </Link>
          </Box>
          <Box>
            <Center height='20px' bg="gray.400">
              <Divider orientation='vertical'  />
            </Center>
          </Box>
          <Box px='2'>
            <Link href="/services">
              Serviços
            </Link>
          </Box>
          <Box>
            <Center height='20px' bg="gray.400">
              <Divider orientation='vertical'  />
            </Center>
          </Box>
          <Box px='2'>
            <Link href="/contact">
              Contato
            </Link>
          </Box>
        </Flex>)}
    </Container>
  )
}

export default Header