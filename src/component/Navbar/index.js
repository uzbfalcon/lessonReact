import React from 'react'
import { Container, Item } from './style'

export const Navbar = () => {
  return (
      
    <Container>

      <Item activeStyle={{ color: "red", fontSize: "26px" }} to={"/home"}>Home</Item>

      <Item activeStyle={{ color: "red", fontSize: "26px" }} to={"/elements"}>Elements</Item>

      <Item activeStyle={{ color: "red", fontSize: "26px" }} to={"/pages"}>Pages</Item>

      <Item activeStyle={{ color: "red", fontSize: "26px" }} to={"/templates"}>Templates</Item>

    </Container>
  )
}
