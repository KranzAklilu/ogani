import React from "react";

import { Button, List, ListItem, Divider } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const NavLinks = () => {
  return (
    <List
      spacing="2"
      d={{ sm: "block", md: "flex" }}
      direction="row"
      justifyContent="space-evenly"
      alignItems="flex-end"
    >
      <ListItem px={{ sm: "0", md: "20px" }}>
        <Button p="0" color="black.700" variant="link">
          Home
        </Button>
      </ListItem>
      <Divider d={{ md: "none" }} h="1px" bg="gray.500" />
      <ListItem px={{ sm: "0", md: "20px" }}>
        <Button p="0" color="black.700" variant="link">
          Shop
        </Button>
      </ListItem>
      <Divider d={{ md: "none" }} h="1px" bg="gray.500" />
      <ListItem px={{ sm: "0", md: "20px" }}>
        <Button p="0" color="black.700" variant="link">
          Pages
          <ChevronRightIcon d={{ md: "none" }} />
        </Button>
      </ListItem>
      <Divider d={{ md: "none" }} h="1px" bg="gray.500" />
      <ListItem px={{ sm: "0", md: "20px" }}>
        <Button p="0" color="black.700" variant="link">
          Blog
        </Button>
      </ListItem>
      <Divider d={{ md: "none" }} h="1px" bg="gray.500" />
      <ListItem px={{ sm: "0", md: "20px" }}>
        <Button p="0" color="black.700" variant="link">
          Contact
        </Button>
      </ListItem>
      <Divider d={{ md: "none" }} h="1px" bg="gray.500" />
    </List>
  );
};

export default NavLinks;
