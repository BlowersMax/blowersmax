import { Box, Center, Code, Container, Flex, Heading } from '@chakra-ui/react';

function Hero() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      bg="brand.100"
      borderRadius={15}
      color="white"
      h="md"
      my={3}
    >
      <Heading as="h1">Max Blowers</Heading>
      <Code px={5} py={2} my={3} borderRadius={10}>
        Building a Better Web
      </Code>
    </Flex>
  );
}

export default Hero;
