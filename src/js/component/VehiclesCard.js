import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaRegHeart} from 'react-icons/fa';

const VehiclesCard = () => {
  const { store, actions } = useContext(Context);

  
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://starwars-visualguide.com/assets/img/starships/10.jpg" />
      <Card.Body>
        <Card.Title className="text-start">Model YT-1300 light freighter</Card.Title>
        <Card.Text className="text-start">
          Class:  Light Freighter<br></br>
          Speed :  1,050km/h<br></br>
          Passengers: 6<br></br>
        </Card.Text>
        <Container className="d-flex justify-content-between ps-0" >
            <Button variant="outline-primary">Learn More!</Button>
            <Button id="favorite" type="button" className="btn btn-outline-warning"><FaRegHeart/></Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default VehiclesCard;