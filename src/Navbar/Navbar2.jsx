import { Box, Flex , Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import Dropdoennavcomponent from './Dropdoennavcomponent'
import userIcon from '../icons/icons8-user-24.png'
import questionIcon from '../icons/icons8-question-mark-96.png'
import seatchIcon from '../icons/icons8-search-96.png'
import fvtIcon from '../icons/icons8-favorite-96.png'
import bagIcon from '../icons/icons8-shopping-bag-96.png'
import { Authcontext } from '../Authcontext/Authcontextprovider'

const Navbar2 = () => {
  const {token , isAuth , logout} = useContext(Authcontext);
  return (
    <Box
      style={{
        backgroundColor: 'red',
        color: 'white',
        height: '40px',
        alignItems: 'center',
        margin : 'auto',
        padding: 'auto',
        width : '99.90%',
        top: 0,
        zIndex: 1
      }}
    >
      <Flex justifyContent='space-between'>
        <Flex width='30%' justifyContent='space-between' marginTop={2}>
          <NavLink to='/men'>
            <Dropdoennavcomponent
              mainheading='Men'
              link1='JEANS'
              link2='SHOES'
              link3='NEW COLLECTION'
              to1='/menjens'
              to2='/menshoes'
              to3='/mennewcollection'
            />
          </NavLink>
          <NavLink to='/women'>
            <Dropdoennavcomponent
              mainheading='Women'
              link1='WOMEN JEANS'
              link2='WOMEN SHOES'
              link3='WOMEN NEW COLLECTION'
              to1='/womenjens'
              to2='/womenshoes'
              to3='/womennewcollection'
            />
          </NavLink>
          <NavLink to='/kids'>
            <Dropdoennavcomponent
              mainheading='Kids'
              link1='KIDS JEANS'
              link2='KIDS SHOES'
              link3='KIDS NEW COLLECTION'
              to1='/kidjens'
              to2='/kidshoes'
              to3='/kidnewcollection'
            />
          </NavLink>
          <NavLink to='/men'>
            <Dropdoennavcomponent
              mainheading={`SS'23`}
            />
          </NavLink>
          <NavLink to='/men'>
            <Dropdoennavcomponent
              mainheading='Last Change'
            />
          </NavLink>
        </Flex>
        <Link to='/'>
        <Box>
               <Image
          src='https://dibackend.hostx1.de/logo-diesel.svg'
          alt='logo'
          position='sticky'
          w={300}
          height='30px'
          m='auto'
          p='auto'
          top='0'
          left='50%'
          transform='translate(-50%)'
          zIndex='1'
        />
        </Box>
        </Link>
        <Box>
        <Flex zIndex='1'>
        <Text marginTop={2}>{token}</Text>
        <Box onClick={logout} p={2}>{isAuth && <button >Logout</button>}</Box>
       <Link to='/login'> <Image src={userIcon} alt='login' w={10} border='1px solid white' /></Link>
       <Link to='/contactus'> <Image src={questionIcon} alt='contactus' w={10} border='1px solid white' /></Link>
        <Link><Image src={seatchIcon} alt='login' w={10} border='1px solid white' /></Link>
       <Link> <Image src={fvtIcon} alt='login' w={10} border='1px solid white' /></Link>
        <Link to='/cart'><Image src={bagIcon} alt='login' w={10} border='1px solid white' /></Link>
      </Flex>
        </Box>
       
      </Flex>
    </Box>
  )
}

export default Navbar2
