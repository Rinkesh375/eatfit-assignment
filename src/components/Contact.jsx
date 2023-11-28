import React from 'react';
import { Input,Heading,Stack,Tag,TagLabel,FormControl,Box,Flex,Link,Button,Textarea,useToast } from '@chakra-ui/react'


const Contact = () => {
  const toast = useToast();
  const handleSubmit = (e)=>{
        e.preventDefault()
        toast({ position: "top", title: 'Thank you for reaching out to us', status: 'success', duration: 2000, isClosable: true, })
  }
  return (
    <Box id="contact" width={{lg:"60%",sm:"90%",md:"90%"}} style={{margin:"auto",boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",padding:"1rem",borderRadius:"1rem"}} >
    <Heading textAlign="center">Contact</Heading>
    <form onSubmit={handleSubmit}>
        <Stack>
        <Tag bg="none"><TagLabel>Name:</TagLabel></Tag>
            <FormControl isRequired> <Input type='text'   /></FormControl>

            <Tag bg="none"><TagLabel>Email:</TagLabel></Tag>
            <FormControl isRequired> <Input type='email'   /></FormControl>
            <Tag bg="none"><TagLabel>Message :</TagLabel></Tag>
            <FormControl isRequired><Flex alignItems="center"   style={{ borderRadius: "0.4rem" }}>
            <Textarea
      
        placeholder='Here is a sample placeholder'
        size='sm'
      />
                </Flex></FormControl>

            <Box textAlign="center"  ><Button colorScheme='twitter' type="submit">Create New Account</Button>
            </Box>
        </Stack>


    </form>

</Box>
  );
}

export default Contact;
