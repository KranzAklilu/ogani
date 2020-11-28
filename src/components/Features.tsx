import React from "react";

import Filter from "./Filter";
import FeaturedItems from "./FeaturedItems";
import BrandHeading from "./BrandHeading";

import { Box } from "@chakra-ui/react";

const Features = () => {
  return (
    <Box my="50px">
      <BrandHeading heading="Featured Product" />
      <Filter />
      <FeaturedItems />
    </Box>
  );
};

export default Features;
