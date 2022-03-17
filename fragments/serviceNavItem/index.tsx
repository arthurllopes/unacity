import { Tab } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from '../../hooks/useNavigate'
type Props = {
  service: any
}
const ServiceNavItem = ({service}: Props) => {
  const {setFuncao, funcao} = useNavigate()
  return (
    <Tab borderBottom={funcao === service.fields.titulo.toLowerCase() ? `2px solid ${service?.fields.cor}` : ''}   minW={120} onClick={() => setFuncao(service.fields.titulo.toLowerCase())}>
      {service.fields.titulo}
    </Tab>
  )
}

export default ServiceNavItem