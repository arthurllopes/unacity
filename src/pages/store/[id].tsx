import React from 'react'
import { Box, Flex, Heading, HStack, Text, useBreakpointValue, VStack, Tabs, TabList, TabPanels, Tab, TabPanel, Stack} from '@chakra-ui/react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MobileStorePage from '../../components/mobileStorePage'
import { useRouter } from 'next/router'
import { client } from '../../services/contentful'
import GoogleMap from '../../fragments/googleMap';
import Script from 'next/script';
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/header'
import Footer from '../../components/footer'
import StoreTab from '../../components/storeTab.tsx'
import Gallery from '../../components/gallery'
const StorePage = () => {
  const mobile = useBreakpointValue({ base: true, sm: false, md: false })
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = React.useState<any>()
  React.useEffect(() => {
    const getStore = async () => {
      const entry = await client.getEntry(`${id}`)
      setData(entry.fields)
    }
    if (id) {
      getStore()
    }
  }, [id])
  React.useEffect(() => {
    console.log(data)
    
  }, [data])
  if (mobile) return <MobileStorePage />
  return (
    <VStack minH="100vh" >
      <Header />
      <VStack as="main" spacing='6' w="100%" flex={1} px={{base: '2', md: '4'}}>
        <Stack align='start' p={8} direction={{base: 'column', xl: 'row'}}  borderBottom='1px solid #CBD5E0' >
          <Flex align='center' justify='center' w='100%' pb={4}>
            <Box minW="120px">
              {data?.logo && <Image src={`https:${data?.logo?.fields?.file?.url}`} alt={data.nome} width={160} height={160} objectFit='cover' />}
            </Box>
            <VStack direction='column' align='start' px={4} spacing="0" w='100%'>
              <Heading layerStyle="title">{data?.nome}</Heading>
              <Text fontSize='xl' layerStyle="description">{data?.titulo}</Text>
              <Text layerStyle='text' fontSize={{base: 'sm', md: 'xl'}} w='100%' >{data?.descricao}</Text>            
            </VStack>
          </Flex>
          <Flex w={{base: '100%', xl: '70%'}} justify='center' minH={120} maxH={200} >
            <Tabs w='100%'>
              <StoreTab contato={data?.contato} horario={data?.horario} redes={data?.redes} site={data?.site} ifood={data?.ifood} />
            </Tabs>
          </Flex>
        </Stack>
        {data?.catalogo && 
          <Flex w='100%' justify='center'>
            <Gallery data={data?.catalogo} title="CATÁLOGO"/>
          </Flex>
        }
        <Flex w='100%' justify='center'>
          <Gallery data={data?.galeria} title="GALERIA DE FOTOS" />
        </Flex>
        <Flex>
          LOCALIZAÇAO

        </Flex>

      {/*data && 
        'oi'
      <Script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&language=de`}></Script> 
    */}
      </VStack>
      <Footer />
    </VStack>
  )
}

export default StorePage