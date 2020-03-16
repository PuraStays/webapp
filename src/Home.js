import React from 'react';
import logo from './logo.png';
import './App.css';
import { Button, Form, Row, Col, Text, Image, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Home() {
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
        <Link to="/pick">
          <Button variant="primary" size="lg">Skip The City</Button>
        </Link>
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
      <section name="stories">
        <h5>Travel Stories</h5>
        <Row>
          <Col xs="4" md="4">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="http://placehold.it/100x50" />
            <Card.Body>
              <Card.Title>Story 1</Card.Title>
              <Card.Text>
                Blah Blah Blah !!!
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
