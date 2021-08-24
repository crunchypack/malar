import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../Components/Banner";
import InfoMain from "../Components/InfoMain";
import aboutBanner from "../images/about.jpg";
import pexels from "../images/pexels.jpg";
import id06 from '../images/id06.png';
import malarna from '../images/malarna.png';
import mvk from '../images/mvk.png';
import maleri from '../images/maleriforetagen.png';

class AboutUs extends React.Component {
  render() {
    let text =
      "Företaget har ärvts i 5 generationer och lyckats innovera samt anpassa sig till dagens omständiga samhälle.";
    let text1 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla convallis felis vel feugiat. Mauris gravida elit facilisis, cursus ante ac, accumsan enim. Mauris ut odio fringilla, dapibus dui quis, tristique sapien. Etiam a vestibulum libero, eget mattis nisl. Vestibulum tincidunt aliquet vestibulum. ipsum dolor sit amet, consectetur adipiscing elit. In fringilla convallis felis vel feugiat. Mauris gravida elit facilisis, cursus ante ac, accumsan enim. Mauris ut odio fringilla, dapibus dui quis, tristique sapien.";
    let title = "Viktig titel!";
    return (
      <React.Fragment>
        <Banner
          title="Grundad 1899"
          mainTitle="Över 100 års erfarenhet"
          text={text}
          banner={aboutBanner}
        />
        <Container className="mainQ" >
          <InfoMain
            orderText={{ order: 1 }}
            orderImg={{ order: 2 }}
            title={title}
            text={text1}
            img={pexels}
          />
          <InfoMain
            orderText={{ order: 1 }}
            orderImg={{ order: 2 }}
            title={title}
            text={text1}
            img={aboutBanner}
          />
          </Container>
          <Container fluid>
          <Row>
              <Col><img src={id06} alt="partner logga"/></Col>
              <Col><img src={malarna} alt="partner logga"/></Col>
              <Col><img src={mvk} alt="partner logga"/></Col>
              <Col><img src={maleri} alt="partner logga"/></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default AboutUs;
