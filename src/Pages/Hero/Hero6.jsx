import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const Hero6 = () => {
  const backgroundImageUrl = 'https://diesel.gumlet.io/cms_images/1671005754Artboard%203@3x.webp';
  const styles = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    
  };
  return (
    <Box style={styles}>
      <Box style={{
        display : 'flex',
        gap:'1px'
      }}>
        <Button marginTop='600px' colorScheme='red' padding={7}>SHOP MEN</Button>
        <Button marginTop='600px' colorScheme='red'  padding={7}>SHOP WOMEN</Button>
      </Box>
    </Box>
  )
}

export default Hero6;
