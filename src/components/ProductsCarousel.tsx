import React from "react";

import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import {
  Text,
  HStack,
  Image,
  VStack,
  Heading,
  Box,
  IconButton,
} from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import lp1 from "../assets/lp-1.jpg";
import lp2 from "../assets/lp-2.jpg";
import lp3 from "../assets/lp-3.jpg";

interface Props {
  header: string;
}

const ProductsCarousel: React.FC<Props> = ({ header }) => {
  return (
    <Box maxW="350px" mx="auto">
      <CarouselProvider
        naturalSlideHeight={90}
        naturalSlideWidth={100}
        totalSlides={3}
        isPlaying={true}
        interval={3000}
        infinite={true}
      >
        <HStack justify="space-between">
          <Heading fontSize="2xl">{header}</Heading>
          <Box textAlign="center" mt="30px">
            <ButtonBack>
              <IconButton
                ml="10px"
                aria-label="Left-Icon"
                icon={<ChevronLeftIcon />}
              />
            </ButtonBack>
            <ButtonNext>
              <IconButton
                ml="5px"
                aria-label="Right-Icon"
                icon={<ChevronRightIcon />}
              />
            </ButtonNext>
          </Box>
        </HStack>
        <Slider>
          <Slide index={0}>
            <HStack my="10px">
              <Image mr="20px" src={lp1} w="75px" />
              <VStack align="left">
                <Text>Crap Pool Security</Text>
                <Text as="strong">$30.00</Text>
              </VStack>
            </HStack>
            <HStack my="10px">
              <Image mr="20px" src={lp2} w="75px" />
              <VStack align="left">
                <Text>Crap Pool Security</Text>
                <Text as="strong">$30.00</Text>
              </VStack>
            </HStack>
            <HStack my="10px">
              <Image mr="20px" src={lp3} w="75px" />
              <VStack align="left">
                <Text>Crap Pool Security</Text>
                <Text as="strong">$30.00</Text>
              </VStack>
            </HStack>
          </Slide>
          <Slide index={1}>
            <HStack my="10px">
              <Image mr="20px" src={lp1} w="75px" />
              <VStack align="left">
                <Text>Crap Pool Security</Text>
                <Text as="strong">$30.00</Text>
              </VStack>
            </HStack>
            <HStack my="10px">
              <Image mr="20px" src={lp2} w="75px" />
              <VStack align="left">
                <Text>Crap Pool Security</Text>
                <Text as="strong">$30.00</Text>
              </VStack>
            </HStack>
            <HStack my="10px">
              <Image mr="20px" src={lp3} w="75px" />
              <VStack align="left">
                <Text>Crap Pool Security</Text>
                <Text as="strong">$30.00</Text>
              </VStack>
            </HStack>
          </Slide>
          <Slide index={2}>
            <HStack my="10px">
              <Image mr="20px" src={lp1} w="75px" />
              <VStack align="left">
                <Text>Crap Pool Security</Text>
                <Text as="strong">$30.00</Text>
              </VStack>
            </HStack>
            <HStack my="10px">
              <Image mr="20px" src={lp2} w="75px" />
              <VStack align="left">
                <Text>Crap Pool Security</Text>
                <Text as="strong">$30.00</Text>
              </VStack>
            </HStack>
            <HStack my="10px">
              <Image mr="20px" src={lp3} w="75px" />
              <VStack align="left">
                <Text>Crap Pool Security</Text>
                <Text as="strong">$30.00</Text>
              </VStack>
            </HStack>
          </Slide>
        </Slider>
      </CarouselProvider>
    </Box>
  );
};

export default ProductsCarousel;
