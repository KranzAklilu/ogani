import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import BannerImages from "./BannerImages";

import ProductsCarousel from "./ProductsCarousel";

const Products = () => {
  const one = "Latest Products";
  const two = "Top Rated Products";
  const three = "Review Products";
  return (
    <Box my="75px">
      <BannerImages />
      <Grid templateColumns="repeat(auto-fill, minmax(325px, 1fr))" gap="30px">
        <GridItem>
          <ProductsCarousel header={one} />
        </GridItem>
        <GridItem>
          <ProductsCarousel header={two} />
        </GridItem>
        <GridItem>
          <ProductsCarousel header={three} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Products;
