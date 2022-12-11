import React from 'react';
import { Navbar } from '../component/Navbar';
import { Container } from '../component/Navbar/style';
import { BrowserRouter, Redirect, Route } from "react-router-dom";
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
      <h1>Home</h1>
      <Route path={"/home"} component={Home}/>
      <Route path={"/pages"} component={Pages}/>
      <Route path={"/templates"} component={Templates}/>
      <Route path={"/Elements"} component={Elements}/>
      <Route path="/">
      <Redirect to={"/home"}/>
      </Route>
    </BrowserRouter>


  )
}


export default Root;