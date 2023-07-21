import React from "react";
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";

export const CardComp = ({ character }) => {
  return (
    <Col>
      <Card className="m-3">
        <Card.Img variant="top" src={character.image} alt={character.name} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
