import { Heading, Icon, Stack } from "@chakra-ui/react";
import { Confetti } from "phosphor-react";
import React from "react";

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" as={"a"} href="/">
      <Icon
        as={Confetti}
        color="green.500"
        fontSize={{ base: "2xl", md: "3xl" }}
        weight="bold"
      />
      <Heading fontSize={{ base: "xl", md: "2xl" }} color="gray.900">
        EventDeck
      </Heading>
    </Stack>
  );
};

export default Logo;
