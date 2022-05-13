import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Flex,
  Heading,
  Text,
  Box,
  AccordionIcon,
  AccordionPanel,
  Center,
} from '@chakra-ui/react';

function About() {
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading as="h2">About Me</Heading>
      <Text fontSize="xl" mx={7} my={3}>
        I am a developer based out of Tucson Arizona. I specialize in creating
        websites for small businesses. I use a variety of technologies to create
        a seamless user experience for all.
      </Text>
      <Text fontSize="xl" mx={7} my={3}>
        Some Q's and A's
      </Text>
      <Accordion allowToggle width="50%">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What Technologies do I use?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            I use React, SASS, Webflow, Chakra UI, NodeJS, and Javascript to
            create websites!
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What Technologies do I use?
              </Box>
            </AccordionButton>
            <AccordionIcon />
          </h2>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default About;
