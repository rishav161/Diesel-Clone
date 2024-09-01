import { Flex,Box, Heading, Input,Stack,Checkbox, Text,Button} from '@chakra-ui/react'
import facebookIcon from './icons8-facebook-96.png'
import intaIcon from './icons8-instagram-96.png'
import twitterIcon from './icons8-twitter-96.png'
import React from 'react'

const Hero7 = () => {
  return (
    <div style={{margin : 'auto' , justifyContent : 'space-around'}} >
    <Flex style={{margin : 'auto' , justifyContent : 'space-around',gap:'-2px'}}>
    <Box p='4' bg='black' color='white' w={700}>
    <Heading as='h4' size='md'>
    Sign up to never miss an update.
  </Heading>
  <Input placeholder='Enter Your Mail Id' backgroundColor='white'/>
  <br />
  <Stack spacing={5} direction='row'>
  <Checkbox colorScheme='red' >
    Men
  </Checkbox>
  <Checkbox colorScheme='green' >
    Women
  </Checkbox>

</Stack>
<Text>By clicking Sign up you have read and agreed to our privacy policy</Text>
<Button bg='black' color='red'>Sign Up</Button>
    </Box>
    
    <Box p='4' bg='#e0d6d5' w={700}>
     
     <Heading as='h2' size='xl'>
     Connect with us on social media
   </Heading>
   <Flex>
   <img src={facebookIcon} alt="" />
   <img src={intaIcon} alt="" />
   <img src={twitterIcon} alt="" />
   </Flex>
    </Box>
  </Flex>
    </div>
  )
}

export default Hero7
