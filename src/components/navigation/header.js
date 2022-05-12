import { ColorModeSwitcher } from "../../ColorModeSwitcher";

const { Flex, Heading, Button, ButtonGroup, Spacer, Box } = require("@chakra-ui/react");

function Header() {
    return (
        <Flex minWidth='max-content' direction='column' maxWidth='100vw' alignItems='center' gap='2'>
            <Box p='5'>
                <Heading size='md'>Max Blowers</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2' p={5}>
                <Button colorScheme='teal' variant='ghost'>Projects</Button>
                <Button colorScheme='teal' variant='ghost'>Contact</Button>
                <Button colorScheme='teal' variant='ghost'>Blog</Button>
                <ColorModeSwitcher />
            </ButtonGroup>
        </Flex>
    );
}

export default Header;