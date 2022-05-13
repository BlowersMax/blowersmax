import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  function twtr() {
    const win = window.open('https://twitter.com/blowersmax', '_blank');
    if (win != null) {
      win.focus();
    }
  }
  function insta() {
    const win = window.open('https://instagram.com/blowers.max', '_blank');
    if (win != null) {
      win.focus();
    }
  }
  return (
    <Flex
      minWidth="max-content"
      direction="column"
      justify="center"
      alignItems="center"
      gap="2"
      mx="3"
      p="10"
      bg="brand.100"
      borderRadius={15}
    >
      <Heading size="md">&copy; Max Blowers - 2022</Heading>
      <Spacer />
      <ButtonGroup>
        <Button
          colorScheme="twitter"
          onClick={() => {twtr();}}
          leftIcon={<FaTwitter />}
        >
          Twitter
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => insta()}
          leftIcon={<FaInstagram />}
        >
          Instagram
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Footer;
