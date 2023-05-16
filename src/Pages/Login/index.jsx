import {
  HStack,
  Heading,
  Icon,
  VStack,
  Button,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../../Components/Logo";
import {
  ArrowCircleDown,
  Envelope,
  IdentificationCard,
  Password,
  User,
} from "phosphor-react";
import axios from "axios";

const Login = () => {
  const toast = useToast();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [nameInput, setNameInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [docIdInput, setDocIdInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [roleInput, setRoleInput] = useState("Professional");

  const handleNameInput = (e) => setNameInput(e.target.value);
  const handleUsernameInput = (e) => setUsernameInput(e.target.value);
  const handleEmailInput = (e) => setEmailInput(e.target.value);
  const handlePasswordInput = (e) => setPasswordInput(e.target.value);
  const handleRoleInput = (e) => setRoleInput(e.target.value);
  const handleDocIdInput = (e) => {
    let text = e.target.value;
    setDocIdInput(text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""));
  };
  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/${isLogin ? "auth" : "user"}`,
        isLogin
          ? {
              email: emailInput,
              password: passwordInput,
            }
          : {
              name: nameInput,
              username: usernameInput,
              email: emailInput,
              role: roleInput,
              docId: docIdInput,
              password: passwordInput,
            }
      )
      .then((result) => {
        setIsLoading(false);
        toast({
          title: isLogin ? "Login" : "Cadastro",
          description: isLogin
            ? "Logado com sucesso."
            : "Cadastrado com sucesso.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        toast({
          title: "Erro",
          description: error.response.data.msg,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <VStack p="10" gap="5">
      <Logo />
      {isLoading ? (
        <Spinner
          thickness="4px"
          color="green.500"
          size={{ sm: "lg", md: "xl" }}
        />
      ) : (
        <VStack w="md" p="10" bgColor="gray.50" borderRadius="lg" spacing="5">
          <Heading alignSelf="flex-start" fontSize="xl">
            {isLogin ? "Login" : "Cadastro"}
          </Heading>
          <VStack alignSelf="flex-start" w="100%" spacing="3">
            {isLogin ? null : (
              <Stack w="100%">
                <InputGroup>
                  <InputLeftElement
                    children={<Icon as={User} color="green.600" />}
                  />
                  <Input
                    focusBorderColor="green.500"
                    type="text"
                    placeholder="Name"
                    borderColor="green.300"
                    onChange={handleNameInput}
                    value={nameInput}
                  />
                </InputGroup>
              </Stack>
            )}
            {isLogin ? null : (
              <Stack w="100%">
                <InputGroup>
                  <InputLeftElement color="green.600" children="@" />
                  <Input
                    focusBorderColor="green.500"
                    type="text"
                    placeholder="Username"
                    borderColor="green.300"
                    onChange={handleUsernameInput}
                    value={usernameInput}
                  />
                </InputGroup>
              </Stack>
            )}
            <Stack w="100%">
              <InputGroup>
                <InputLeftElement
                  children={<Icon as={Envelope} color="green.600" />}
                />
                <Input
                  focusBorderColor="green.500"
                  type="email"
                  placeholder="Email"
                  borderColor="green.300"
                  onChange={handleEmailInput}
                  value={emailInput}
                />
              </InputGroup>
            </Stack>
            {isLogin ? null : (
              <Stack w="100%">
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Icon as={IdentificationCard} color="green.600" />
                    }
                  />
                  <Input
                    focusBorderColor="green.500"
                    type="text"
                    placeholder="CPF"
                    borderColor="green.300"
                    onChange={handleDocIdInput}
                    value={docIdInput}
                  />
                </InputGroup>
              </Stack>
            )}
            <Stack w="100%">
              <InputGroup>
                <InputLeftElement
                  children={<Icon as={Password} color="green.600" />}
                />
                <Input
                  focusBorderColor="green.500"
                  borderColor="green.300"
                  type="password"
                  placeholder="Password"
                  onChange={handlePasswordInput}
                  value={passwordInput}
                />
              </InputGroup>
            </Stack>
            {isLogin ? null : (
              <Stack w="100%">
                <Select
                  focusBorderColor="green.500"
                  borderColor="green.300"
                  color="green.500"
                  icon={<Icon as={ArrowCircleDown} />}
                  value={roleInput}
                  onChange={(e) => {
                    handleRoleInput(e);
                    console.log(roleInput);
                  }}
                >
                  <option value="personal">Pessoal</option>
                  <option value="professional">Profissional</option>
                </Select>
              </Stack>
            )}
          </VStack>
          <VStack spacing="5" w="100%" pt="3">
            <HStack w="70%">
              <Button
                as="a"
                color="white"
                bg="green.500"
                borderRadius="full"
                onClick={() => handleLogin()}
                w="50%"
              >
                {!isLogin ? "Cadastro" : "Login"}
              </Button>
              <Button
                as="a"
                color="green.500"
                borderRadius="full"
                borderColor="green.600"
                w="50%"
                variant="outline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Cadastro" : "Login"}
              </Button>
            </HStack>
            {!isLogin ? null : (
              <Button as="a" href="login" color="green.500" variant="link">
                Esqueci minha senha
              </Button>
            )}
          </VStack>
        </VStack>
      )}
    </VStack>
  );
};

export default Login;
