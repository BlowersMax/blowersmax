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
  function contact(name, email, message) {
    console.log('contact:' + name + email + message)
  }
  return (
    <Flex align="center" justify="center" direction="column">
      <Heading>Let's Chat</Heading>
      <Box w={[300, 400, 500]}>
        <FormControl isRequired="true" >
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <Input placeholder="Full Name" borderRadius={15} />
        </FormControl>
        <FormControl my="3" isRequired="true">
          <FormLabel htmlFor="name">Email</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input type="email" placeholder="Email" borderRadius={15} />
          </InputGroup>
        </FormControl>
        <FormControl my="3" isRequired="true">
          <FormLabel htmlFor="name">Message</FormLabel>
          <Textarea placeholder="Message" borderRadius={15} />
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
              position: 'top'
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
