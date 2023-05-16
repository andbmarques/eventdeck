import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      p={{ sm: "5", md: "8" }}
    >
      <Logo />
      <HStack>
        <Button
          as="a"
          href="login"
          color="white"
          bg="green.500"
          borderRadius="full"
        >
          Login
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
