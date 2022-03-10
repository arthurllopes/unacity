import { Badge, Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import delivery from '../../assets/delivery.png'

const DeliveryTag = () => {
  return (
      <Badge variant='subtle' colorScheme='green' >
        FAZEMOS ENTREGA
      </Badge>
  )
}

export default DeliveryTag