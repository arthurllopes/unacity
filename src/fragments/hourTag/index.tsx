import { Alert, Badge, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const HourTag = () => {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <Flex display="flex" alignItems='end'>
      <Box mr={1}>
        <Badge colorScheme={isOpen ? 'green' : 'red'} w={3} h={3} variant='solid' borderRadius={100} border='1px solid gray'></Badge>
      </Box>
      <Text fontSize='sm'>
        {isOpen ? 'Aberto agora' : 'Fechado'}
      </Text>
    </Flex>
  )
}

export default HourTag