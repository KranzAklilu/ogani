import React from "react";

import { Box, HStack, Circle } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div>
      <Box my="25px">
        <HStack spacing="3">
          <Circle p="5px" _hover={{ background: "#7fad39", color: "white" }}>
            <FaFacebookF />
          </Circle>
          <Circle p="5px" _hover={{ background: "#7fad39", color: "white" }}>
            <FaInstagram />
          </Circle>
          <Circle p="5px" _hover={{ background: "#7fad39", color: "white" }}>
            <FaTwitter />
          </Circle>
          <Circle p="5px" _hover={{ background: "#7fad39", color: "white" }}>
            <FaPinterest />
          </Circle>
        </HStack>
      </Box>
    </div>
  );
};

export default SocialLinks;
