import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Home } from "./components/Home"
import {About} from "./components/About"
import {Contact} from "./components/Contact"
import {Nomatch } from "./components/Nomatch"
import {Layout} from "./components/Layout"
import {Navigation} from "./components/Navbar"
import {Jumbotron} from "./components/Jumbotron"


function App() {
  return (
   <React.Fragment>
     <Navigation/>
     <Jumbotron/>
     <Layout>
<Router>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route component={Nomatch}/>
  </Switch>
</Router>
</Layout>
   </React.Fragment>
  );
}

export default App;
