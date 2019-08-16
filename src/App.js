import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import search from './components/search';

 import Navbar from './components/CustomNavbar';

export default class App extends Component {
  componentDidMount() {
   }
  render() {
    return (
  <Router>
    <Navbar/>
      <div>
      <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
      <Route path="/search" component={search} />
       <Route component={Home} />
  </Switch>
  </div>
</Router>
  );
  }

}
