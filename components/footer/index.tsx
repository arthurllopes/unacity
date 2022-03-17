import { Box, Center, Container, Divider, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import unaLogo from '../../assets/unaLogo.png'

const Footer = () => {
  return (
    <Container maxW="auto" >
      <Box p={2} >
        <Flex justifyContent='space-between' alignItems={{base:'start', md: 'center'}} pt={4} borderTop='1px solid #CBD5E0' flexDirection={{base: 'column', md:'row'}}>
          <Flex alignItems='center' pr={2}>
            <Image src={unaLogo} width={70} height={50} alt="Logo" objectFit='cover'/>
            <Text layerStyle='description'>
              &copy; 2022. All rights reserved.
            </Text>
          </Flex>
          <Text layerStyle='description'>
            Orgulhosamente feito pela comunidade para a comunidade.
          </Text>
        </Flex>
      </Box>
    </Container>
  )
}

export default Footer