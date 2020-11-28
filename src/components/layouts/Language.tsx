import React from "react";

import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";

import flag from "../../assets/language.png";

const Language = () => {
  return (
    <HStack>
      <Menu>
        <MenuButton
          as={Button}
          bg="transparent"
          p="0"
          rightIcon={<ChevronDownIcon />}
          variant="none"
        >
          <Image src={flag} mr="2" display="inline-block" />
          <Text display="inline-block">English</Text>
        </MenuButton>
        <MenuList fontSize="sm">
          <MenuItem>English</MenuItem>
          <MenuItem>Spanish</MenuItem>
        </MenuList>
      </Menu>
      <Divider bg="gray.900" w="1px" h="25px" orientation="vertical" />
      <Button variant="none">
        <FaUser display="inline" />
        <Text ml="1" display="inline" fontSize="sm">
          Login
        </Text>
      </Button>
    </HStack>
  );
};

export default Language;
