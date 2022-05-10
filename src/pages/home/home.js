import {
  Box,
  Center,
  Alert,
  AlertTitle,
  AlertIcon,
  Heading,
  Text,
} from '@chakra-ui/react';
import About from '../../components/about/about';
import Hero from '../../components/hero/hero';
import FeaturedProjects from '../../components/projects/projects';

function Home() {
  return (
    <Box m={3}>
      <Alert status="warning" borderRadius={15}>
        <AlertIcon />
        <AlertTitle>
          Oh No! It appears this site is still under construction. Stay Tuned!
        </AlertTitle>
      </Alert>
      <Hero />
      <About />
      <FeaturedProjects />
    </Box>
  );
}

export default Home;
