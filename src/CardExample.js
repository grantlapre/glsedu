import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';


function CardExample() {
  return (
  <Container className="p-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="cs1.png/100px180" />
      <Card.Body>
        <Card.Title>Cyber Security</Card.Title>
        <Card.Text>
        Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.
        </Card.Text>
        <Button variant="primary">CS articles & news</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="am1.png/100px180" />
      <Card.Body>
        <Card.Title>AML/CFT</Card.Title>
        <Card.Text>
        In order to establish a strong and effective AML-CFT system with comprehensive
rules covering anti-money-laundering and counter-terrorist financing requirements for
both banking and non-banking sectors, it is essential to set up an adequately
operational legal and institutional or administrative framework not only with the
regulatory power that provides competent authorities with the necessary duties,
powers and sanctions but also with the laws that create money laundering and terrorist
financing offenses, plus enforcement power that provides for freezing, seizing and
confiscation of the proceeds of crime and terrorist funding. 
        </Card.Text>
        <Button variant="primary">CS articles & news</Button>
      </Card.Body>
    </Card>
  </Container>
);
  }

export default CardExample;