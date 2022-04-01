import React from 'react'
import { Box, Flex, Heading, Text, useBreakpointValue, VStack, Tabs, Stack, Grid} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { client } from '../../services/contentful'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Header from '../../components/header'
import Footer from '../../components/footer'
import StoreTab from '../../components/storeTab'
import Gallery from '../../components/gallery'

import DeliveryTag from '../../fragments/deliveryTag'
import { useTime } from '../../hooks/useTime'
import HourTag from '../../fragments/hourTag'
import Publicity from '../../components/publicity'
import ProductCard from '../../components/productCard'
const StorePage = () => {
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = React.useState<any>()
  const [relatedStores, setRelatedStores] = React.useState<any>()

  const isOpen = useTime(data?.fields.horario)

  React.useEffect(() => {
    const getStore = async () => {
      const entry = await client.getEntry(`${id}`)
      setData(entry)
    }
    if (id) {
      getStore()
    }
  }, [id])
  React.useEffect(() => {
    const getRelated = async () => {
      const related = await client.getEntries({content_type: 'barberin', 'sys.id[ne]': `${data.sys.id}`, 'limit': 4, 'fields.related[in]': `${data?.fields.related}`})
      setRelatedStores(related.items)
    }
    if (data) {
      getRelated()
    }
  }, [data])
  return (
    <VStack minH="100vh" w='100vw' >
      <Header />
      <VStack as="main" spacing='8' w="100%" flex={1} px={{base: '2', md: '4'}}>
        <Stack align='start' p={{base: '0', md: '2'}} flexDirection={{base: 'column', lg: 'row'}} justify='space-between' w='100%' borderBottom='1px solid #CBD5E0' >
          <VStack>
            <Flex align='center' w='100%' >
              <Box minW="80px">
                {data?.fields?.logo && <Image src={`https:${data?.fields?.logo?.fields?.file?.url}`} alt={data?.fields.nome} width={160} height={160} objectFit='contain' />}
              </Box>
              <Flex align='start' px={2} maxW='100%' justify='space-between' direction='column'>
                <Box>
                  <Heading layerStyle="title" fontSize={{base: 'xl', md: '2xl'}}>{data?.fields?.nome}</Heading>
                  <Text fontSize={{base: 'md', md: 'xl'}} layerStyle="description">{data?.fields?.titulo}</Text>
                </Box>
                <Box w='180px' h='30px' pr={8} mb={6}>
                  {isOpen && <HourTag />}
                  {data?.fields?.delivery && <DeliveryTag />}
                </Box>
              </Flex>
            </Flex>
            <Text layerStyle='text' fontSize={{base: 'sm', md: 'xl'}} w='100%' >{data?.fields?.descricao}</Text>          
          </VStack>
          <Flex minH={250} maxH={220} w='100%' >
            <Tabs colorScheme='teal' size='md' w={{base: '300px', md: '50%'}} isFitted>
              <StoreTab contato={data?.fields?.contato} horario={data?.fields?.horario} redes={data?.fields?.redes} site={data?.fields?.site} ifood={data?.fields?.ifood} pontoReferencia={data?.fields?.pontoReferencia} endereco={data?.fields?.endereco} enderecoTexto={data?.fields?.enderecoTexto}/>
            </Tabs>
          </Flex>
        </Stack>
        {data?.fields?.catalogo && <Gallery data={data?.fields?.catalogo} title="CATÁLOGO"/>}
        {data?.fields?.galeria && <Gallery data={data?.fields?.galeria} title="GALERIA DE FOTOS" />}
        {relatedStores?.length > 0 && 
        <>
          <VStack borderTop='1px solid #CBD5E0' w='90%'>
            <Heading layerStyle="title" as='h2' size='md' pt={4} isTruncated>RELACIONADOS</Heading>
            <Grid w='100%' templateColumns={{base: '1fr', md: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)'}} justifyContent='center' p={6} gap={6} mt='-20px' >
              {relatedStores?.map((item: any) => (
                <ProductCard key={item.sys.id} product={item}/>
              ))}
            </Grid>
          </VStack>
        </>}
      </VStack>
      <Footer />
    </VStack>
  )
}

export default StorePage