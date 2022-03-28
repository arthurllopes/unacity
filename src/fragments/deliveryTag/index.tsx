import { Badge, Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import delivery from '../../assets/delivery.png'

const DeliveryTag = () => {
  return (
      <Badge variant='solid' fontSize='.8rem' colorScheme='green' w='100%' h='100%' textAlign='center' display='flex' alignItems='center' justifyContent='center'>
        FAZEMOS ENTREGA
      </Badge>
  )
}

export default DeliveryTag