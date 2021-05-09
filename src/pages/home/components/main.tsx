import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Container } from "components/Container";
import React from "react";
import ConstructionIcon from "resources/images/main.png";

export const Main = () => {
  return (
    <Box bg="#f0f5f9">
      <Container>
        <Flex p="140px 0 60px 0">
          <Flex direction="column" justify="center" flex="1">
            <Text fontSize="lg" mb="2">
              The company you can rely on!
            </Text>
            <Heading mb="6" fontSize="3rem">
              Balawadkar Industries
              <br /> Private Limited.
            </Heading>
            <Button
              bg="brand"
              colorScheme="transparent"
              color="white"
              w="10rem"
              h="2.8rem"
              fontSize="1.1rem"
            >
              Explore
            </Button>
          </Flex>
          <Image
            src={ConstructionIcon}
            alt="icon"
            h="28rem"
            w="auto"
            flex="1"
          />
        </Flex>
      </Container>
    </Box>
  );
};
