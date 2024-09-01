import React from 'react'
import { Center, Heading, Img, VStack ,Text, Button} from '@chakra-ui/react'
const SingleproductCard = ({data}) => {
  return (
    <div>
    <Center w='60%' m='auto'>
    <VStack>
    <Img src={data.img} alt={data.title} w={300}/>
    <Heading color='green'>Price : {data.seeling_price}</Heading>
    <Heading color='red' style={{textDecoration : 'line-through'}}>{data.original_price}</Heading>
    <Heading>{data.title}</Heading>
    <Heading> Color : {data.color}</Heading>
    <Text>{data.discrption}</Text>
    <Button>Buy Now</Button>
    </VStack>
    </Center>
    </div>
  )
}

export default SingleproductCard
