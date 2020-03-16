import React from 'react';
import logo from './logo.png';
import './App.css';
import { Button, Form, Row, Col, Text, Image, Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Form className="inquiryForm" align="center">
        <Form.Group controlId="inquiry">
          <Form.Control type="text" placeholder="City To Escape from" />
          <Row>
            <Col>
              <Form.Control type="date" />
            </Col>
            <Col>
              <Form.Control type="date" />
            </Col>
          </Row>
          <Form.Control type="number" placeholder="No. of Guests"/>
        </Form.Group>
        <Button variant="primary" size="lg">Skip The City</Button>
      </Form>
      <section name="nearby">
        <h5>Nearby Getaways</h5>
        <br />
        <Container>
          <Row>
            <Col xs={6} md={3} align="center">
              <Image src="http://www.placehold.it/171x180" rounded />
              <h4>Rishikesh</h4>
            </Col>
            <Col xs={6} md={3} align="center">
              <Image src="http://www.placehold.it/171x180" rounded />
              <h4>Nanital</h4>
            </Col>
            <Col xs={6} md={3} align="center">
              <Image src="http://www.placehold.it/171x180" rounded />
              <h4>Haridwar</h4>
            </Col>
            <Col xs={6} md={3}>
              <Image src="http://www.placehold.it/171x180" rounded />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default App;
