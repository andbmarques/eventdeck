import React from "react";
import Navbar from "../../Components/Navbar";
import { HStack, Heading, Image, VStack, Text, Button } from "@chakra-ui/react";
import HomeImg from "../../Assets/HomeImg.svg";

function Home() {
  return (
    <>
      <Navbar />
      <HStack alignItems="center" justifyContent="center" px="10" w="100%">
        <VStack
          spacing="5"
          w={["100%", "50%", "30%"]}
          alignItems="center"
          justifyContent="center"
          p="10"
        >
          <Heading
            textAlign={["center", "left"]}
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            Descubra um Mundo de Eventos Incríveis!
          </Heading>
          <Text textAlign={["center", "left"]}>
            Encontre, Explore e Experiencie os melhores eventos em um único
            lugar!
          </Text>
          <Button
            size={["sm", "md"]}
            colorScheme="green"
            alignSelf={["center", "flex-start"]}
          >
            Descubra
          </Button>
        </VStack>
        <VStack
          alignItems="center"
          justifyContent="center"
          w="35%"
          p="10"
          display={["none", "flex"]}
        >
          <Image w="sm" src={HomeImg} />
        </VStack>
      </HStack>
    </>
  );
}

export default Home;
