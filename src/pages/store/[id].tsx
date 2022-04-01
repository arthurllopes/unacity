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
    <VStack minH="100vh" >
      <Header />
      <VStack as="main" spacing='8' w="100%" flex={1} px={{base: '2', md: '4'}}>
        <Stack align={{base: 'end', lg: 'start'}} p={{base: '2', md: '8'}} w='100%' flexDirection={{base: 'column', lg: 'row'}} justify='space-between' borderBottom='1px solid #CBD5E0' >
          <VStack >
            <Flex align='start' w='100%' >
              <Box minW="120px">
                {data?.fields?.logo && <Image src={`https:${data?.fields?.logo?.fields?.file?.url}`} alt={data?.fields.nome} width={160} height={160} objectFit='cover' />}
              </Box>
              <Flex align='start' px={2} w='100%' justify='space-between' direction='column'>
                <Box>
                  <Heading layerStyle="title" isTruncated>{data?.fields?.nome}</Heading>
                  <Text fontSize='xl' layerStyle="description">{data?.fields?.titulo}</Text>
                </Box>
                <Box w='180px' h='30px' pr={8} mb={6}>
                  {isOpen && <HourTag />}
                  {data?.fields?.delivery && <DeliveryTag />}
                </Box>
              </Flex>
            </Flex>
            <Text layerStyle='text' fontSize={{base: 'sm', md: 'xl'}} w='100%' >{data?.fields?.descricao}</Text>          
          </VStack>
          <Flex w='100%' minH={240} maxH={220} pl={4}>
            <Tabs w='100%'>
              <StoreTab contato={data?.fields?.contato} horario={data?.fields?.horario} redes={data?.fields?.redes} site={data?.fields?.site} ifood={data?.fields?.ifood} pontoReferencia={data?.fields?.pontoReferencia} endereco={data?.fields?.endereco} enderecoTexto={data?.fields?.enderecoTexto}/>
            </Tabs>
          </Flex>
        </Stack>
        {data?.fields?.catalogo && 
          <Flex w='100%' justify='center' direction={{base: 'column', xl: 'row'}} px={8}  >
            <Box w='100%' pr={4}>
              <Gallery data={data?.fields?.catalogo} title="CATÁLOGO"/>
            </Box>
            <Box w={{base: '100%', xl: '40%'}} py={4}>
              <Publicity />
            </Box>
          </Flex>
        }
        {data?.fields?.galeria && 
        <Flex w='100%' justify='center' direction={{base: 'column', xl: 'row'}} px={8}>
          <Box w='100%' pr={4}>
            <Gallery data={data?.fields?.galeria} title="GALERIA DE FOTOS" />
            </Box>
            <Box w={{base: '100%', xl: '40%'}} py={4}>
              <Publicity />
            </Box>
        </Flex>}
        {relatedStores?.length > 0 && 
        <>
          <VStack borderTop='1px solid #CBD5E0' w='90%'>
            <Heading layerStyle="title" as='h2' size='md' pt={4} isTruncated>RELACIONADOS</Heading>
            <Grid w='100%' templateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)'}} justifyContent='center' p={6} gap={6} mt='-20px' >
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