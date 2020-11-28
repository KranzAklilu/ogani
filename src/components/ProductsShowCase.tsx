import React from "react";
import { Image, Button, IconButton, Box } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import cat1 from "../assets/cat-1.jpg";
import cat2 from "../assets/cat-2.jpg";
import cat3 from "../assets/cat-3.jpg";
import cat4 from "../assets/cat-4.jpg";
import cat5 from "../assets/cat-5.jpg";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

interface Props {
  visibleSlides: number | undefined;
}

const HeroCarousel: React.FC<Props> = ({ visibleSlides }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={40}
      totalSlides={7}
      visibleSlides={visibleSlides}
      isPlaying={true}
      interval={3000}
      infinite={true}
    >
      <Slider style={{ textAlign: "center" }}>
        <Slide index={0}>
          <Image src={cat1} w="90%" h="100%" objectFit="cover" />
          <Button mt="-90px" bg="white">
            Vegitable
          </Button>
        </Slide>
        <Slide index={1}>
          <Image src={cat2} w="90%" h="100%" objectFit="cover" />
          <Button mt="-90px" bg="white">
            Vegitable
          </Button>
        </Slide>
        <Slide index={2}>
          <Image src={cat3} w="90%" h="100%" objectFit="cover" />
          <Button mt="-90px" bg="white">
            Vegitable
          </Button>
        </Slide>
        <Slide index={3}>
          <Image src={cat4} w="90%" h="100%" objectFit="cover" />
          <Button mt="-90px" bg="white">
            Vegitable
          </Button>
        </Slide>
        <Slide index={4}>
          <Image src={cat5} w="90%" h="100%" objectFit="cover" />
          <Button mt="-90px" bg="white">
            Vegitable
          </Button>
        </Slide>
        <Slide index={5}>
          <Image src={cat2} w="90%" h="100%" objectFit="cover" />
          <Button mt="-90px" bg="white">
            Vegitable
          </Button>
        </Slide>
        <Slide index={6}>
          <Image src={cat3} w="90%" h="100%" objectFit="cover" />
          <Button mt="-90px" bg="white">
            Vegitable
          </Button>
        </Slide>
      </Slider>
      <Box textAlign="center" mt="30px">
        <ButtonBack>
          <IconButton
            mr="5px"
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
    </CarouselProvider>
  );
};

export default HeroCarousel;
