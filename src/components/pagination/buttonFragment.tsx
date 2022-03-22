import { Button } from '@chakra-ui/react'
import React from 'react'

const ButtonFragment = ({number, setPage, isCurrent}: any) => {
    if (isCurrent) {
        return (
            <Button
              size="sm"
              fontSize="xs"
              width="4"
              colorScheme="pink"
              disabled
              _disabled={{
                bg: 'purple',
                cursor: 'default',
              }}
            >
              {number}
            </Button>
        )
    }
        
    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="brand.purple"
            _hover={{
                bg: 'gray.500'
            }}
            onClick={() => setPage(number) }
        >
            {number}
        </Button>
    )
}

export default ButtonFragment