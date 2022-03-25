import { Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'

const ButtonFragment = ({number, setPage, isCurrent}: any) => {
    const dispatch = useDispatch()
    if (isCurrent) {
        return (
            <Button
              size="sm"
              fontSize="xs"
              width="4"
              colorScheme="teal"
              disabled
              _disabled={{
                bg: 'teal',
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
            bg="teal.100"
            _hover={{
                bg: 'teal.500'
            }}
            onClick={() => dispatch(setPage(number)) }
        >
            {number}
        </Button>
    )
}

export default ButtonFragment