import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
const links = [
    {img : "https://diesel.gumlet.io/cms_images/1671614479icons-01.webp" , id : 1 , title : 'PERSONALISED STYLING'},
    {img : "https://diesel.gumlet.io/cms_images/1671614498icons-02.webp" , id : 2 , title : '30 DAY FREE RETURN'},
    {img : "https://diesel.gumlet.io/cms_images/1671614517icons-03.webp" , id : 3 , title : 'AUTHENTIC PRODUCTS'},
    {img : "https://diesel.gumlet.io/cms_images/1671614563icons-04.webp" , id : 4 , title : 'FLEXIBLE & SECURE PAYMENTS'},
    {img : "https://diesel.gumlet.io/cms_images/1671614575icons-05.webp" , id : 5 , title : 'LIFETIME SUPPORT'},
    
]
const link2 =[
    {img : "https://diesel.gumlet.io/cms_images/1671614585icons-06.webp" , id : 1 , title : 'PRE - ORDER'},
    {img : "https://diesel.gumlet.io/cms_images/1671614595icons-07.webp" , id : 2 , title : 'EXCLUSIVE OFFERS'},
    {img : "https://diesel.gumlet.io/cms_images/1671614595icons-07.webp" , id : 3 , title : 'FREE SHIPPING'},
];
const Hero5 = () => {
  return (
    <div>
    <Flex style={{
        justifyContent : 'space-between',
        width : '95%',
        margin : 'auto'
    }}>
      {links.map((el)=>(
        <Box key={el.id}>
        <img src={el.img} alt={el.title} style={{width : '200px'}}/>
        <h5>{el.title}</h5>
        </Box>
      ))}
      </Flex>
    <Flex style={{
        justifyContent : 'space-between',
        width : '65%',
        margin : 'auto'
    }}>
      {link2.map((el)=>(
        <Box key={el.id}>
        <img src={el.img} alt={el.title} style={{width : '200px'}}/>
        <h5>{el.title}</h5>
        </Box>
      ))}
      </Flex>
    </div>
  )
}

export default Hero5
