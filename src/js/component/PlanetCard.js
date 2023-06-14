import React, { useContext } from 'react';
import { useNavigate } from "react-router";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegHeart } from 'react-icons/fa';
import { Context } from '../store/appContext';


const PlanetCard = ({ item, type }) => {
  const { store, actions } = useContext(Context);
	const navigate = useNavigate();

  const imageSrcPl = type === 'planets' && item.result.uid == 1
  ? 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
  : `https://starwars-visualguide.com/assets/img/${type}/${item.result.uid}.jpg`






  return (
    <Card style={{ width: '18rem'}} id="idPlanet">
      <Card.Img variant="top" src={imageSrcPl} />
      <Card.Body>
      <Card.Title className="card text-start">{item.result.properties.name}</Card.Title>
        <Card.Text className="card text-start">
          Climate: {item.result.properties.climate} <br />
          Population: {item.result.properties.population} <br />
          Diameter: {item.result.properties.diameter} <br />
          Gravity: {item.result.properties.gravity} <br />
        </Card.Text>
        <Container className="d-flex justify-content-between ps-0">
          <Button variant="outline-primary" onClick={() => navigate(`planet_details/${item.result.uid}`)}>Learn More!</Button>
          <Button  id="favorite" variant="outline-warning" onClick={()=>{actions.setFavorites(item.result.properties.name)}}>
            <FaRegHeart />
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default PlanetCard;
