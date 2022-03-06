import React from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

import MobileStorePage from '../../components/mobileStorePage'
const StorePage = () => {
  const mobile = useBreakpointValue({ base: true, sm: false, md: false })
  if (mobile) return <MobileStorePage />
  return (
    <>StorePage
    
    </>
  )
}

export default StorePage