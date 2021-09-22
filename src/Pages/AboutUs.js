import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Banner from "../Components/Banner";
import InfoMain from "../Components/InfoMain";
import aboutBanner from "../images/about.jpg";
import pexels from "../images/pexels.jpg";
import id06 from "../images/id06.png";
import malarna from "../images/malarna.png";
import mvk from "../images/mvk.png";
import maleri from "../images/maleriforetagen.png";
import nojd from "../images/nojdkund.png";

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
          nojd={nojd}
          Malforetag={maleri}
          middle={true}
        />
        <Container className="mainQ">
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
          <Row className="justify-content-md-center bottom-space">
            <Col md="auto">
              <Card style={{ width: "18rem" }} className="h-100 text-center border-0">
                <Card.Img src={maleri} />
                <Card.Body>
                  <Card.Text>
                    Vi på Målaresset garanterar att alla våra jobb utförs av
                    profesionella hantverkare med dokumenterad erfarenhet från
                    branschen och yrkesbevis.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md="auto">
              <Card style={{ width: "20rem"}} className="h-100 text-center border-0">
                <Card.Img src={nojd} />
                <Card.Body>
                  <Card.Text>
                    Måleriföretagens medlemsföretag omfattas en extra garanti på
                    två år av utfört måleriarbete. Det betyder att du kan vara
                    trygg när du köper tjänster från oss.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-md-center d-flex ">
            <Col md="auto">
              <Card style={{ width: "20rem"  }} className="h-100 text-center border-0">
                <Card.Img src={id06} />
                <Card.Body>
                  <Card.Text>
                    ID06-Systemet bidrar till att förenkla säkerhetsarbetet på
                    arbetsplatsen. För ett effektivt fungerande
                    olycksförebyggande arbete är det av största vikt att känna
                    till och kontrollera vilka som vistas på arbetsplatsen,
                    vilka arbeten som pågår och vilken säkerhetsinstruktion
                    varje individ har fått.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md="auto" >
              <Card style={{ width: "20rem"}} className="h-100 text-center border-0">
                <Card.Img src={malarna} />
                <Card.Body>
                  <Card.Text>
                    Målaresset är fackligt anslutna och därmed tillämpas
                    kollektivavtal med avtalsenliga villkor och löner.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto">
              <Card style={{ width: "18rem" }} className="h-100 text-center border-0">
                <Card.Img src={mvk} />
                <Card.Body>
                  <Card.Text>
                    Målaressets hantverkare har genomfört en branchanpassad utbildning och
                    är därmed behöriga våtrumsmålare.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default AboutUs;

// </Row>
// <Row>
//   <Col>
//     <img src={nojd} alt="partner logga" className="img-fluid" />
//   </Col>
//   <Col>
//     Måleriföretagens medlemsföretag omfattas en extra garanti på två
//     år av utfört måleriarbete. Det betyder att du kan vara trygg när
//     du köper tjänster från oss.
//   </Col>
