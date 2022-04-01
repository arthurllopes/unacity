import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { client } from '../../services/contentful'
import CategoryNav from '../../components/categoryNav'
import { GetStaticProps } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, setCategory, setInitialData, setProducts, setType } from '../../store/Category'
import { RootState } from '../../store/configureStore'
import CardList from '../../components/cardList'
import Image from 'next/image'

type Props = {
  initialData: any,
  categories: any
}
const ServicesPage = ({ initialData, categories }: Props) => {
  const {type, loading} = useSelector((state: RootState) => state.Category)
  const {category, products, page} = useSelector((state: RootState) => (state as any).Category[type])

  const dispatch = useDispatch()
  //setar configs apos pegar a data inicial
  React.useEffect(() => {
    dispatch(setType('servico'))
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
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)')
  return (
    <>
      <Head>
        <title>Serviços em Unamar</title>
        <meta name="description" content="Veja todos serviços pretados em unamar. Limpeza de piscina, faxineira, cortador de grama, carroceiro, transporte, frete, pedreio, pintor e mais." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" minH="100vh" maxW="100vw" display="flex" flexDirection="column" alignItems="center">
        <Header />
        <Flex flex={1} direction='column' justify='center' align='center' w='90%' pb={4}>
          <Flex w='90%' justifyContent='space-between' align='center'>
            <Box maxW={680} w='100%'>
              <Heading pt={4} isTruncated>Profissional de ...</Heading>
              <Text py={2}>Encontre diarista, carroceiro, limpador de piscina, jardineiro, pintor, mecânico, pedreiro, transporte particular e muito mais em Unamar!!!</Text>
            </Box>
            { isLargerThan640 && 
            <Box pt={8} ml={20} w='40%'>
              <Image src='https://www.ddoliservicos.com.br/wp-content/uploads/2021/02/ilustracao-profissionais-de-limpeza.png' width={350} height={350} alt={'Imagem de trabalhador'} objectFit='contain' />
            </Box>}
          </Flex>
          <Box mt='-30px' w='100%' pt={4}>
            <CategoryNav categories={categories}/>
            <CardList data={initialData}/>
          </Box>
        </Flex>
        <Footer />
      </Box>
    </>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const initialData = await client.getEntries({content_type: 'servico', 'limit': 12})
  const {items} = await client.getEntries({
    content_type: 'funcao'
  })
  const categories = items.map((item: any) => (item.fields))
  return {
    props: { initialData, categories },
  }
}

export default ServicesPage