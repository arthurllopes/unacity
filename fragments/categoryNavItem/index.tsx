import { Box, Center, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useNavigate } from '../../hooks/useNavigate'
import { client } from '../../services/contentful'
type Props = {
    category: any,
}
const CategoryNavItem = ({category}: Props) => {
    const {setCategory} = useNavigate()
    const [URL, setURL] = React.useState('')

    React.useEffect(() => {
        
    }, [category])
  return (
    <Box minW={160} bg={category?.fields.cor} cursor="pointer" display="flex" p={4} borderRadius={8} onClick={() => setCategory(category.fields.id)} >
        <Image src={`https:${category.fields.icon.fields.file.url}`} alt="Category" width={24} height={24} />
        <Text fontSize='md' layerStyle="text"  ml={3}>{category.fields.nome}</Text>
    </Box>
  )
}

export default CategoryNavItem