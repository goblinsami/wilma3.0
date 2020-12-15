import Navigation_Bar from './Components/Navigation_Bar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home'
import Footer from './Components/Pages/Footer'
import './App.css'
import React from 'react'



function App() {
  return (
    <Router>
        <Navigation_Bar/>
            <Switch>
          <Route path='/' exact component={Home}   />
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
