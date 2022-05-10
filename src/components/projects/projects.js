import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function FeaturedProjects() {
    return(
        <Flex direction="column" align="center" justify="center">
            <Heading as='h2'>Featured Projects</Heading>
            <Flex>
                <Box>
                    <Text fontSize='xl'>My Portfolio</Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default FeaturedProjects;