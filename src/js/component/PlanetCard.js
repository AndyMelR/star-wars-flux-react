import React from 'react';
import { Card, Container } from 'react-bootstrap';

const PlanetCard = ({ item, type }) => {
  return (
    <Card style={{ width: '18rem'}} id="idPlanet">
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/${type}/${item.result.uid}.jpg`} />
      <Card.Body>
        <Card.Title className="card text-start">{item.name}</Card.Title>
        <Card.Text className="card text-start">
          Climate: {item.climate} <br />
          Population: {item.population} <br />
          Diameter: {item.diameter} <br />
          Gravity: {item.gravity} <br />
        </Card.Text>
        <Container className="card d-flex justify-content-between ps-0"></Container>
      </Card.Body>
    </Card>
  );
};

export default PlanetCard;
