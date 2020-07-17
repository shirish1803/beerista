import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/homeComponent';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Button, Label, Card } from 'reactstrap';
import Header from './Components/headerComponent';
import Cardd from './Components/cardComponents';
import CardDetail from './Components/cardDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <CardDetail />
    </div>
  );
}

export default App;
