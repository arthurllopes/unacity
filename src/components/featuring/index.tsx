import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import feiraBanner from '../../assets/banner_feira.jpg'


const Featuring = () => {
  return (
    <>
      <Image priority src={feiraBanner} width={1200} height={400} alt='Banner' layout="responsive" objectFit='contain' />
    </>
  )
}

export default Featuring