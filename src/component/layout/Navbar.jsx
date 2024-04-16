import React from 'react'
import Images from '../Images'
import Container from '../Container'
import List from '../List'
import Listitem from '../Listitem'
import Flex from '../Flex'


const Navbar = () => {
  return (
    <div>
      <Container>
        <Flex>
      <Images src="images/Logo.png" alt="logo"/>
      <List>
        <Listitem>Home</Listitem>
        <Listitem>About</Listitem>
        <Listitem>Contact</Listitem>
        <Listitem>Blog</Listitem>
        <Listitem>Address</Listitem>
        <Listitem>Location</Listitem>
      </List>
      </Flex>
      </Container>
        
    </div>
  )
}

export default Navbar