import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Package from "../Components/Package";
import Modal from "react-modal";

function Packages() {


    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
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
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    let text = "Lorem ipsum signu rato fatzo paint wall minu rata grobus mkes";
    let basic = [
      "Spackling av mindre hål och fogning av springor",
      "Målning av tak och väggar till fullgod täckning",
    ];
    let regular = [
      ...basic,
      "Fogning av vinklar och springor",
      "Målning av lister, karmar, foder",
    ];
    let premium = [
      ...regular,
      "Slipning, grundmålning och fläckspackling",
      "Bredspackling",
      "Priming",
    ];
    return (
      <React.Fragment>
        <Container fluid="sm">
          <Row>
            <Col>
              <h2>Våra renoverings paket</h2>
            </Col>
          </Row>

          <Row style={{ margin: "2% 0" }}>
            <Col className="py-2">
              <Package
                title="Basic"
                cardText={text}
                lines={basic}
                icon="thumbs-up"
                variant="info"
                textC="white"
              />
            </Col>
            <Col className="py-2">
              <Package
                title="Regular"
                cardText={text}
                lines={regular}
                icon="hand-scissors"
                variant="primary"
                textC="white"
              />
            </Col>
            <Col className="py-2">
              <Package
                title="Premium"
                cardText={text}
                lines={premium}
                icon="hand-peace"
                variant="success"
                textC="white"
              />
              
            </Col>
          </Row>
          
        </Container>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </React.Fragment>
    );
  }
export default Packages;
