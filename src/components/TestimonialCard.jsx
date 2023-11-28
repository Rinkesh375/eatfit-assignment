import React from 'react';
import { GridItem,Flex,Heading,Text,Box,Avatar} from '@chakra-ui/react'

const TestimonialCard = ({text,name,avatar}) => {
  return (
     <GridItem   style={{padding:"1rem",boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",borderRadius:"1rem"}}>
     <Flex style={{justifyContent:"space-around",alignItems:"center"}}>
        <Box >  <Avatar size='xl' name={name} src={avatar} /></Box>
       
        <Heading  size="md">{name}</Heading>
     </Flex>
     <Text textAlign={"center"}>{text}</Text>
     </GridItem>
  );
}

export default TestimonialCard;
