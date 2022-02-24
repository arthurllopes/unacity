import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import CategoryNav from '../components/categoryNav'
import Featuring from '../components/featuring'
import Footer from '../components/footer'
import Header from '../components/header'
import ProductCardList from '../components/ProductCardList'
import { client } from '../services/contentful'

const Home: NextPage = () => {
  React.useEffect(() => {
    const getIt = async () => {
      const conteudo = await client.getEntries({'metadata.tags.sys.id[in]': 'pet'})
      console.log(conteudo.items)
    }
    getIt()
  }, [])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Featuring />
        <CategoryNav />
        <ProductCardList />
        <Footer />
      </main>
    </>
  )
}

export default Home
