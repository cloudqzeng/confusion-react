import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './shared/dishes';

class App extends Component{
  constructor(props){
  super(props);

  this.state = {
    dishes: DISHES
  };
}

  render(){
    return(
      <div className="App">
          <Navbar dark color="primary">
             <div className="container">
                  <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
             </div>
             <Menu dishes={this.state.dishes}/>
          </Navbar>
      </div>

    );
   
 }            
}

export default App;
