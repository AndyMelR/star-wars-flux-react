import React, { useContext } from 'react';
import { useNavigate } from "react-router";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegHeart } from 'react-icons/fa';
import { Context } from '../store/appContext';

const CharacterCard = ({ item, type }) => {
  const { store, actions } = useContext(Context);
	const navigate = useNavigate();


  return (
    <Card style={{ width: '18rem' }} id="id">
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/${type}/${item.result.uid}.jpg`} />
      <Card.Body>
        <Card.Title className="card text-start">{item.result.properties.name}</Card.Title>
        <Card.Text className="card text-start">
          Gender: {item.result.properties.gender} <br />
          Hair Color: {item.result.properties.hair_color} <br />
          Eye Color: {item.result.properties.eye_color} <br />
        </Card.Text>
        <Container className="d-flex justify-content-between ps-0">
          <Button variant="outline-primary" onClick={() => navigate(`details/${item.result.uid}`)}>Learn More!</Button>
          <Button  id="favorite" variant="outline-warning" onClick={()=>{actions.setFavorites(item.result.properties.name)}}>
            <FaRegHeart />
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
