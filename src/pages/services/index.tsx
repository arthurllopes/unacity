import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Footer from '../../components/footer'
import FuncoesNav from '../../components/serviceNav'
import Header from '../../components/header'
import ServiceCardList from '../../components/serviceCardList'
import { useNavigate } from '../../hooks/useNavigate'
import { client } from '../../services/contentful'

const ServicesPage = () => {  
  return (
    <>
      <Head>
        <title>Serviços em Unamar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" minH="100vh" maxW="100vw" display="flex" flexDirection="column" alignItems="center">
        <Header />
        <Box flex={1}>
          <Box>Parte inicial</Box>
          <FuncoesNav />
          <ServiceCardList />
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export default ServicesPage