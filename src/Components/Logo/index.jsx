import { Heading, Icon, Stack } from "@chakra-ui/react";
import { Confetti } from "phosphor-react";
import React from "react";

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" as={"a"} href="/">
      <Icon
        as={Confetti}
        color="green.500"
        fontSize={{ sm: "3xl", md: "4xl" }}
        weight="bold"
      />
      <Heading fontSize={{ sm: "xl", md: "2xl" }} color="gray.900">
        EventDeck
      </Heading>
    </Stack>
  );
};

export default Logo;
