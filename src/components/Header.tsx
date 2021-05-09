import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { Container } from "components/Container";
import React from "react";
import LogoIcon from "resources/images/logo.png";

export const Header = () => {
  return (
    <Box pos="fixed" top="0" py="12px" w="100%" bg="#fff" zIndex="9999">
      <Container>
        <Flex justify="space-between" align="center" w="100%">
          <Image src={LogoIcon} alt="icon" h="3rem" maxW="7rem" />
          <Box textAlign="center">
            <Link
              className="text-gray-600"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              mx="3"
              _hover={{ color: "brand" }}
            >
              Our Services
            </Link>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              mx="3"
              _hover={{ color: "brand" }}
            >
              Projects
            </Link>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              mx="3"
              _hover={{ color: "brand" }}
            >
              Clients
            </Link>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              mx="3"
              _hover={{ color: "brand" }}
            >
              About us
            </Link>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              mx="3"
              _hover={{ color: "brand" }}
            >
              Contact us
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
