import React, { useRef } from "react";

import {
  Box,
  Image,
  IconButton,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

import Menu from "./Menu";
import Cart from "../Cart";
import NavLinks from "./NavLinks";
import NavTop from "./NavTop";

import logo from "../../assets/logo.png";

export enum JustifyCartEnum {
  start = "start",
  center = "center",
}
const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const drawerRef = useRef<HTMLButtonElement>(null);

  const menuProps = {
    isOpen,
    onOpen,
    onClose,
    drawerRef,
  };

  return (
    <>
      <Box d={{ base: "none", md: "block" }}>
        <NavTop />
      </Box>
      <Box p="10px 25px" w="100%">
        <HStack justify="space-between" align="center">
          <Image src={logo} alt="Ogani" />
          <IconButton
            ref={drawerRef}
            onClick={onOpen}
            aria-label="Hamburger Menu"
            variant="outline"
            fontSize="25px"
            icon={<HamburgerIcon />}
            d={{ md: "none" }}
          />
          <Box d={{ base: "none", md: "block" }}>
            <NavLinks />
          </Box>
          <Box d={{ base: "none", md: "block" }}>
            <Cart justify={JustifyCartEnum.start} />
          </Box>
        </HStack>
      </Box>
      <Menu key={1} {...menuProps} />
      <Box d={{ md: "none" }}>
        <Cart justify={JustifyCartEnum.center} />
      </Box>
    </>
  );
};

export default Nav;
