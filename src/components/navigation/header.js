import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const {
  Flex,
  Heading,
  Button,
  ButtonGroup,
  Spacer,
  Box,
} = require('@chakra-ui/react');

function Header() {
  return (
    <Flex
      minWidth="max-content"
      direction="column"
      maxWidth="100vw"
      alignItems="center"
      gap="2"
      my="10"
    >
      <Box>
        <Heading size="md">Max Blowers</Heading>
      </Box>
      <ButtonGroup gap="2">
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => {
            window.location = '#projects';
          }}
        >
          Projects
        </Button>
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => {
            window.location = '#contact';
          }}
        >
          Contact
        </Button>
        <Button colorScheme="teal" variant="ghost">
          Blog
        </Button>
        <ColorModeSwitcher />
      </ButtonGroup>
    </Flex>
  );
}

export default Header;
