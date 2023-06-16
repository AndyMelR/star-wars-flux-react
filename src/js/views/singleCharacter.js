import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Context } from '../store/appContext';

import '../../styles/demo.css';
import { FaArrowLeft } from 'react-icons/fa';

const SingleCharacter = () => {
  const params = useParams();
  const { id } = params;
  const { store } = useContext(Context);
  const [actualPage, setActualPage] = useState();

  useEffect(() => {
    if (store.characters === 0) return;
    const actualType = store.characters.find((item) => item.result.uid === id);
    setActualPage(actualType);
  }, [params]);

  return (
    <>
      <Container className="m-5">
        <Row>
          <Col xs={12} md={7} className="text-center">
            <Image id="singleImg" src={`https://starwars-visualguide.com/assets/img/characters/${actualPage?.result.uid}.jpg`} alt="..." />
          </Col>
          <Col xs={12} md={5} className="text-start">
            <h1 className="p-4 mb-3">{actualPage?.result.properties.name}</h1>
            <p className="p-2">{actualPage?.result.description}</p>
          </Col>
        </Row>
      </Container>
      <Container className="text-danger p-5 border-top border-danger m-5">
        <Row>
          <Col>
            <p>Gender:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.gender}</p>
          </Col>
          <Col>
            <p>Height:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.height}</p>
          </Col>
          <Col>
            <p>Hair color:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.hair_color}</p>
          </Col>
          <Col>
            <p>Eye color:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.eye_color}</p>
          </Col>
          <Col>
            <p>Birth year:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.birth_year}</p>
          </Col>
          <Col>
            <p>Gender:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.gender}</p>
          </Col>
        </Row>
      </Container>
	  <Container className="fixed-bottom d-flex justify-content-end me-5 mb-5">
        <Link to="/"><FaArrowLeft/>Go Back</Link>
      </Container>
    </>
  );
};

export default SingleCharacter;
