import React from "react";

import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Features from "./components/Features";
import Blog from "./components/Blog";

import { Container } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Nav />
      <Container maxW="1440px" px="25px" overflow="hidden">
        <Hero />
        <Features />
        <Products />
        <Blog />
      </Container>
      <Footer />
    </>
  );
};
export default App;
