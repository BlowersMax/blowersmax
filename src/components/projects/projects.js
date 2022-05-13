import { ArrowForwardIcon, LinkIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Heading, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function FeaturedProjects() {
  function handleurl(url) {
    const win = window.open(url, '_blank');
    if (win != null) {
      win.focus();
    }
  }

  let navi = useNavigate()

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minW="100%"
      gap={2}
    >
      <Heading as="h2">Featured Projects</Heading>
      <Flex direction="row" my={3} gap="3" wrap="wrap" mx={10}>
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
            <Button
              colorScheme="teal"
              borderRadius={15}
              leftIcon={<FaGithub />}
              onClick={() => {
                handleurl('https://github.com/blowersmax');
              }}
            >
              GitHub
            </Button>
            <Button
              colorScheme="teal"
              leftIcon={<LinkIcon />}
              borderRadius={15}
              onClick={() => {
                handleurl('/');
              }}
            >
              Website
            </Button>
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
            <Button
              onClick={() => {
                handleurl('https://bikepilgrim.webflow.io');
              }}
              colorScheme="teal"
              leftIcon={<LinkIcon />}
              borderRadius={15}
            >
              Website
            </Button>
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
            <Text fontSize="xl">Coming Soon</Text>
          </Center>
          <Flex justify="space-around" my={3}>
            <Button
              colorScheme="teal"
              borderRadius={15}
              leftIcon={<FaGithub />}
            >
              Soon!
            </Button>
            <Button
              colorScheme="teal"
              borderRadius={15}
              leftIcon={<LinkIcon />}
            >
              Soon!
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Button
        rightIcon={<ArrowForwardIcon />}
        borderRadius={15}
        colorScheme={'teal'}
        onClick={() => {navi('/projects')}}
      >
        See More
      </Button>
    </Flex>
  );
}

export default FeaturedProjects;
