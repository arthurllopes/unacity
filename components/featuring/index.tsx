import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import feiraBanner from '../../assets/banner_feira.jpg'


const Featuring = () => {
  return (
    <>
      <Image src={feiraBanner} width={800} height={160} alt='Banner' layout="responsive" objectFit='cover' />
    </>
  )
}

export default Featuring