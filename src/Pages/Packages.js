import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import Package from "../Components/Package";
import Banner from '../Components/Banner';
import serviceBanner from '../images/ServiceCard.jpg';
import maleri from '../images/maleriforetagen.png';
import nojd from '../images/nojdkund.png';


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
        <Banner title="Renoveringspaket"
                 mainTitle="Välj bland våra renoveringspaket"
                  banner={serviceBanner} text='Målaresset lämnar gärna en offert på önskade arbeten. Klicka på "kontakta oss" för att komma till formuläret,
                  ange dina kontaktuppgifter och beskriv så utförligt du kan,
                  dina önskemål, visioner och tankar. 
                  Vi lovar att återkomma så fort vi kan.'
                   nojd={nojd} 
                   Malforetag={maleri} 
                   middle={true}
                   />
        <Container fluid="sm">
          <Row>
            <Col>
              <h2>Våra renoveringspaket</h2>
            </Col>
          </Row>

          <Row style={{ margin: "2% 0" }}>
            <Col className="py-2">
              <Package
                title="Basic"
                cardText={text}
                lines={basic}
                icon="thumbs-up"
                variant="dark"
                textC="white"
              />
            </Col>
            <Col className="py-2">
              <Package
                title="Regular"
                cardText={text}
                lines={regular}
                icon="hand-scissors"
                variant="gradient"
                textC="white"
              />
            </Col>
            <Col className="py-2">
              <Package
                title="Premium"
                cardText={text}
                lines={premium}
                icon="hand-peace"
                variant="dark"
                textC="white"
              />
              
            </Col>
          </Row>
          
        </Container>

      </React.Fragment>
    );
  }
export default Packages;
