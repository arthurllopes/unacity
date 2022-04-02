import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import { logEvent } from 'firebase/analytics'
import type { GetStaticProps, NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryNav from '../components/categoryNav'
import Featuring from '../components/featuring'
import Footer from '../components/footer'
import Header from '../components/header'
import ProductCardList from '../components/cardList'
import Publicity from '../components/publicity'
import SearchBox from '../fragments/searchBox'
import { client } from '../services/contentful'
import { getProducts, setCategory, setInitialData, setProducts, setType } from '../store/Category'
import { RootState } from '../store/configureStore'
import Script from 'next/script'

type Props = {
  initialData: any,
  categories: any
}
const Home = ({initialData, categories}: Props) => {
  const {type, loading} = useSelector((state: RootState) => state.Category)
  const {category, products, page} = useSelector((state: RootState) => (state as any).Category[type])

  const dispatch = useDispatch()
  //setar configs apos pegar a data inicial
  React.useEffect(() => {
    dispatch(setType('barberin'))
    dispatch(setCategory('all'))
    dispatch(getProducts())
  }, [dispatch])

  React.useEffect(() => {
    dispatch(getProducts())
  }, [dispatch, category, page])

  React.useEffect(() => {
    dispatch(setProducts({items: initialData.items, total: initialData.total}))
    dispatch(setInitialData(initialData))
  }, [dispatch, initialData])

  /*React.useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) { }
    }
}, []);*/

  return (
    <>
      <Head>
        <title>Comércios em Unamar</title>
        <meta name="description" content="Fique por dentro de todos os comércios e serviços prestados em Unamar. Encontre lanchonete, restaurante, sobremesas, salão de beleza, clínica, petshop, esporte. Veja seus horários de funcionamento, endereço, cardápio, se faz entrega. E muito mais" />
        <link rel="icon" href="/favicon.ico" />
        {/*<script id="Adsense-id" data-ad-client="ca-pub-6157944097638212" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6157944097638212"
        crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
        //style={{display: 'inline-block', width: '100%', height:'90px'}}
        data-ad-client="ca-pub-6157944097638212"
        data-ad-slot="1234567890"></ins>*/}
      </Head>
      
      <Box as="main" minH="100vh" w='100vw' display="flex" flexDirection="column" alignItems="center">
        <Header />
        <Flex flex="1" pt={4} flexDirection={{base: 'column', md:'row'}} h='fit-content' w="90%" alignItems="center" justifyContent='space-between'>
          <Box w='100%' pb={4}>
            <Featuring />
            {/*<SearchBox />*/}
          </Box >
          <Box w='320px' h={{base: '90px', md:'300px'}} pl={{base: '0px', md:'10px'}}>
            <Publicity />
          </Box >
        </Flex>
        <Box w='90%'>
          <CategoryNav categories={categories}  />
          <ProductCardList data={initialData}/>
        </Box>
        <Footer />
      </Box>

      
    </>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const initialData = await client.getEntries({content_type: 'barberin', 'limit': 12})
  const {items} = await client.getEntries({
    content_type: 'categoria'
  })
  const categories = items.map((item: any) => (item.fields))
  return {
    props: { initialData, categories },
  }
}

export default Home
