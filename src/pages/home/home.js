import {
  Box,
  Alert,
  AlertTitle,
  AlertIcon,
  Divider,
} from '@chakra-ui/react';
import About from '../../components/about/about';
import Contact from '../../components/contact/contact';
import Hero from '../../components/hero/hero';
import FeaturedProjects from '../../components/projects/projects';

function Home() {
  return (
    <Box m={3}>
      <Alert status="info" borderRadius={15}>
        <AlertIcon />
        <AlertTitle>
          This site is still under construction. Things may be move or be added.
        </AlertTitle>
      </Alert>
      <Hero />
      <About />
      <Divider my='10' />
      <FeaturedProjects />
      <Divider my='10' />
      <Contact />
    </Box>
  );
}

export default Home;
