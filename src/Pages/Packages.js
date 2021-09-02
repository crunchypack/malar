import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import Package from "../Components/Package";
import Banner from '../Components/Banner';
import serviceBanner from '../images/rolleBanner.jpg';
import maleri from '../images/maleriforetagen.png';
import nojd from '../images/nojdkund.png';


function Packages() {

  let bronsText = "Målaressets Brons-paket är för dig som vill sätta din egna prägel på ditt hem genom en uppfräschning eller kulörbyte.";
  let silverText = "Målaressets Silver-paket är för dig som vill ha jämna, fina och fräscha väggar.";
  let guldText = "Målaressets Guld-paket är för dig som vill ha hela jobbet gjort från grunden för bästa möjliga resultat.";
    let brons = [
      "Spackling och lagning av mindre hål",
      "Målning av tak och väggar till fullgod täckning",
    ];
    let silver = [
      ...brons,
      "Fogning av vinklar",
      "Målning av lister, karmar, foder",
    ];
    let guld = [
      ...silver,
      "Slipning, grundmålning och fläckspackling",
      "Bredspackling",
      "Priming",
    ];
    return (
      <React.Fragment>
        <Banner title="Renoveringspaket"
                 mainTitle="Välj bland våra renoveringspaket"
                  banner={serviceBanner} text='För att göra det enklare för våra kunder att välja måleritjänst har vi på
                   Målaresset tagit fram tre olika renoveringspaket där du själv kan välja vilka behandlingar som ska ingå i arbetet.'
                   nojd={nojd} 
                   Malforetag={maleri} 
                   middle={true}
                   />
        <Container fluid="sm">
          <Row>
            <Col>
              <h2>Målaressets renoveringspaket</h2>
            </Col>
          </Row>

          <Row style={{ margin: "2% 0" }}>
            <Col className="py-2 col-lg-4 col-sm-7 ">
              <Package
                title="Brons"
                cardText={bronsText}
                lines={brons}
                //icon="thumbs-up"
                variant="dark"
                textC="white"
              />
            </Col>
            <Col className="py-2 col-lg-4 col-sm-7 ">
              <Package
                title="Silver"
                cardText={silverText}
                lines={silver}
               // icon="hand-scissors"
                variant="gradient"
                textC="white"
              />
            </Col>
            <Col className="py-2 col-lg-4 col-sm-7 ">
              <Package
                title="Guld"
                cardText={guldText}
                lines={guld}
               // icon="hand-peace"
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
