import React from "react";

import { Box, Button, Heading, Text } from "@chakra-ui/react";

import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <Box>
      <Box
        h={[300, 350]}
        my="50px"
        bgImage={`url(${banner})`}
        backgroundSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        p="50px"
      >
        <Text
          as="strong"
          color="brand"
          fontSize={["sm", "md"]}
          mt="20px"
          textTransform="uppercase"
        >
          Fruit Fresh
        </Text>
        <Heading display="block" fontSize={["4xl", "5xl"]}>
          Vegetable 100% Organic
        </Heading>
        <Text display="block" color="gray.500">
          Free Pickup and Delivery Available
        </Text>
        <Button bg="brand" color="white" borderRadius="none" mt="20px">
          SHOP NOW
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
