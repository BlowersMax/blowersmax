import { EmailIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from '@chakra-ui/react';

function Contact() {
  const toast = useToast();
  return (
    <Flex align="center" justify="center" direction="column">
      <Heading>Let's Chat</Heading>
      <Box w={[300, 400, 500]}>
        <FormControl isRequired="true">
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <Input placeholder="Full Name" />
        </FormControl>
        <FormControl my="3" isRequired="true">
          <FormLabel htmlFor="name">Email</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input type="email" placeholder="Email" />
          </InputGroup>
        </FormControl>
        <FormControl my="3" isRequired="true">
          <FormLabel htmlFor="name">Message</FormLabel>
          <Textarea placeholder="Message" />
        </FormControl>
        <Button
          minW="100%"
          my="3"
          colorScheme="teal"
          borderRadius={15}
          onClick={() => {
            toast({
              title: 'Oh No...',
              description:
                "It appears this feature isn't ready yet! Check back soon.",
              status: 'warning',
              duration: '3000',
              isCloseable: 'true',
            });
          }}
        >
          Submit
        </Button>
      </Box>
    </Flex>
  );
}

export default Contact;
