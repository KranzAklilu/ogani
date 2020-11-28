import React from "react";

import Collapsible from "./Collapsible";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import ProductsShowCase from "./ProductsShowCase";
import Contact from "./Contact";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

const Hero = () => {
  const visibleSlides = useBreakpointValue({ base: 2, md: 3, lg: 4 });

  return (
    <>
      <Grid mt="20px" templateColumns="repeat(4, 1fr)" gap="30px">
        <GridItem colSpan={{ base: 4, md: 1 }}>
          <Collapsible />
        </GridItem>
        <GridItem colSpan={{ base: 4, sm: 2, md: 2 }}>
          <SearchBar placeholder="What do you need?" buttonText="Search" />
        </GridItem>
        <GridItem
          colSpan={{ base: 4, sm: 2, md: 1 }}
          justifySelf={{ sm: "right" }}
        >
          <Contact />
        </GridItem>
        <GridItem colStart={{ base: 1, md: 2 }} colEnd={5}>
          <Banner />
        </GridItem>
      </Grid>
      <ProductsShowCase visibleSlides={visibleSlides} />
    </>
  );
};

export default Hero;
