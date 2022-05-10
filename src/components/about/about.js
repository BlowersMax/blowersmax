import { Flex, Heading, Text } from '@chakra-ui/react';

function About() {
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading as="h2">About Me</Heading>
      <Text fontSize='xl'>
        I am a developer based out of Tucson Arizona. I specialize in creating
        websites for small businesses. I use a variety of technologies to create
        a seamless user experience for all.
      </Text>
    </Flex>
  );
}

export default About;
