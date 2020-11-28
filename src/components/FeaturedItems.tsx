import React from "react";

import f1 from "../assets/feature-1.jpg";
import f2 from "../assets/feature-2.jpg";
import f3 from "../assets/feature-3.jpg";
import f4 from "../assets/feature-4.jpg";
import f5 from "../assets/feature-5.jpg";
import f6 from "../assets/feature-6.jpg";
import f7 from "../assets/feature-7.jpg";
import f8 from "../assets/feature-8.jpg";

import { Text, Image, Grid, GridItem } from "@chakra-ui/react";

const data = {
  name: "Crab Pool Security",
  price: "$30.00",
};
const arr = [f1, f2, f3, f4, f5, f6, f7, f8];

const FeaturedItems = () => {
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      textAlign="center"
      gap="30px"
      my="30px"
    >
      {arr.map((img) => (
        <GridItem maxW="350px" mx="auto">
          <Image mb="15px" w="100%" src={img} />
          <Text>{data.name}</Text>
          <Text as="strong">{data.price}</Text>
        </GridItem>
      ))}
    </Grid>
  );
};

export default FeaturedItems;
