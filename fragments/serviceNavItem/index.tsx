import { Tab } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from '../../hooks/useNavigate'
type Props = {
  service: any
}
const ServiceNavItem = ({service}: Props) => {
  const {setFuncao} = useNavigate()
  return (
    <Tab onClick={() => setFuncao(service.fields.titulo.toLowerCase())}>
      {service.fields.titulo}
    </Tab>
  )
}

export default ServiceNavItem