import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

export function ModalComp(props) {
  const [charaLocation, setCharaLocation] = useState(() => {
    return JSON.parse(localStorage.getItem("charaLocation") || []);
  });

  const [location, setLocation] = useState("");

  const id = props.character.id;
  const name = props.character.name;
  const image = props.character.image;

  const addLocationSubmit = (e) => {
    e.preventDefault();

    let data = {
      id,
      name,
      image,
      location,
    };

    setCharaLocation([...charaLocation, data]);
    setLocation("");
  };

  useEffect(() => {
    localStorage.setItem("charaLocation", JSON.stringify(charaLocation));
  }, [charaLocation]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Location
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={addLocationSubmit} id="locationForm">
          <Form.Group className="mb-3" controlId="formAddLocation">
            <Form.Label>
              Add your desired location for this character
            </Form.Label>
            <Form.Control
              type="text"
              required
              autoFocus
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>

        <Button
          variant="success"
          type="submit"
          form="locationForm"
          onClick={() => window.location.reload(false)}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
