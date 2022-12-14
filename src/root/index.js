import React from 'react';
import { Navbar } from '../component/Navbar';
import { Container } from '../component/Navbar/style';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Elements } from '../component/Elements';
import { Pages } from '../component/Pages';
import { Home } from '../component/Home';
import { Templates } from '../component/Templates';


export const Root = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
      </Container>
      <Routes path={"/home"} element={Home}/>
      <Routes path={"/pages"} element={Pages}/>
      <Routes path={"/templates"} element={Templates}/>
      <Routes path={"/Elements"} element={Elements}/>
      <Routes path="/">
      <Route to={"/home"}/>
      </Routes>
    </BrowserRouter>
  )
}


export default Root;