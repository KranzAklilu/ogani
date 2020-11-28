import React from "react";

import { Button, List, ListItem } from "@chakra-ui/react";

const Filter = () => {
  return (
    <List
      d="flex"
      justifyContent={{ base: "flex-start", sm: "center" }}
      textAlign="center"
      overflow="scroll"
      style={{ scrollBehavior: "smooth" }}
    >
      <ListItem>
        <Button
          fontWeight="400"
          bg="none"
          variant="none"
          _focus={{ textDecoration: "underline #7fad39 2px" }}
        >
          All
        </Button>
      </ListItem>
      <ListItem>
        <Button
          fontWeight="400"
          bg="none"
          variant="none"
          _focus={{ textDecoration: "underline #7fad39 2px" }}
        >
          Oranges
        </Button>
      </ListItem>
      <ListItem>
        <Button
          fontWeight="400"
          bg="none"
          variant="none"
          _focus={{ textDecoration: "underline #7fad39 2px" }}
        >
          Freash Meat
        </Button>
      </ListItem>
      <ListItem>
        <Button
          fontWeight="400"
          bg="none"
          variant="none"
          _focus={{ textDecoration: "underline #7fad39 2px" }}
        >
          Vegetables
        </Button>
      </ListItem>
      <ListItem>
        <Button
          fontWeight="400"
          bg="none"
          variant="none"
          _focus={{ textDecoration: "underline #7fad39 2px" }}
        >
          Fastfood
        </Button>
      </ListItem>
    </List>
  );
};

export default Filter;
