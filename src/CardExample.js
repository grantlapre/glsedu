import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import cs1 from './cs1.png';
import am1 from './am1.png';
import ff1 from './ff1.png';
import cv1 from './cv1.png';

import './App.css';


function CardExample() {
  return (
  <Container className="p-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cs1} width="180" height="100" />
      <Card.Body>
        <Card.Title>Cyber Security</Card.Title>
        <Card.Text>
        Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={am1} width="180" height="100" />
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

        </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ff1} width="180" height="100" />
      <Card.Body>
        <Card.Title>Fraud & Financial Crime</Card.Title>
        <Card.Text>
        It can include fraudulent sales of goods and services, investment scams, phishing, and romance scams, among others. Identity theft: This occurs when someone uses another person's identity to obtain goods, services, or financial gain.
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cv1} width="180" height="100" />
      <Card.Body>
        <Card.Title>Cloud & Virtualisation</Card.Title>
        <Card.Text>
        Virtualization is a technology that allows users to create virtual servers, networks, and storage in the cloud. Cloud computing is a more comprehensive idea that refers to delivering numerous services, including computing resources ...e.g., virtual machines..., storage, databases, and applications, over the Internet.
        </Card.Text>

      </Card.Body>
    </Card>

  </Container>

);
  }

export default CardExample;