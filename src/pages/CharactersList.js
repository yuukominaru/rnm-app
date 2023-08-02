import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useCharacters } from "../hooks/useCharacters";
import { CardComp } from "../components/CardComp";
import { Link } from "react-router-dom";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();
  console.log({ error, loading, data });

  if (localStorage.length === 0) {
    localStorage.setItem("charaLocation", JSON.stringify([]));
  }

  if (loading)
    return (
      <Container fluid>
        <div className="position-absolute top-50 start-50 translate-middle">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Container>
    );

  if (error)
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="text-danger">Error</h1>
      </div>
    );

  return (
    <Container className="CharacterList">
      <Row xs="1" sm="2" md="3" lg="4">
        {data.characters.results.map((character) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={`/${character.id}`}
              key={character.id}
            >
              <CardComp character={character} />
            </Link>
          );
        })}
      </Row>
    </Container>
  );
}
