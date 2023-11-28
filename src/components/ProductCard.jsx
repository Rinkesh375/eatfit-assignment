import React,{useState} from 'react';
import {  GridItem , Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button,Flex,HStack,Box} from '@chakra-ui/react'
import ProductModal from './ProductModal';
import { useDisclosure } from '@chakra-ui/react'


const ProductCard = ({name,actual_price,offer_price,type,category,calories,image}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <GridItem style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"1rem"}}>

<Card maxW='sm'>
  <CardBody>
  <Box textAlign={{sm:"center"}}
              position='relative'
              _hover={{ transform: 'scale(1.1)' }}
              transition='transform 0.3s ease-in-out'
            >
              <Image
                src={image}
                alt={name}
                borderRadius='lg'
              />
            </Box>
    <Stack mt='6' spacing='3'>
      <Heading size='sm'>{name.length>22?`${name.substring(0,30)}...`:name}</Heading>
       <Flex style={{justifyContent:"space-between"}} >
       <Heading size="sm">Offer Price ₹ {offer_price}</Heading>
       <Text  style={{textDecoration:"line-through"}}>₹ {actual_price}</Text>

       </Flex>
       <Heading  size="sm">Calories - <Box as="span" color="red">{calories}</Box></Heading>
    </Stack>
  </CardBody>

  <CardFooter>
   <HStack>
      <Button variant='solid' colorScheme='blue' onClick={onOpen}>
       Add To Cart
      </Button></HStack>
    
  
  </CardFooter>
</Card>

    </GridItem>

    <ProductModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} productDetails={{name,actual_price,offer_price,type,category,calories,image}} />
    </>
    
    
  );
}

export default ProductCard;
