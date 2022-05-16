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
import { Form, Formik, useFormik } from 'formik';
import {doc, setDocs, collection, addDoc, setDoc} from 'firebase/firestore'
import { fdb } from '../../App';

function Contact() {
  const toast = useToast();
  const cformik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit:values => {
      const {name, email, message} = values
      try {
        setDoc(doc(fdb, 'messages'), name, email, message)
      } catch(e) {
        console.error("error " + e)
      }
    }
  });
  return (
    <Flex align="center" justify="center" direction="column">
      <Heading>Let's Chat</Heading>
        <Box w={[300, 400, 500]}>
          <Form>
            <FormControl isRequired="true">
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <Input
                id="name"
                placeholder="Full Name"
                borderRadius={15}
                onChange={cformik.handleChange}
                value={cformik.values.name}
              />
            </FormControl>
            <FormControl my="3" isRequired="true">
              <FormLabel htmlFor="name">Email</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.300" />}
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  borderRadius={15}
                  onChange={cformik.handleChange}
                  value={cformik.values.email}
                />
              </InputGroup>
            </FormControl>
            <FormControl my="3" isRequired="true">
              <FormLabel htmlFor="name">Message</FormLabel>
              <Textarea
                id="message"
                placeholder="Message"
                borderRadius={15}
                onChange={cformik.handleChange}
                value={cformik.values.message}
              />
            </FormControl>
            <Button
              type="submit"
              minW="100%"
              my="3"
              colorScheme="teal"
              borderRadius={15}
            >
              Submit
            </Button>
          </Form>
        </Box>
    </Flex>
  );
}

export default Contact;
