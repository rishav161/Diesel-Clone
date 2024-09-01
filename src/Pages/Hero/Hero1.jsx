import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Hero1 = () => {
  const backgroundImageUrl = 'https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1695034326Mid_Week_Sale_Ads_1336x591_1.webp?compress=true&q=70';
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
       <Link to='/men'> <Button marginTop='600px' colorScheme='red' padding={7}>SHOP MEN</Button></Link>
        <Link to='women'><Button marginTop='600px' colorScheme='red'  padding={7}>SHOP WOMEN</Button></Link>
      </Box>
    </Box>
  )
}

export default Hero1;
