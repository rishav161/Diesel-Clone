import { Box } from '@chakra-ui/react';
import { Button } from 'bootstrap';
import React from 'react'

const BackgroundImg = () => {
    const backgroundImageUrl = 'https://diesel.gumlet.io/banner/167825364411.webp?compress=true&q=70';
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

export default BackgroundImg
