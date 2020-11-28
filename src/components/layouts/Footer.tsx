import React from "react";

import { Image, Box, Text, Heading, Grid, GridItem } from "@chakra-ui/react";

import logo from "../../assets/logo.png";
import payment from "../../assets/payment-item.png";

import SearchBar from "../SearchBar";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";

import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <Box pt="50px" px="30px" mt="50px" bg="gray.100">
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem fontSize="sm" mt="10px" colSpan={{ base: 3, sm: 1 }}>
          <Image src={logo} mb="20px" />
          <Text>Address: 60-49 Road 11378 New York</Text>
          <Text>Phone: +65 11.188.888</Text>
          <Text>Email: hello@colorlib.com</Text>
        </GridItem>
        <GridItem
          colSpan={{ base: 3, sm: 2, md: 1 }}
          justifySelf={{ base: "left", sm: "right", md: "left" }}
          mt="30px"
        >
          <Heading mb="10px" fontSize="1xl">
            Useful Links
          </Heading>
          <FooterLinks />
        </GridItem>

        <GridItem colSpan={{ base: 3, md: 1 }}>
          <Heading mt="20px" fontSize="1xl">
            Join Our Newsletter Now
          </Heading>
          <Text fontSize="xs" color="gray.600">
            Get E-mail updates about our latest shop and special offers.
          </Text>
          <SearchBar placeholder="Enter your mail" buttonText="Subscribe" />
          <SocialLinks />
        </GridItem>
      </Grid>

      <Box mt="30px">
        <Text fontSize="sm" textAlign="center">
          Copyright ©2020 All rights reserved | This template is made with
          <FaHeart style={{ display: "inline" }} color="red" /> by{" "}
          <Text as="strong">Kranz Aklilu</Text>
        </Text>
        <Image m="10px auto" src={payment} />
      </Box>
    </Box>
  );
};

export default Footer;
