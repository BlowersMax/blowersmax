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
  Link,
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
      <Accordion allowToggle width={{ md: '75%' }} mx={5}>
        <AccordionItem my={1}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What technologies do I use?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            I use React, SASS, Webflow, Chakra UI, NodeJS, and Javascript to
            create websites!
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem my={1}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Am I currently taking new clients?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes! Shoot me a message at my{' '}
            <Link href="#contact" color="teal">
              contact form
            </Link>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem my={1}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Pricing?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            There is no easy answer to that question, it's different for every
            site. To get a quote head to my{' '}
            <Link href="#contact" color="teal">
              contact form
            </Link>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem my={1}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How long does it take to make a site?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Depending on the complexity of the site it can take anywhere between
            3 days and 3 weeks. The time depends on the overall complexity of
            the site.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default About;
