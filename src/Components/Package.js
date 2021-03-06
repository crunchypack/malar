import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{useState} from "react";
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

function Package(props) {
  const [PackageMsg, setPackageMsg] = useState("");
  const [Email, setEmail] = useState("");
  const [Package, setPackage] = useState(props.title);

  
  let items = props.lines.map((item, index) => (
    <ListGroupItem variant={props.variant} key={index}>
      <FontAwesomeIcon icon="check" /> {item}
    </ListGroupItem>
  ));
  let tillval = "";
  if(props.tillBool){
    tillval = (<>
      <ListGroupItem >Tillval:</ListGroupItem>
    <ListGroupItem variant={props.variant}><FontAwesomeIcon icon="plus"/> {props.tillval}</ListGroupItem></>
    )
  }
  

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
      <Card bg={props.variant} text={props.textC} className="h5 h-100">
        <Card.Body>
          <div className="IconContainer">
            <img src={props.medal} alt="medal" className='img-fluid'/>
          </div>
          <Card.Title className="text-center">{props.title}</Card.Title>
          <Card.Text>{props.cardText}</Card.Text>
        </Card.Body>
        <ListGroup className="listGroup" variant={props.variant}>
          {items}
          {tillval}
          
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
          St??ng
        </Button>
        <Form action="/package.php" method="post">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" name="email" value={Email} onChange={e=>setEmail(e.target.value)} required/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelect" label="Paket">
              <Form.Select
                aria-label="Floating label select example"
                defaultValue= {Package}
                name= "package"
                onChange={e=>setPackage(e.target.value)}
              >
                <option value="Brons">Brons</option>
                <option value="Silver">Silver</option>
                <option value="Guld">Guld</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <FloatingLabel controlId="floatingTextarea2" label="Meddelande">
              <Form.Control
                as="textarea"
                placeholder="Meddelande"
                style={{ height: "100px" }}
                value= {PackageMsg}
                name="message"
                onChange={e=>{setPackageMsg(e.target.value)}}
              />
            </FloatingLabel>
          </Form.Group>
          <Button variant="success" type="submit" name="submit">
            Skicka
          </Button>
        </Form>
      </Modal>
    </React.Fragment>
  );
}
export default Package;
