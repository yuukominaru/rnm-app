import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const NavbarComp = () => {
  return (
    <>
      <Navbar expand="lg" sticky="top">
        <Container>
          {/* <Navbar.Brand as={Link} to={"/"}>Rick and Morty</Navbar.Brand> */}
          <img
            alt=""
            src="/Rick-and-Morty.png"
            height="30"
            className="d-inline-block align-top"
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to={"/"}
                className={({ isActive }) =>
                  "underline" + isActive ? " active" : ""
                }
              >
                Character List
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/location"}
                className={({ isActive }) =>
                  "underline" + isActive ? " active" : ""
                }
              >
                Character by Location
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
