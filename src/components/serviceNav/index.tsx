import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import ServiceNavItem from '../../fragments/serviceNavItem'
import { client } from '../../services/contentful'
import ServiceCardList from '../serviceCardList'

const ServiceNav = () => {
    //pegar todas funcoes para nav
    const [funcoes, setFuncoes] = React.useState([])
    React.useEffect(() => {
    const getFuncoes = async () => {
        const {items} = await client.getEntries({
          content_type: 'funcao'
        })
        console.log(items)
        setFuncoes(items)
    }
        getFuncoes()
    }, [])
  return (
    <Box>
      <Tabs variant='enclosed'>
        <TabList>
          {funcoes.map((funcao: any) => ( 
            <ServiceNavItem key={funcao.fields.titulo} service={funcao} />
          ))}
        </TabList>
      </Tabs>
    </Box>
  )
}

export default ServiceNav