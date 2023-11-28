import React from 'react';
import { Stack,Heading,Grid} from '@chakra-ui/react'
import Avatar1 from "../Images/Testimonials -image-1.jpg"
import Avatar2 from "../Images/Testimonials -image-2.jpg"
import Avatar3 from "../Images/Testimonials -image-3.jpg"
import Avatar4 from "../Images/Testimonials -image-4.jpg"
import TestimonialCard from './TestimonialCard';

const testimonials_Data = [
    {
        text:"EATFIT has transformed my wellness journey with irresistibly delicious and nutritious meals, making healthy living a delightful priority.",
        avatar:Avatar1,
        name:"Alice Johnson"
    },
    {
        text:"EATFIT has truly revolutionized my connection with food. Its wholesome, flavorful meals strike the perfect balance between health and taste, making every bite a delight.",
        avatar:Avatar2,
        name:"Bob Anderson"
    },
    {
        text:"I'm thankful for EATFIT's role in simplifying and enhancing my healthy lifestyle. The diverse meal options continually excite and motivate my dietary choices.",
        avatar:Avatar3,
        name:"Eva Martinez"
    },
    {
        text:"EATFIT is now an indispensable part of my daily routine. The convenience, paired with delectable and nutritious meals, has truly transformed the game for me.",
        avatar:Avatar4,
        name:"Amita Brown"
    },
]

const Testimonials = () => {
  return (
      <Stack style={{ width: "90%", margin: "3rem auto" }} id="testimonials">
       <Heading size="lg" style={{textAlign:"center"}}>Testimonials</Heading>
       <Grid gridTemplateColumns={{
                sm: "1fr",
                md: "1fr 1fr",
                lg: "repeat(2,1fr)",
                xl: "repeat(2,1fr)"


            }} gap="3" >
       {testimonials_Data.map((ele,index)=><TestimonialCard key={index} {...ele}/>)}

       </Grid>

      </Stack>
  );
}

export default Testimonials;
