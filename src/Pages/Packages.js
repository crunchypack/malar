import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import Package from "../Components/Package";


function Packages() {

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
                title="Brons"
                cardText={text}
                lines={basic}
                icon="thumbs-up"
                variant="info"
                textC="white"
              />
            </Col>
            <Col className="py-2">
              <Package
                title="Silver"
                cardText={text}
                lines={regular}
                icon="hand-scissors"
                variant="primary"
                textC="white"
              />
            </Col>
            <Col className="py-2">
              <Package
                title="Guld"
                cardText={text}
                lines={premium}
                icon="hand-peace"
                variant="success"
                textC="white"
              />
              
            </Col>
          </Row>
          
        </Container>

      </React.Fragment>
    );
  }
export default Packages;
