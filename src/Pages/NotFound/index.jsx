import { Heading, Image, VStack } from "@chakra-ui/react";
import React from "react";
import NotFoundImg from "../../Assets/NotFoundImg.svg";
import Logo from "../../Components/Logo";

const NotFound = () => {
  return (
    <VStack
      w="100%"
      h="100vh"
      justifyContent="center"
      spacing="10"
      alignItems="center"
      textAlign="center"
    >
      <Logo />
      <Image w={{ base: "50%", md: "20%" }} src={NotFoundImg} />
      <Heading>404: Página Não Encontrada</Heading>
    </VStack>
  );
};

export default NotFound;
