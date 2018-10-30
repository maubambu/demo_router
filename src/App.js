import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props)=><Home {...props}></Home>}></Route>
          <Route path="/products/:id?" render={(props)=><Products {...props}></Products>}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
