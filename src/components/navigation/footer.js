import { Button, ButtonGroup, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <Flex minWidth='max-content' direction='column' justify='center' alignItems='center' gap='2' mx='3' p='10' bg='brand.100' borderRadius={15}>
            <Heading size='md'>&copy; Max Blowers - 2022</Heading>
            <Spacer />
            <ButtonGroup>
                <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                    Twitter
                </Button>
                <Button colorScheme='teal' leftIcon={<FaInstagram />}>
                    Instagram
                </Button>
            </ButtonGroup>
        </Flex>
    );
}

export default Footer;