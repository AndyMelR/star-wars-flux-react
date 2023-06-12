import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaRegHeart} from 'react-icons/fa';

const CharacterCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://starwars-visualguide.com/assets/img/characters/35.jpg" />
      <Card.Body>
        <Card.Title className="text-start">Leia</Card.Title>
        <Card.Text className="text-start">
          Gender: Female <br></br>
          Hair Color : Brown<br></br>
          Eye-color: Brown<br></br>
        </Card.Text>
        <Container className="d-flex justify-content-between ps-0" >
            <Button variant="outline-primary">Learn More!</Button>
            <Button variant="outline-warning"><FaRegHeart/></Button>
        </Container>
       
    
        
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;