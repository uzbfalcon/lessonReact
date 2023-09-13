import React from 'react';
import { Navbar } from '../component/Navbar';
import { Container } from '../component/Navbar/style';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from '../component/Elements';
import { Pages } from '../component/Pages';
import { Home } from '../component/Home';
import { Templates } from '../component/Templates';
import Counter from '../component/Counter';
import API from '../component/Apitutorial';
import NetSpeed from '../component/Net_speed';
import Student from '../component/Inputs';


export const Root = () => {
  return (
    <BrowserRouter>
    {/* <Counter/> */}
    {/* <API/> */}
    {/* <Student/> */}
    <NetSpeed/>
      {/* <Container>
        <Navbar />
      </Container>
      <Routes>
      

        <Route path={"/home"} element={<Home />} />
        <Route path={"/pages"} element={<Pages />} />
        <Route path={"/templates"} element={<Templates />} />
        <Route path={"/Login"} element={<Login />} />
        <Route path="/">
          <Route to={"/home"} /></Route>
      </Routes> */}
    </BrowserRouter>
  )
}


export default Root;