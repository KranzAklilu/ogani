import React from "react";

import { HStack, Circle, VStack, Text } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const Contact = () => {
  return (
    <HStack>
      <Circle mr="10px" size="50px" bg="gray.100" color="brand">
        <PhoneIcon />
      </Circle>
      <VStack align="left">
        <Text as="strong">+65 11.188.888</Text>
        <Text as="sub">support 24/7 time</Text>
      </VStack>
    </HStack>
  );
};

export default Contact;
