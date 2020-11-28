import React from "react";

import { Container, Heading, Divider } from "@chakra-ui/react";

interface Props {
  heading: string;
}
const BrandHeading: React.FC<Props> = ({ heading }) => {
  return (
    <Container textAlign="center">
      <Heading fontWeight="700">{heading}</Heading>
      <Divider w="20%" h="3px" m="10px auto" bg="brand" />
    </Container>
  );
};

export default BrandHeading;
