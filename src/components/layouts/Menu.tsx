import React from "react";

import logo from "../../assets/logo.png";
import { JustifyCartEnum } from "./Nav";

import Cart from "../Cart";

import {
  Stack,
  Text,
  Image,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerHeader,
  DrawerFooter,
  HStack,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import Language from "./Language";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  drawerRef: React.RefObject<HTMLButtonElement>;
}
const NavMenu: React.FC<Props> = ({ isOpen, onOpen, onClose, drawerRef }) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      finalFocusRef={drawerRef}
      placement="left"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton
            variant="outline"
            mt="5px"
            fontSize="20px"
            onClick={onClose}
          />

          <DrawerHeader w="100%" my="25px">
            <Stack spacing="3">
              <Image
                src={logo}
                mb="25px"
                w="125px"
                objectFit="cover"
                alt="ogani"
              />
              <Cart justify={JustifyCartEnum.start} />
              <Language />
            </Stack>
          </DrawerHeader>
          <DrawerBody>
            <NavLinks />
            <SocialLinks />
          </DrawerBody>
          <DrawerFooter display="block">
            <HStack>
              <FaEnvelope />
              <Text> ogani@gmail.com</Text>
            </HStack>
            <Text my="10px">Free Shipping for all Order of $99</Text>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
export default NavMenu;
