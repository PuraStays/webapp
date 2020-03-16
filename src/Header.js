import React from 'react';
import logo from './logo.png';
import './App.css';
import { Image } from 'react-bootstrap';

function Header(){
  return (
    <header className="header">
      <Image src={logo} className="App-logo" alt="logo" />
    </header>
  )
}

export default Header;
