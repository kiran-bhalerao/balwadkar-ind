import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { Home } from "./pages";

const theme = extendTheme({
  colors: {
    brand: "#ffc10d",
  },
});

const WrappedApp = (
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ChakraProvider>
);

export { WrappedApp };
