import Navigation_Bar from './Components/Navigation_Bar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home'
import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import MainJumbo from './Components/MainJumbo'



function Anciano() {
  return (
      <>
        <Navigation_Bar/>

        <MainJumbo/>



      </>
  )
}

export default Anciano;
