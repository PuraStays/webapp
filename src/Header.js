import React from 'react';
import logo from './logo.png';
import './App.css';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <header className="header">
      <Row>
        <Col xs="2" md="2">
          <Link to="/">
            <Image src={logo} className="App-logo" alt="logo" />
          </Link>
        </Col>
        <Col xs="8" md="8">
        </Col>
        <Col xs="2" md="2" align="center">
          <h6>Delhi-NCR</h6>
        </Col>
      </Row>
    </header>
  )
}

export default Header;
