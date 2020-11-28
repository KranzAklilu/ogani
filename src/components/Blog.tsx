import React from "react";

import BrandHeading from "./BrandHeading";
import BlogItems from "./BlogItems";

import blog1Image from "../assets/blog-1.jpg";
import blog2Image from "../assets/blog-2.jpg";
import blog3Image from "../assets/blog-3.jpg";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const Blog = () => {
  const blog1 = {
    heading: "Cooking tips make cooking simple",
    image: blog1Image,
    description:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat ",
    date: "May 4,2019",
    numberOfChat: 5,
  };
  const blog2 = {
    heading: "6 ways to prepare breakfast for 30",
    image: blog2Image,
    description:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat ",
    date: "May 4,2019",
    numberOfChat: 8,
  };
  const blog3 = {
    heading: "Visit the clean farm in the US",
    image: blog3Image,
    description:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat ",
    date: "May 4,2019",
    numberOfChat: 2,
  };

  return (
    <Box>
      <BrandHeading heading="From the Blog" />
      <Grid templateColumns="repeat(auto-fill, minmax(325px, 1fr))" gap="30px">
        <GridItem>
          <BlogItems {...blog1} />
        </GridItem>
        <GridItem>
          <BlogItems {...blog2} />
        </GridItem>
        <GridItem>
          <BlogItems {...blog3} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Blog;
