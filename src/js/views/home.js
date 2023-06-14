import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import CharacterCard from '../component/CharacterCard';
import PlanetCard from '../component/PlanetCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VehiclesCard from '../component/VehiclesCard';

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAllCharacters();
    actions.getAllPlanets();
    actions.getAllVehicles();
  }, []);

  return (
    <div className="text-center mt-5 bg-black">
      <div className="scroll-container">
        <h1 className="text-white">Characters</h1>
        <div className="horizontal-scroll">
          <Row xs={1} md={2} lg={4} className="g-3">
            {store.characters.map((character) => (
              <Col key={character.uid}>
                <CharacterCard item={character} type="characters" />
              </Col>
            ))}
          </Row>
        </div>
        <h1 className="text-white mt-4">Planets</h1>
        <div className="horizontal-scroll">
          <Row xs={1} md={2} lg={4} className="g-3">
            {store.planets.map((planet) => (
              <Col key={planet.uid}>
                <PlanetCard item={planet} type="planets" />
              </Col>
            ))}
          </Row>
        </div>
        <h1 className="text-white mt-4">Vehicles</h1>
        <div className="horizontal-scroll">
          <Row xs={1} md={2} lg={4} className="g-3">
            {store.vehicles.map((vehicle) => (
              <Col key={vehicle.uid}>
                <VehiclesCard item={vehicle} type="planets" />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};
