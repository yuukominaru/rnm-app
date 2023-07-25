import React from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CardComp } from "../components/CardComp";

export default function Location() {
  const storage = JSON.parse(localStorage.getItem("charaLocation") || []);
  console.log(storage);

  if (storage.length === 0) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="text-dark-emphasis">Nothing here...</h1>
      </div>
    );
  }

  if (storage.length > 0) {
    return (
      <Container>
        <Row sm="1" md="3" lg="4">
          {storage.map((data) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`/${data.id}`}
                key={data.id}
              >
                <CardComp character={data} />
              </Link>
            );
          })}
        </Row>
      </Container>
    );
  }
}
