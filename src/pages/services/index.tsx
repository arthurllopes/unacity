import { Box } from '@chakra-ui/react'
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
import ProductCardList from '../../components/cardList'

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
  return (
    <>
      <Head>
        <title>Serviços em Unamar</title>
        <meta name="description" content="Veja todos serviços pretados em unamar. Limpeza de piscina, faxineira, cortador de grama, carroceiro, transporte, frete, pedreio, pintor e mais." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" minH="100vh" maxW="100vw" display="flex" flexDirection="column" alignItems="center">
        <Header />
        <Box flex={1} w='90%'>
          <CategoryNav categories={categories}/>
          <ProductCardList data={initialData}/>
        </Box>
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