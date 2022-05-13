import {
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
  function linkd() {
    const win = window.open('https://linkedin.com/in/blowersmax', '_blank');
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
      p="10"
      bg="brand.100"
      color="white"
    >
      <Heading size="md">&copy; Max Blowers - 2022</Heading>
      <Text>My Socials</Text>
      <ButtonGroup>
        <IconButton
          icon={<FaTwitter />}
          onClick={() => {
            twtr();
          }}
          colorScheme="twitter"
        />
        <IconButton
          icon={<FaInstagram />}
          onClick={() => {
            insta();
          }}
          colorScheme="teal"
        />
        <IconButton
          icon={<FaLinkedin />}
          onClick={() => {
            linkd();
          }}
          colorScheme="linkedin"
        />
      </ButtonGroup>
    </Flex>
  );
}

export default Footer;
