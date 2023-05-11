import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from './style'

export const Navbar = () => {
  return (

    <Container>

      <NavLink to={"/home"}>Home</NavLink>

      <NavLink to={"/templates"}>Templates</NavLink>

      <NavLink to={"/pages"}>Pages</NavLink>

      <NavLink to={"/elements"}>Login</NavLink>


    </Container>
  )
}
