import React from "react";

import { Button, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";

interface Props {
  placeholder: string;
  buttonText: string;
}
const SearchBar: React.FC<Props> = ({ placeholder, buttonText }) => {
  return (
    <InputGroup>
      <Input py="25px" type="text" borderRadius="0" placeholder={placeholder} />
      <InputRightAddon
        p="0"
        h="100%"
        children={
          <Button
            w="100%"
            h="100%"
            py="16px"
            borderRadius="0"
            color="white"
            bg="brand"
            variant="none"
          >
            {buttonText}
          </Button>
        }
      />
    </InputGroup>
  );
};

export default SearchBar;
