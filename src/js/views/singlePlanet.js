import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Context } from '../store/appContext';

import '../../styles/demo.css';
import { FaArrowLeft } from 'react-icons/fa';

const SinglePlanet = () => {
  const params = useParams();
  const { id } = params;
  const { store } = useContext(Context);
  const [actualPage, setActualPage] = useState();

  useEffect(() => {
    if (store.planets === 0) return;
    const actualType = store.planets.find((item) => item.result.uid === id);
    setActualPage(actualType);
  }, [params]);

  return (
    <>
      <Container className="m-5">
        <Row>
          <Col xs={12} md={7} className="text-center">
            <Image id="singleImg" src={`https://starwars-visualguide.com/assets/img/planets/${actualPage?.result.uid}.jpg`} alt="..." />
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
            <p>Climate:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.climate}</p>
          </Col>
          <Col>
            <p>Population:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.population}</p>
          </Col>
          <Col>
            <p>Diameter:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.diameter}</p>
          </Col>
          <Col>
            <p>Terrain:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.terrain}</p>
          </Col>
          <Col>
            <p>Surface water:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.surface_water}</p>
          </Col>
          <Col>
            <p>Orbital period:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.orbital_period}</p>
          </Col>
        </Row>
      </Container>
	  <Container className="fixed-bottom d-flex justify-content-end me-5 mb-5">
        <Link to="/"><FaArrowLeft/>Go Back</Link>
      </Container>
    </>
  );
};

export default SinglePlanet;
