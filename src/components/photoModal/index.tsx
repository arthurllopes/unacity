import React from 'react'
import { Box, Button, Flex, Heading, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

type Props = {
    image: any, 
    setImage: ({}) => void, 
    data: any,
    isOpen: boolean,
    onClose: () => void,
}
const PhotoModal = ({image, setImage, data, isOpen, onClose}: Props) => {

    function handleNextImage (index: any) {
        if (data.length > index + 1) {
            setImage({...data[index + 1], index: index + 1})
        }
    }
    function handlePrevImage (index: any) {
        if (index + 1 > 1) {
            setImage({...data[index - 1], index: index - 1})
        }
    }
  return (
    <>
        <Modal onClose={onClose} size='lg' isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={4}>
              <Flex align='center'>
                    <Image
                        objectFit='contain'
                        src={`https:${image?.fields?.file?.url}`}
                        alt={image?.fields?.description}
                        width= {600}
                        height= {600}
                    />
                    <Button onClick={() => handlePrevImage(image?.index)} bg='rgba(0, 0, 0, 0.6)' w='60px' zIndex={500} left='5' position='absolute' h='40%' fontSize= '2rem' color='white' _hover={{ opacity: "1" }}>
                            <ArrowBackIcon />
                    </Button>
                    <Button onClick={() => handleNextImage(image?.index)} bg='rgba(0, 0, 0, 0.6)' w='60px' zIndex={500} right='5' position='absolute' h='40%' fontSize= '2rem' color='white' _hover={{ opacity: "1" }}>
                            <ArrowForwardIcon />
                    </Button>
              </Flex>
          </ModalBody>
        </ModalContent>
        </Modal>
    </>
  )
}

export default PhotoModal