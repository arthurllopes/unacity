import { Box, Center, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useNavigate } from '../../hooks/useNavigate'
import { client } from '../../services/contentful'
type Props = {
    category: any,
    url: any
}
const CategoryNavItem = ({category, url}: Props) => {
    const {setCategory} = useNavigate()
    const [URL, setURL] = React.useState('')

    React.useEffect(() => {
        
    }, [category])
    console.log(category)
  return (
    <Box minW={160} bg={category?.fields.cor} cursor="pointer" onClick={() => setCategory(category.fields.id)} >
        {/*<Image src={url} alt="Category" width={24} height={24} />*/}
        <Text fontSize='md' layerStyle="text">{category.fields.nome}</Text>
    </Box>
  )
}

export default CategoryNavItem