import { Box, TabPanel, Tabs } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from '../../hooks/useNavigate'
import { client } from '../../services/contentful'

const ServiceCardList = () => {
const {funcao} = useNavigate()
  const [servicosByCategory, setServicosByCategory] = React.useState([])

  React.useEffect(() => {
    const getServicosByFuncao = async () => {
      const {items} = await client.getEntries({'metadata.tags.sys.id[in]': `${funcao}`})
      setServicosByCategory(items)
    }
    getServicosByFuncao()
  }, [funcao])
  return (
    <Box>
        {servicosByCategory.map((servico: any) => (
            servico.fields.nome
        ))}
    </Box>
  )
}

export default ServiceCardList