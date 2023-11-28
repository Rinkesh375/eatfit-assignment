import React from 'react';
import { Box, Center, Image, Stack, Text,Heading ,Flex} from '@chakra-ui/react'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import footerlogo from "../Images/footer-logo-image.png"

const About = () => {
  return (
    <Stack id="about" style={{background:"rgb(48 91 116)",color:"white",marginTop:"2rem",padding:"1rem"}} spacing={1}>
      <Center >
        <Image src={footerlogo} alt="Eatfit-logo" style={{borderRadius:"1rem"}} />
      </Center>
      <Box style={{width:"85%",margin:"auto",textAlign:"center"}}>
      <Heading >Connect With Us</Heading>
      <Text>
        Welcome to Eatfit – your go-to for delicious, nutritious Indian cuisine. Our dishes are crafted with authentic ingredients, zero trans fat, and a dash of love. At Eatfit, we make healthy eating delightful, where every bite reflects our commitment to your well-being. Join us on the #HealthyMadeHappier journey, where flavor meets nutrition. Embark on a culinary adventure, savoring the goodness of real, wholesome ingredients that nourish your body and soul. Discover the joy of mindful eating at Eatfit, where every dish is a testament to our passion for health and happiness.
      </Text>
      <Center mt="1rem"> <Flex ><BsTwitterX style={{marginRight:"1rem",fontSize:"2rem",color:"white",cursor:"pointer"}} /> <FaFacebook style={{marginRight:"1rem",fontSize:"2rem",color:"white",cursor:"pointer"}} /> <FaSquareInstagram style={{marginRight:"1rem",fontSize:"2rem",color:"white",cursor:"pointer"}} /></Flex></Center>

      </Box>


    </Stack>
  );
}

export default About;
