import React, { useState } from 'react';
import { Grid, GridItem, Flex, Text, Button, Box } from '@chakra-ui/react'
import { BsSortDown, BsSortUp } from "react-icons/bs";
import foods from '../db_Data/db';
import Products from './Products';
import { useTheme } from "@chakra-ui/react";
import style from "./style.module.css"

const Menu = () => {
    const theme = useTheme();
    const [category, setCatgory] = useState("")
    const [sortingOrder,setSortingOrder] = useState("");
    const [foodItems,setFoodItems] = useState(foods);

    const handleFilterFoodItem = (e)=>{
        const filterFoodItems = foods.filter(ele=>(ele.category === e.target.value));
        setCatgory(e.target.value);
        setFoodItems(filterFoodItems)
    }

    const handleFoodSortingPrice = (value)=>{
        const sortedFood = [...foodItems];
        sortedFood.sort((a,b)=>value === "asc"?a.offer_price-b.offer_price:b.offer_price-a.offer_price);
        setFoodItems(sortedFood);
        setSortingOrder(value)
    }

    return (
        <>
            <Grid id="menu" w="80%" gridTemplateColumns={{
      sm: "1fr",
      md: "1fr 1fr",
      lg: "3fr 3fr",
     

    }} style={{ alignItems: "center", margin: "auto" }}>
                <GridItem>
                    <Box className={style.filterBtn} my="0.7rem" textAlign={{sm:"center"}}>

                        <select style={{ background: "#1a94da", padding: "0.6rem 0.5rem", borderRadius: "0.5rem", color: "white" }} value={category} onChange={handleFilterFoodItem}>
                            <option style={{ background: "white", color: "black" }} value="">Sort by category food</option>
                            <option style={{ background: "white", color: "black" }} value="Vegan">Vegan</option>
                            <option style={{ background: "white", color: "black" }} value="Pizza">Pizza</option>
                            <option style={{ background: "white", color: "black" }} value="Khichdi">Khichdi</option>
                            <option style={{ background: "white", color: "black" }} value="Gourment">Gourment</option>
                            <option style={{ background: "white", color: "black" }} value="Fruit Pop">Fruit Pop</option>
                            <option style={{ background: "white", color: "black" }} value="Indian Thali">Indian Thali</option>
                            <option style={{ background: "white", color: "black" }} value="Garlic Bread">Garlic Bread</option>

                        </select>
                    </Box>
                </GridItem>
                <GridItem>
                    <Flex style={{ alignItems: "center", justifyContent: "space-around" }}>
                        <Button colorScheme={sortingOrder==="asc"?"red":"twitter"} onClick={()=>handleFoodSortingPrice("asc")}><BsSortUp /> Asc</Button>
                        <Text style={{ fontWeight: "bold" }}>Price Sorting</Text>
                        <Button colorScheme={sortingOrder==="desc"?"red":'twitter'} onClick={()=>handleFoodSortingPrice("desc")}><BsSortDown /> Desc</Button>
                        


                    </Flex>
                </GridItem>
            </Grid>
            <hr />

            <Products foodItems={foodItems}/>

        </>
    );
}

export default Menu;
