import React from "react";

import { Box, HStack, Text } from "@chakra-ui/react";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

import { JustifyCartEnum } from "./layouts/Nav";

interface Props {
  justify: JustifyCartEnum;
}

const Cart: React.FC<Props> = ({ justify }) => {
  return (
    <Box>
      <HStack mb={{ sm: "10px" }} spacing="5" justify={justify}>
        <HStack spacing="2">
          <FaHeart />
          <FaShoppingBag />
        </HStack>
        <Text color="gray.800" fontSize="md">
          item: <Text as="em">$150.00</Text>
        </Text>
      </HStack>
    </Box>
  );
};

export default Cart;
