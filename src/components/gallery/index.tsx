import { Box, Button, Flex, Heading, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Img } from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
    data: any,
    title: string
}
const Gallery = ({data, title}: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [image, setImage] = React.useState<any>({})
    function handleSelectImage (index: any) {
        onOpen()
        setImage({...data[index], index})
    }
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
        <Flex direction='column' w='100%' justify='center' align='start' px={4}>
            <Heading as='h3' size='lg' p={4}>{title}</Heading>
            <Flex w='100%' bg='gray.600' justify='center' borderRadius={4} p={4}>
                <HStack spacing='6' w='80%'  overflowX='hidden' >
                    {data?.map((item: any, index: any) => (
                        <Box key={item.sys.id} onClick={() => handleSelectImage(index)}  cursor='pointer'>
                            <Image
                                objectFit='cover'
                                src={`https:${item?.fields.file?.url}`}
                                alt={item.fields.description}
                                width= {200}
                                height= {220}
                            />
                        </Box>
                    ))}
                </HStack>
            </Flex>
        </Flex>
        <Modal onClose={onClose} size='lg' isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={4}>
            <Image
                objectFit='contain'
                src={`https:${image?.fields?.file?.url}`}
                alt={image?.fields?.description}
                width= {800}
                height= {800}
            />
            <Button onClick={() => handlePrevImage(image?.index)}>prev</Button>
            <Button onClick={() => handleNextImage(image?.index)}>prox</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      </>
  )
}

export default Gallery