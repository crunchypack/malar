import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Card,
  FloatingLabel,
  Form,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Modal from "react-modal";
import "./Packages.css";
import "animate.css";
import ace3 from '../images/Ace3.png';

function Package(props) {
  let items = props.lines.map((item, index) => (
    <ListGroupItem variant={props.variant} key={index}>
      <FontAwesomeIcon icon="check" /> {item}
    </ListGroupItem>
  ));

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "50%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#198754";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <React.Fragment>
      <Card bg={props.variant} text={props.textC} className="h4 h-100">
        <Card.Body>
          <div className="IconContainer">
            <img src={ace3} alt="ace of spades" className='img-fluid'/>
          </div>
          <Card.Title className="text-center">{props.title}</Card.Title>
          <Card.Text>{props.cardText}</Card.Text>
        </Card.Body>
        <ListGroup className="listGroup" variant={props.variant}>
          {items}
        </ListGroup>
        <Button variant={props.variant} onClick={openModal}>
          Boka
        </Button>
      </Card>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
         style={customStyles}
        contentLabel="Example Modal"
        className=""
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Boka</h2>
        <Button variant="danger" onClick={closeModal}>
          Stäng
        </Button>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelect" label="Paket">
              <Form.Select
                aria-label="Floating label select example"
                defaultValue={props.title}
              >
                <option value="Basic">Basic</option>
                <option value="Regular">Regular</option>
                <option value="Premium">Premium</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <FloatingLabel controlId="floatingTextarea2" label="Meddelande">
              <Form.Control
                as="textarea"
                placeholder="Meddelande"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Form.Group>
          <Button variant="success" onClick={closeModal}>
            Skicka
          </Button>
        </Form>
      </Modal>
    </React.Fragment>
  );
}
export default Package;
