import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const FooterCard = ({ data }) => {
  return (
    <div>
      {data.map((el, index) => (
        <Text key={index}>{el}</Text>
      ))}
    </div>
  )
}

const help = ['Order Status', 'Delivery', 'Returns', 'Contact Us', 'View All']
const POLICY = [
  "Privacy Policy",
  "Shipping & Delivery Policy",
  "Terms & Conditions",
  "Returns & Refund Policy",
  "Fees & Payment Policy"
]
const worldofdiesel =[
  'About Diesel',
'For Responsible Living',
'Only the Brave Foundation'
]
const Footer1 = () => {
  return (
    <div>
      <Flex justifyContent='space-around'>
        <Box>
          <Heading as='h5' size='sm'>
            Help
          </Heading>
          <FooterCard data={help} />
        </Box>
        <Box>
          <Heading as='h5' size='sm'>
            COOKIE POLICY & TERMS
          </Heading>
          <FooterCard data={POLICY} />
        </Box>
        <Box>
          <Heading as='h5' size='sm'>
            WORLD OF DIESEL
          </Heading>
          <FooterCard data={worldofdiesel}/>
        </Box>
        <Box>
          <Heading as='h5' size='sm'>
            STORE LOCATOR
          </Heading>
        </Box>
      </Flex>
    </div>
  )
}

export default Footer1
