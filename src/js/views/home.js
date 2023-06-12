import React from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard";
import PlanetCard from "../component/PlanetCard";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => (
	<div className="text-center mt-5 bg-black">
		<h1 className="text-white">Characters</h1>
    <Row xs={1} md={2} lg={4} className="g-3">
      <Col><CharacterCard/></Col>
      <Col><CharacterCard/></Col>
      <Col><CharacterCard/></Col>
      <Col><CharacterCard/></Col>
    </Row>
    <h1 className="text-white mt-4">Planets</h1>
    <Row xs={1} md={2} lg={4} className="g-3 ">
      <Col><PlanetCard/></Col>
      <Col><PlanetCard/></Col>
      <Col><PlanetCard/></Col>
      <Col><PlanetCard/></Col>
    </Row>	
	</div>
);
