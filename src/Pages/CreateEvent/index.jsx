import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import CreateEventImg from "../../Assets/CreateEventImg.svg";
import {
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Button,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Textarea,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { Article, File, TextT } from "phosphor-react";

function CreateEvent() {
  const [nameInput, setNameInput] = useState("");

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
  };

  return (
    <>
      <Navbar />
      <HStack alignItems="start" justifyContent="start" p="5" w="100%">
        <VStack alignItems={"center"} w="35%">
          <VStack gap="5" w="sm">
            <Heading
              size="md"
              borderLeft="4px solid"
              borderLeftColor="green.500"
              px="2"
              alignSelf="start"
            >
              Crie um novo evento!
            </Heading>
            <InputGroup>
              <InputLeftElement
                children={<Icon as={Article} color="green.600" />}
              />
              <Input
                focusBorderColor="green.500"
                type="text"
                placeholder="Título"
                borderColor="green.300"
                onChange={handleNameInput}
                value={nameInput}
              />
            </InputGroup>
            <InputGroup>
              <Textarea
                h="sm"
                focusBorderColor="green.500"
                type="text"
                placeholder="Descrição"
                borderColor="green.300"
              ></Textarea>
            </InputGroup>
            <InputGroup>
              <InputRightElement children={<IconButton icon={<File />} />} />
              <Input
                type="text"
                placeholder="Envie um banner"
                borderColor="gray.300"
                isDisabled
                onChange={handleNameInput}
                value={nameInput}
              />
            </InputGroup>
            <Button colorScheme="green" w="100%">
              Criar
            </Button>
          </VStack>
        </VStack>
        <VStack
          h="calc(80vh)"
          borderLeft="2px solid"
          borderLeftColor="gray.200"
          pl='10'
          alignItems="center"
          justifyContent="center"
          w="55%"
        >
          <Image w="lg" src={CreateEventImg} />
        </VStack>
      </HStack>
    </>
  );
}

export default CreateEvent;
