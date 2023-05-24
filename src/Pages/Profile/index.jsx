import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { Avatar, HStack, Heading, VStack, Text } from "@chakra-ui/react";
import { api } from "../../api";
import AuthContext from "../../Context/AuthContext";

const ProfilePage = () => {
  const [user, setUser] = useState();
  const ctx = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      await api.get(`/user/${ctx.userId}`).then((result) => {
        setUser(result.data);
      });
    })();
  }, []);

  return (
    <>
      <Navbar />
      {user ? (
        <VStack p="5" px={["5", "10"]}>
          <Heading alignSelf="flex-start">Perfil</Heading>
          <VStack bgColor="gray.100" w={["100%", "25%"]} p="5">
            <HStack spacing="5">
              <Avatar name={user.name} />
              <VStack spacing="-1">
                <Heading fontSize="xl">{user.name}</Heading>
                <Text color="gray.400" fontSize={"sm"}>
                  @{user.username}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfilePage;
