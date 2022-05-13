import { useNavigate } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const {
  Flex,
  Heading,
  Button,
  ButtonGroup,
  Box,
  useToast,
} = require('@chakra-ui/react');

function Header() {
  const toast = useToast();
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
        <Heading
          onClick={() => {
            window.location = '/';
          }}
          _hover={{ color: 'teal', cursor: 'pointer' }}
          size="md"
        >
          Max Blowers
        </Heading>
      </Box>
      <ButtonGroup gap="1">
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
        <Button
          colorScheme="teal"
          variant="ghost"
          onClick={() => {
            toast({
              title: 'Oh No...',
              description:
                "It appears this page isn't ready yet! Check back soon.",
              status: 'warning',
              duration: '3000',
              isCloseable: 'true',
              position: 'top',
            });
          }}
        >
          Blog
        </Button>
        <ColorModeSwitcher />
      </ButtonGroup>
    </Flex>
  );
}

export default Header;
