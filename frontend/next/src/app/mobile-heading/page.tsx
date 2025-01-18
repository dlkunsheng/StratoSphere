import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const MobileHeading = () => {
  return (
    <Box
      bgGradient="linear(to-b, blue.400, purple.500)"
      p={6}
      textAlign="center"
      borderRadius="md"
      boxShadow="lg"
    >
      <Heading
        as="h1"
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        fontWeight="extrabold"
        bgGradient="linear(to-r, teal.300, blue.500)"
        bgClip="text"
        textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)"
      >
        Welcome to Mobile UI
      </Heading>
      <Text
        mt={2}
        fontSize={{ base: "sm", sm: "md" }}
        color="whiteAlpha.800"
      >
        A responsive and beautiful heading for your mobile experience.
      </Text>
    </Box>
  );
};

export default MobileHeading;
