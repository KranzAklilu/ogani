import React from "react";

import { Divider, Heading, Image, Text, Box } from "@chakra-ui/react";
import { ChatIcon, CalendarIcon } from "@chakra-ui/icons";

interface Props {
  image: string;
  heading: string;
  description: string;
  date: string;
  numberOfChat: number;
}
const BlogItems: React.FC<Props> = ({
  image,
  heading,
  description,
  date,
  numberOfChat,
}) => {
  return (
    <Box maxW="400px" mx="auto">
      <Image my="30px" src={image} />
      <Text d="inline" color="gray.400">
        <CalendarIcon /> {date}
      </Text>
      <Text ml="25px" d="inline" color="gray.400">
        <ChatIcon mr="5px" />
        {numberOfChat}
      </Text>
      <Heading my="15px" fontSize="lg">
        {heading}
      </Heading>
      <Text color="gray.600">{description}</Text>
      <Divider mt="15px" h="1px" bg="brand" />
    </Box>
  );
};

export default BlogItems;
