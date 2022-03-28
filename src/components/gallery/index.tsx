import { Box, Button, chakra, Flex, Heading, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Img } from '@chakra-ui/react'
import Image from 'next/image'
import PhotoModal from '../photoModal'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

type Props = {
    data: any,
    title: string
}
const Gallery = ({data, title}: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [image, setImage] = React.useState<any>({})
    const [position, setPosition] = React.useState(0)
    const [windowWidth, setWindowWidth] = React.useState(0)

    const fullwidth = data?.length * 220

    //Deal with resize
    React.useEffect(() => {
        function handleResize() {
            // Set window width/height to state
            setWindowWidth(window.innerWidth)
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    function handleClick(direction: string){
        if(direction === 'forward'){
            let x = position - Math.round(windowWidth / 6);
            if (!(windowWidth > fullwidth)){ 
                setPosition(x);
            }
            if (((windowWidth - fullwidth) > x) && (!(windowWidth > fullwidth))) { 
                x = (windowWidth - fullwidth) - 240;
                setPosition(x);
            }
        } else {
            let x = position + Math.round(windowWidth / 6);
            if (x > 0) {
            x = 0;
            }
            setPosition(x);
        }
    }
    function handleSelectImage (index: any) {
        onOpen()
        setImage({...data[index], index})
    }
    const Imagem = chakra(Image, {
        baseStyle: { maxH: 120, maxW: 120 },
        shouldForwardProp: (prop) =>
          [
            "width",
            "height",
            "src",
            "borderRadius",
            "alt",
            "boxShadow",
            "quality",
            "placeholder",
            "blurDataURL",
            "backgroundColor",
            "loader ",
          ].includes(prop),
    });
  return (
      <>  
        <Flex direction='column' w='100%' justify='center' boxShadow='xl' bg='whiteAlpha.700' borderRadius={8} align='start'>
            <Heading as='h2' size='md' px={8} pt={4}>{title}</Heading>
            <Flex w='100%'  justify='center' align='center' py={2} px={8} my={2}>
                <HStack spacing='8' w='100%' overflowX='hidden' >
                    {data?.map((item: any, index: any) => (
                        <Box key={item.sys.id} minW={200} ml={`${position}px`} rounded='md' onClick={() => handleSelectImage(index)} transition='all ease .5s'  cursor='pointer' boxShadow='lg' >
                            <Imagem
                                objectFit='cover'
                                src={`https:${item?.fields.file?.url}`}
                                alt={item.fields.description}
                                width= {200}
                                height= {220}
                            />
                        </Box>
                    ))}
                </HStack>
                    {!(windowWidth > fullwidth) && 
                    <>
                        <Button onClick={() => handleClick('preview')} bg='rgba(0, 0, 0, 0.6)' w='60px' zIndex={500} left='5' position='absolute' h='15%' fontSize= '2rem' color='white' _hover={{ opacity: "1" }}>
                            <ArrowBackIcon />
                        </Button>
                        <Button onClick={() => handleClick('forward')} bg='rgba(0, 0, 0, 0.6)' w='60px' zIndex={500} right='5' position='absolute' h='15%' fontSize= '2rem' color='white' _hover={{ opacity: "1" }}>
                            <ArrowForwardIcon />
                        </Button>
                    </> 
                    }   
            </Flex>
        </Flex>
        <PhotoModal image={image} setImage={setImage} data={data} onClose={onClose} isOpen={isOpen} />
      </>
  )
}

export default Gallery