import {
  HStack,
  Heading,
  Icon,
  VStack,
  Button,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../../Components/Logo";
import { Envelope, Lock, Password } from "phosphor-react";

const Login = () => {
  return (
    <VStack p="10" gap="5">
      <Logo />
      <VStack
        w="md"
        p="10"
        bgColor="blackAlpha.50"
        borderRadius="lg"
        spacing="5"
      >
        <Heading alignSelf="flex-start" fontSize="xl">
          Login
        </Heading>
        <VStack alignSelf="flex-start" w="100%">
          <Stack w="100%">
            <InputGroup>
              <InputLeftElement
                children={<Icon as={Envelope} color="green.600" />}
              />
              <Input
                focusBorderColor="green.500"
                type="email"
                placeholder="Email"
              />
            </InputGroup>
          </Stack>
          <Stack w="100%">
            <InputGroup>
              <InputLeftElement
                children={<Icon as={Password} color="green.600" />}
              />
              <Input
                focusBorderColor="green.500"
                type="password"
                placeholder="Password"
              />
            </InputGroup>
          </Stack>
        </VStack>
        <VStack spacing="5" w="100%" pt="3">
          <HStack w="70%">
            <Button
              as="a"
              href="login"
              color="white"
              bg="green.500"
              borderRadius="full"
              w="50%"
            >
              Login
            </Button>
            <Button
              as="a"
              href="login"
              color="green.500"
              borderRadius="full"
              borderColor="green.600"
              w="50%"
              variant="outline"
            >
              Cadastro
            </Button>
          </HStack>
          <Button as="a" href="login" color="green.500" variant="link">
            Esqueci minha senha
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Login;
