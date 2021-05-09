import { Box } from "@chakra-ui/react";
import { Header } from "components/Header";
import { About } from "pages/home/components/about";
import { Main } from "pages/home/components/main";
import React from "react";

export const Demo = () => {
  return (
    <Box w="100%">
      <Header />
      <Main />
      <About />
    </Box>
  );
};

export default Demo;
