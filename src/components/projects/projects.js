import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

function FeaturedProjects() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minW="100%"
      gap={2}
    >
      <Heading as="h2">Featured Projects</Heading>
      <Flex direction="row" my={3} gap="5" wrap='wrap' mx={10}>
        <Box
          bg="brand.100"
          minW="sm"
          color="white"
          px={10}
          py={5}
          borderRadius={15}
        >
          <Center>
            <Text fontSize="xl">My Portfolio</Text>
          </Center>
          <Text></Text>
          <Flex justify="space-around" my={3}>
            <Button colorScheme='teal' leftIcon={<FaGithub />}>
              GitHub
            </Button>
            <Button>Link</Button>
          </Flex>
        </Box>
        <Box
          bg="brand.100"
          minW="sm"
          color="white"
          px={10}
          py={5}
          borderRadius={15}
        >
          <Center>
            <Text fontSize="xl">BikePilgrim</Text>
          </Center>
          <Text></Text>
          <Flex justify="space-around" my={3}>
            <Button colorScheme='teal' leftIcon={<FaGithub />}>
              GitHub
            </Button>
            <Button>Link</Button>
          </Flex>
        </Box>
        <Box
          bg="brand.100"
          minW="sm"
          color="white"
          px={10}
          py={5}
          borderRadius={15}
        >
          <Center>
            <Text fontSize="xl">My Portfolio</Text>
          </Center>
          <Text></Text>
          <Flex justify="space-around" my={3}>
            <Button colorScheme='teal' leftIcon={<FaGithub />}>
              GitHub
            </Button>
            <Button>Link</Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default FeaturedProjects;
