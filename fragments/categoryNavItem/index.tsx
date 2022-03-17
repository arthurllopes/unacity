import { Box, Center, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useNavigate } from '../../hooks/useNavigate'
import { client } from '../../services/contentful'
type Props = {
    item: any,
}
const CategoryNavItem = ({item}: Props) => {
  const {setCategory, category} = useNavigate()
  console.log(item)
  return (
    <Flex alignItems='center' minW={{base: 140, md: 160}} borderColor={item?.fields.cor} bg={item.fields.id === category ? item?.fields.cor : 'gray.100'} borderWidth={2} boxShadow={item.fields.id === category ? 'lg' : 'sm' }  cursor="pointer" display="flex" p={[3, 4]} borderRadius={8} onClick={() => setCategory(item.fields.id)} >
        <Image src={`https:${item.fields.icon.fields.file.url}`} alt="Category" width={24} height={24} objectFit='contain' />
        <Text fontSize={['sm']} layerStyle="text" textAlign='center' ml={2}>{item.fields.nome}</Text>
    </Flex>
  )
}

export default CategoryNavItem