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
import '../../fuck.css'

function Home() {
  return (
    <Box m={5}>
      <Alert status="info" borderRadius={15}>
        <AlertIcon />
        <AlertTitle>
          This site is still under construction. Things may be move or be added.
        </AlertTitle>
      </Alert>
      <Hero />
      <About />
      <Divider my='10' />
      <div id='projects' />
      <FeaturedProjects />
      <Divider my='10' />
      <div id='contact' />
      <Contact />
    </Box>
  );
}

export default Home;
