import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router";
import { ModalComp } from "../components/ModalComp";

export default function Character() {
  const { id } = useParams();
  const { loading, error, data } = useCharacter(id);
  // const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(loading, error, data);

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
    <>
      <Container className="Character mt-3" key={data.character.id}>
        <Row>
          <Col sm md>
            <Row>
              <Image src={data.character.image} fluid />
            </Row>

            <Row className="p-3">
              <Button variant="primary" onClick={handleShow}>
                Add Location
              </Button>

              <ModalComp show={show} onHide={handleClose} />
            </Row>
          </Col>
          <Col sm md>
            <h2>{data.character.name}</h2>
            <div>
              <b>Status:</b> {data.character.status}
              <br></br>
              <b>Species:</b> {data.character.species}
              <br></br>
              <b>Gender:</b> {data.character.gender}
              <br></br>
              <b>Origin:</b> {data.character.origin.name}
              <br></br>
              <b>Episodes:</b>
              <ul>
                {data.character.episode.map((episode) => {
                  return (
                    <li>
                      <b><i>{episode.name}</i></b> - {episode.episode}
                      <br></br>
                      {episode.air_date}
                    </li>
                  );
                })}
              </ul>
              <br></br>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
