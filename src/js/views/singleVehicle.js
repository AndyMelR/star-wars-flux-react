import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Context } from '../store/appContext';

import '../../styles/demo.css';

const SingleVehicle = () => {
  const params = useParams();
  const { id } = params;
  const { store } = useContext(Context);
  const [actualPage, setActualPage] = useState();

  useEffect(() => {
    if (store.vehicles === 0) return;
    const actualType = store.vehicles.find((item) => item.result.uid === id);
    setActualPage(actualType);
  }, [params]);

  return (
    <>
      <Container className="m-5">
        <Row>
          <Col xs={12} md={7} className="text-center">
            <Image id="singleImg" src={`https://starwars-visualguide.com/assets/img/vehicles/${actualPage?.result.uid}.jpg`} alt="..." />
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
            <p>Class:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.vehicle_class}</p>
          </Col>
          <Col>
            <p>Length:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.length}</p>
          </Col>
          <Col>
            <p>Passengers:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.passengers}</p>
          </Col>
          <Col>
            <p>Max atmosphering speed:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.max_atmosphering_speed}</p>
          </Col>
          <Col>
            <p>Cargo Capacity:</p>
            <p className="text-dark ps-1">{actualPage?.result.properties.cargo_capacity}</p>
          </Col>
        </Row>
      </Container>
      <Container className="fixed-bottom d-flex justify-content-end me-5 mb-5">
        <Link to="/">Go Back</Link>
      </Container>
    </>
  );
};

export default SingleVehicle;
