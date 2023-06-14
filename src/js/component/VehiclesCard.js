import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaRegHeart} from 'react-icons/fa';

const VehiclesCard = ({item, type}) => {
  const { store, actions } = useContext(Context);

  const imageSrc = type === 'vehicles'

  ? 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
  : `https://starwars-visualguide.com/assets/img/vehicles/${item.result.uid}.jpg`;
  
  
  return (
    <Card style={{ width: '18rem' }} id = "idVehicle">
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title className="text-start">{item.result.properties.name}</Card.Title>
        <Card.Text className="text-start">
          Class: {item.result.properties.class}<br></br>
          Speed :  {item.result.properties.speed}<br></br>
          Passengers: {item.result.properties.passengers}<br></br>
        </Card.Text>
        <Container className="d-flex justify-content-between ps-0">
          <Button variant="outline-primary" onClick={() => navigate(`vehicle_details/${item.result.uid}`)}>Learn More!</Button>
          <Button  id="favorite" variant="outline-warning" onClick={()=>{actions.setFavorites(item.result.properties.name)}}>
            <FaRegHeart />
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default VehiclesCard;