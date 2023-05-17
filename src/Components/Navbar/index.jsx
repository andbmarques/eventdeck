import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Heading,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../Logo";
import AuthContext from "../../Context/AuthContext";
import { ArrowElbowLeft } from "phosphor-react";
import { api } from "../../api";

const Navbar = () => {
  const ctx = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [userName, setUserName] = useState("");

  const handleLogout = () => {
    ctx.setToken("");
    ctx.setUserId("");
    onClose();
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    api.get(`/user/${ctx.userId}`).then((result) => {
      setUserName(result.data.name);
    });
  }, []);

  return (
    <>
      <HStack alignItems="center" justifyContent="space-between" p="5">
        <Logo />
        <HStack>
          <Button
            as="a"
            href="explore"
            color="green.500"
            variant="ghost"
            borderRadius="full"
          >
            Descobrir
          </Button>
          {ctx.token ? (
            <Avatar size="sm" onClick={onOpen} />
          ) : (
            <Button
              as="a"
              href="login"
              color="white"
              bg="green.500"
              borderRadius="full"
            >
              Login
            </Button>
          )}
        </HStack>
      </HStack>
      <Drawer
        placement={screenWidth < 520 ? "bottom" : "right"}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <VStack p="5" spacing="8">
              <Avatar size={["2xl"]} />
              <Heading textAlign="center">{userName}</Heading>
            </VStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack>
              <Button variant={"ghost"} color="green.500">
                Meus Eventos
              </Button>
              <Button variant={"ghost"} color="green.500">
                Perfil
              </Button>
            </VStack>
          </DrawerBody>
          <DrawerFooter alignItems="center" justifyContent="center">
            <Button
              variant="ghost"
              onClick={handleLogout}
              leftIcon={<ArrowElbowLeft />}
            >
              Sair
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
