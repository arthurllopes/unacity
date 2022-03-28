import React from 'react'
import { Box, Flex, Heading, Text, useBreakpointValue, VStack, Tabs, Stack} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { client } from '../../services/contentful'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Header from '../../components/header'
import Footer from '../../components/footer'
import StoreTab from '../../components/storeTab.tsx'
import DeliveryTag from '../../fragments/deliveryTag'
const StorePage = () => {
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

  const GalleyComponent = dynamic(() => import('../../components/gallery'), { ssr: false })

  return (
    <VStack minH="100vh" >
      <Header />
      <VStack as="main" spacing='6' w="100%" flex={1} px={{base: '2', md: '4'}}>
        <Stack align='start' p={{base: '2', md: '8'}} flexDirection={{base: 'column', lg: 'row'}}  borderBottom='1px solid #CBD5E0' >
          <Flex align='center' justify='center' w='100%' pb={4}>
            <Box minW="120px">
              {data?.logo && <Image src={`https:${data?.logo?.fields?.file?.url}`} alt={data.nome} width={160} height={160} objectFit='cover' />}
            </Box>
            <VStack direction='column' align='start' px={2} spacing="0" w='100%'>
              <Flex direction={{base: 'column', lg: 'row'}} justifyContent='space-between' align='start' w='100%' pr={20}>
                <Heading layerStyle="title">{data?.nome}</Heading>
                <Box w='180px' h='30px'>
                  {data?.delivery && <DeliveryTag />}
                </Box>
              </Flex>
              <Text fontSize='xl' layerStyle="description">{data?.titulo}</Text>
              <Text layerStyle='text' fontSize={{base: 'sm', md: 'xl'}} w='100%' >{data?.descricao}</Text>            
            </VStack>
          </Flex>
          <Flex w={{base: '100%', xl: '70%'}} justify='center' minH={240} maxH={220} >
            <Tabs w='100%'>
              <StoreTab contato={data?.contato} horario={data?.horario} redes={data?.redes} site={data?.site} ifood={data?.ifood} pontoReferencia={data?.pontoReferencia} endereco={data?.endereco} enderecoTexto={data?.enderecoTexto}/>
            </Tabs>
          </Flex>
        </Stack>
        {data?.catalogo && 
          <Flex w='100%' justify='center' px={8}>
            <GalleyComponent data={data?.catalogo} title="CATÁLOGO"/>
          </Flex>
        }
        <Flex w='100%' justify='center' px={8}>
          <GalleyComponent data={data?.galeria} title="GALERIA DE FOTOS" />
        </Flex>
      </VStack>
      <Footer />
    </VStack>
  )
}

export default StorePage