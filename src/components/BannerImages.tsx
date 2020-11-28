import React from "react";

import { Image, Stack } from "@chakra-ui/react";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";

const BannerImage = () => {
  return (
    <Stack direction={{ base: "column", sm: "row" }} mb="75px">
      <Image src={banner1} w="100%" objectFit="cover" />
      <Image src={banner2} w="100%" objectFit="cover" />
    </Stack>
  );
};

export default BannerImage;
