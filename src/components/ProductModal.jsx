import React from "react";
import { Modal, ModalOverlay,Image, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Text,Heading, Center, Button,ModalFooter,Grid ,Box,GridItem,Flex} from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";

const ProductModal = ({ isOpen, onClose,productDetails }) => {
    const  {name,actual_price,offer_price,type,category,calories,image} = productDetails
  return (



    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
      <ModalContent my="1rem">
          <Center>
            <Heading size="sm">{name}</Heading>
          </Center>
        <ModalCloseButton />
        <ModalBody>
         <Grid gridTemplateColumns="1fr 1fr">
          <GridItem><Image src={image} alt={name}/></GridItem>
          <GridItem>
            <Flex style={{alignItems:"center"}}><FaRegCheckCircle style={{color:"green", margin:"auto 1rem"}} /> <Text mx="1rem"> Veg</Text>
            </Flex>
            <Heading size="xs" m="1rem">Category - {category}</Heading>
            <Heading size="xs" m="1rem">Price <Box as="span" color="blue">₹{offer_price}</Box></Heading>
            
            
            </GridItem>
         </Grid>
        </ModalBody>

     
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;



