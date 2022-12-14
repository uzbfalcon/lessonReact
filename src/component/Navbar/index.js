import React from 'react'
import { Container, Item } from './style'

export const Navbar = () => {
  return (
      
    <Container>

      <Item  to={"/home"}>Home</Item>

      <Item  to={"/elements"}>Elements</Item>

      <Item  to={"/pages"}>Pages</Item>

      <Item  to={"/templates"}>Templates</Item>

    </Container>
  )
}
