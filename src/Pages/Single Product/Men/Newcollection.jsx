import { Center, Heading, Img, VStack ,Text, Button} from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Newcollection = () => {
  const {id} = useParams();
  const [data,setData] = useState({});
  const fetchandRendering =(id)=>{
    axios.get(`https://dieselbackend.onrender.com/mennewcollection/${id}`).then((res)=>{
      console.log(res.data);
      setData(res.data)
    })
  }
  useEffect(()=>{
    fetchandRendering(id)
  },[id])
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

export default Newcollection

