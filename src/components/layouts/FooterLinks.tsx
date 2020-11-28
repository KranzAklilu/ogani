import React from "react";

import { HStack, List, ListItem, Button } from "@chakra-ui/react";

const FooterLinks = () => {
  return (
    <HStack>
      <List color="black!important" spacing="2" mr="15px">
        <ListItem color="blue">
          <Button
            color="gray.800"
            fontSize="sm"
            fontWeight="400"
            variant="link"
          >
            About Us
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="gray.800"
            fontSize="sm"
            fontWeight="400"
            variant="link"
          >
            About Our Shop
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="gray.800"
            fontSize="sm"
            fontWeight="400"
            variant="link"
          >
            Secure Shopping
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="gray.800"
            fontSize="sm"
            fontWeight="400"
            variant="link"
          >
            Delivery infomation
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="gray.800"
            fontSize="sm"
            fontWeight="400"
            variant="link"
          >
            Privacy Policy
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="gray.800"
            fontSize="sm"
            fontWeight="400"
            variant="link"
          >
            Our Sitemap
          </Button>
        </ListItem>
      </List>
      <List spacing="2">
        <ListItem>
          <Button
            color="gray.800"
            fontSize="sm"
            fontWeight="400"
            variant="link"
          >
            Who We Are
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="gray.800"
            fontSize="sm"
            fontWeight="400"
            variant="link"
          >
            Our Services
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="gray.800"
            fontSize="sm"
            fontWeight="400"
            variant="link"
          >
            Projects
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="gray.800"
            fontSize="sm"
            fontWeight="400"
            variant="link"
          >
            Contact
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="gray.800"
            fontSize="sm"
            fontWeight="400"
            variant="link"
          >
            Innovation
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="gray.800"
            fontSize="sm"
            fontWeight="400"
            variant="link"
          >
            Testimonials
          </Button>
        </ListItem>
      </List>
    </HStack>
  );
};

export default FooterLinks;
