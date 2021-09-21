import '../App.css';
import React from 'react'
import ServiceCards from '../Components/ServiceCards';
import Banner from '../Components/Banner';
import spackel from '../images/spackel.jpg';
import maleri from '../images/maleriforetagen.png';
import nojd from '../images/nojdkund.png';
import { Col, Container, Row } from 'react-bootstrap';
import Package from '../Components/Package';

import bronzeMed from "../images/bronze-medal.png";
import silverMed from "../images/silver-medal.png";
import goldMed from "../images/gold-medal.png";

class Services extends React.Component {
    render(){
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
                <Banner title="Behöver du rådgivning?"
                 mainTitle="Kontakta oss för ett kostnadsfritt besök"
                  banner={spackel} text='Målaresset lämnar gärna en offert på önskade arbeten. Klicka på "kontakta oss", ange dina kontaktuppgifter och beskriv så utförligt du kan, dina önskemål, visioner och tankar. Vi lovar att återkomma så fort vi kan.'
                   button={true}
                   nojd={nojd} 
                   Malforetag={maleri} 
                   middle={true}
                   />
                <ServiceCards/>
                <Container fluid="sm">
          <Row>
            <Col>
              <h2>Målaressets renoveringspaket</h2>
            </Col>
          </Row>

          <Row style={{ margin: "2% 0" }}>
            <Col className="py-2">
              <Package
                title="Brons"
                cardText={bronsText}
                lines={brons}
                icon="thumbs-up"
                tillval="Målning av lister, karmar och foder"
                tillBool="true"
                variant="bronze"
                textC="dark"
                medal={bronzeMed}
              />
            </Col>
            <Col className="py-2">
              <Package
                title="Silver"
                cardText={silverText}
                lines={silver}
                icon="hand-scissors"
                tillval="Priming"
                tillBool="true"
                variant="silver"
                textC="dark"
                medal={silverMed}
              />
            </Col>
            <Col className="py-2">
              <Package
                title="Guld"
                cardText={guldText}
                lines={guld}
                icon="hand-peace"
                variant="gold"
                textC="dark"
                medal={goldMed}
              />
            </Col>
          </Row>
        </Container>
            </React.Fragment>
        )
    }
    
}

export default Services;