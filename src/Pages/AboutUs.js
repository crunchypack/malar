import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Banner from "../Components/Banner";
import InfoMain from "../Components/InfoMain";
import aboutBanner from "../images/about.jpg";
import id06 from "../images/id06.png";
import malarna from "../images/malarna.png";
import mvk from "../images/mvk.png";
import maleri from "../images/maleriforetagen.png";
import nojd from "../images/nojdkund.png";
import auro from "../images/Auro.png";

class AboutUs extends React.Component {
  render() {
    let text =
      "Vi på Målaresset arbetar för att erbjuda en tjänst som fokuserar på kundens behov. Vi tror att kvalitet och kompetens alltid vinner i längden.";
    let text1 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla convallis felis vel feugiat. Mauris gravida elit facilisis, cursus ante ac, accumsan enim. Mauris ut odio fringilla, dapibus dui quis, tristique sapien. Etiam a vestibulum libero, eget mattis nisl. Vestibulum tincidunt aliquet vestibulum. ipsum dolor sit amet, consectetur adipiscing elit. In fringilla convallis felis vel feugiat. Mauris gravida elit facilisis, cursus ante ac, accumsan enim. Mauris ut odio fringilla, dapibus dui quis, tristique sapien.";
    let title = "Viktig titel!";
    return (
      <React.Fragment>
        <Banner
          title="Målaresset i Göteborg"
          mainTitle="Vi är yrkesmålare med många år i branschen"
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
            img={aboutBanner}
          />
        </Container>
        <div class="container-fluid d-flex justify-content-center">
        {/* <Container fluid="sm" >  */}
          <Row xs={1} md={3} className="g-4" >
            <Col>
             <Card style={{ width: "14rem"}} className="h-100 text-center border-0">
                <Card.Img src={nojd} />
                <Card.Body>
                  <Card.Text >
                    Måleriföretagens medlemsföretag omfattas en extra garanti på
                    två år av utfört måleriarbete. Det betyder att du kan vara
                    trygg när du köper tjänster från oss.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col> <Card style={{ width: "18rem" }} className="h-100 text-center border-0">
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
              <Col>
              <Card style={{ width: "18rem"}} className="h-100 text-center border-0">
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
              </Row></div><div class="container-fluid d-flex justify-content-center">
              <Row xs={1} md={2} sm={2} lg={3} className="g-4">
              <Col>
              
               <Card style={{ width: "11rem"}} className="text-center border-0">
                <Card.Img  src={auro} />
                {/* <Card.Body>
                   <Card.Text>
                    ID06-Systemet bidrar till att förenkla säkerhetsarbetet på
                    arbetsplatsen. För ett effektivt fungerande
                    olycksförebyggande arbete är det av största vikt att känna
                    till och kontrollera vilka som vistas på arbetsplatsen,
                    vilka arbeten som pågår och vilken säkerhetsinstruktion
                    varje individ har fått.
                  </Card.Text> 
                </Card.Body>  */}
              </Card>
              </Col>
              <Col>
               <Card style={{ width: "11rem"}} className="text-center border-0">
                <Card.Img src={malarna} />
                 {/* <Card.Body>
                   <Card.Text>
                    Målaresset är fackligt anslutna och därmed tillämpas
                    kollektivavtal med avtalsenliga villkor och löner.
                  </Card.Text> 
                </Card.Body>  */}
              </Card> 

              </Col>
              <Col>


              <Card style={{ width: "11rem"}}  className="text-center border-0">
                <Card.Img src={mvk} />
                 {/* <Card.Body>
                   <Card.Text>
                    Målaressets hantverkare har genomfört en branchanpassad utbildning och
                    är därmed behöriga våtrumsmålare.
                  </Card.Text> 
                </Card.Body> */}
              </Card> 
              </Col>
        </Row></div>
         {/* </Container>  */}
         

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
