import React from "react";

import { Box, Text, HStack, Divider } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import Language from "./Language";

const NavTop = () => {
  return (
    <Box bg="gray.100" color="gray.700" fontSize="sm">
      <HStack h="40px" px=" 30px" justify="space-between" align="center">
        <HStack>
          <FaEnvelope />
          <Text> ogani@gmail.com</Text>
          <Divider bg="gray.900" w="1px" h="25px" orientation="vertical" />
          <Text>Free Shipping for all Order of $99</Text>
        </HStack>
        <HStack>
          <SocialLinks />
          <Divider bg="gray.900" w="1px" h="25px" orientation="vertical" />
          <Language />
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavTop;
