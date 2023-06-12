import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaRegHeart} from 'react-icons/fa';

const PlanetCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://starwars-visualguide.com/assets/img/planets/21.jpg" />
      <Card.Body>
        <Card.Title className="text-start">Leia</Card.Title>
        <Card.Text className="text-start">
          Population: 22,000,000,000 <br></br>
          Terrain : Cityscape <br></br>
        </Card.Text>
        <Container className="d-flex justify-content-between ps-0" >
            <Button variant="outline-primary">Learn More!</Button>
            <Button variant="outline-warning"><FaRegHeart/></Button>
        </Container>
       
    
        
      </Card.Body>
    </Card>
  );
}

export default PlanetCard;