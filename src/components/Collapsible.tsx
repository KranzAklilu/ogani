import React from "react";

import {
  Button,
  Divider,
  Collapse,
  List,
  ListItem,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Collapsible = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Button
        onClick={onToggle}
        w="100%"
        py="25px"
        bg="brand"
        leftIcon={<HamburgerIcon />}
        rightIcon={<ChevronDownIcon ml="50px" />}
        color="white"
        variant="none"
        borderRadius="0"
      >
        All departments
      </Button>
      <Collapse startingHeight={0} in={isOpen}>
        <List spacing="3" border="1px" borderColor="gray.200" p="30px">
          <ListItem>Fresh Meat</ListItem>
          <Divider />
          <ListItem>Vegetables </ListItem>
          <Divider />
          <ListItem>Fruit & Nut Gifts</ListItem>
          <Divider />
          <ListItem>Fresh Berries</ListItem>
          <Divider />
          <ListItem>Ocean Foods</ListItem>
          <Divider />
          <ListItem>Butter & Eggs</ListItem>
          <Divider />
          <ListItem>Fastfood </ListItem>
          <Divider />
          <ListItem>Fresh Onion</ListItem>
          <Divider />
          <ListItem>Papayaya & Crisps</ListItem>
          <Divider />
          <ListItem>Oatmeal </ListItem>
          <Divider />
          <ListItem>Fresh Bananas</ListItem>
          <Divider />
        </List>
      </Collapse>
    </Box>
  );
};

export default Collapsible;
