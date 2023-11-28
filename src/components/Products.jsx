import React from 'react';

import { Grid, GridItem } from '@chakra-ui/react'
import ProductCard from './ProductCard';
import style from "./style.module.css"

const Products = ({ foodItems }) => {
    return (
        <>
            <Grid className={style.productBox} gridTemplateColumns={{
                sm: "1fr 1fr",
                md: "1fr 1fr",
                lg: "repeat(3,1fr)",
                xl: "repeat(4,1fr)"


            }} gap="6" style={{ width: "90%", margin: "auto" }} >
                {foodItems.map(ele => <ProductCard key={ele.id} {...ele} />)}

            </Grid>

        </>
    );
}

export default Products;
