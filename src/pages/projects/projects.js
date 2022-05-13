import { ArrowBackIcon, LinkIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  Box,
  Center,
  Text,
  Button,
  IconButton,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { FaBackward, FaGithub } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

function Projects() {
  const navi = useNavigate();
  const location = useLocation()
  function handleurl(url) {
    const win = window.open(url, '_blank');
    if (win != null) {
      win.focus();
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: '#top',
      behavior: 'smooth'
    })
  }, []);

  return (
    <Flex direction="column" align="center" mx={3}>
      <Box h={1} id="#top" />
      <HStack>
        <Button
          leftIcon={<ArrowBackIcon />}
          colorScheme="teal"
          borderRadius={15}
          onClick={() => {
            navi('/');
          }}
          size='lg'
          variant="ghost"
        >
          Back
        </Button>
        <Spacer />
        <Heading size='lg'>My Projects</Heading>
      </HStack>
      <Flex direction="row" my={8} gap={2} wrap="wrap">
        <Box
          bg="brand.100"
          minW="sm"
          color="white"
          px={10}
          py={5}
          borderRadius={15}
        >
          <Center>
            <Text fontSize="xl">Portfolio</Text>
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
              onClick={() => {
                handleurl('/');
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
      </Flex>
    </Flex>
  );
}

export default Projects;
