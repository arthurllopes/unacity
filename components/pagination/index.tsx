import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, IconButton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ButtonFragment from './buttonFragment'
type Props = {
    page: number,
    total: number,
    setPage: any,
    limitPerPage: number
}
const Pagination = ({page, total, setPage, limitPerPage}: Props) => {
    const siblingsCount = 1;

    function generatePagesArray (from: number, to: number) {
        return (
            [...new Array(to - from)]
            .map((_, index) => (
                from + index + 1
            ))
            .filter(page => page > 0)
        )
    }
    const lastPage = Math.ceil(total / limitPerPage);

    const previousPages = page > 1
        ? generatePagesArray(page - 1 - siblingsCount, page - 1)
    : []

    const nextPages = page < lastPage
        ? generatePagesArray(page, Math.min(page + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction={["column", "row"]}
      my="4"
      justify="space-between"
      align="center"
      spacing="6"
    >
       <Box>
            <strong>{page === 1 ? 1 : (page * limitPerPage) - limitPerPage + 1 }</strong>-<strong>{(page * limitPerPage) < total ? (page * limitPerPage) : total}</strong> de <strong>{total}</strong>
        </Box>
        <Stack direction="row" spacing="2" alignItems='center'>
                {!(page === 1) && <IconButton size="sm" fontSize="xs" width="4" aria-label='Próxima página' icon={<ArrowBackIcon />} colorScheme='purple' variant='outline' onClick={() => setPage((prevState: any) => prevState - 1)} />}
                {page > (1 + siblingsCount) && (
                    <>
                        <ButtonFragment number={1} setPage={setPage} />
                        { page > (2 + siblingsCount) && (
                        <Text color="gray.400" textAlign="center" width="3">...</Text>
                        )}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => (
                    <ButtonFragment key={page} number={page} setPage={setPage}/>
                ))}

                <ButtonFragment number={page} isCurrent/>
        
                {nextPages.length > 0 && nextPages.map(page => (
                    <ButtonFragment key={page} number={page} setPage={setPage} />
                ))}

                {(page + siblingsCount) < lastPage && (
                    <>
                        {( (page + 1 + siblingsCount) > siblingsCount && (page + siblingsCount < lastPage - 1)) && (
                            <Text color="gray.400" textAlign="center" width="3">...</Text>
                        )}
                        <ButtonFragment number={lastPage} setPage={setPage} />
                    </>
                )}
                {!(page === lastPage) && <IconButton size="sm" fontSize="xs" width="4" aria-label='Próxima página' icon={<ArrowForwardIcon />} colorScheme='purple' variant='outline' onClick={() => setPage((prevState: any) => prevState + 1)} />}
        </Stack>
    </Stack>
  )
}

export default Pagination