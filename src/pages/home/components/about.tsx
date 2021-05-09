import { Box, Heading, Text } from "@chakra-ui/layout";
import { Container } from "components/Container";
import React from "react";

export const About = () => {
  return (
    <Box w="100%" py="60px">
      <Container>
        <Text fontSize="lg" mb="2">
          We're more than a construction company
        </Text>
        <Heading mb="6" color="brand" fontSize="3rem">
          Who we are?
        </Heading>
        <Text lineHeight="1.7rem">
          Balwadkar Industries Private Limited was established in 2017 and is a
          general contractor offering construction services in terms of Site
          Analysis,
          <br /> Feasibility Studies, Preliminary Design Studies, Permit/Zoning
          Applications, etc.
          <br /> We handle various industrial, distribution, manufacturing,
          office, retail, recreational, healthcare and commercial projects in
          Maharashtra, Gujarat. We are focused on providing value-added
          construction services to our customers by creating a successful
          partnership with them throughout the construction process.
          <br /> Our pledge is to establish lasting relationships with our
          customers by exceeding their expectations and gaining their trust
          through exceptional performance by every member of the construction
          team.
        </Text>
      </Container>
    </Box>
  );
};
