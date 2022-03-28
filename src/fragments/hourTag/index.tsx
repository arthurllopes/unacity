import { Alert, Badge, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const HourTag = () => {
  return (
    <Flex display="flex" alignItems='center'>
      <Box mr={1}>
        <Badge colorScheme='green' w={3} h={3} variant='solid' borderRadius={100} border='1px solid gray'></Badge>
      </Box>
      <Text fontSize='1rem'>
        Aberto agora
      </Text>
    </Flex>
  )
}

export default HourTag