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
      "Vi på Målaresset arbetar för att erbjuda en tjänst som fokuserar på kundens behov. Vi tror att kvalitet och kompetens alltid vinner i längden. ";
    let text1 =
      "Målaresset är ett svenskt måleriföretag som erbjuder tjänster inom måleri och bygg i Göteborg med omnejd. Vår resa började i slutet på 00-talet då jag Patrik Gustavsson grundade måleri företaget Målaresset i Göteborg AB. "+
      "Genom åren har jag införskaffat mig en bred kompetens inom bygg och måleribranschen. Målaresset har dom senaste åren expanderat och anställt kompetenta ledare och medarbetare."+
      " Vi har även utöktat vårt kontaktnät med hantverkarföretag inom Göteborg för att kunna erbjuda våra kunder helhetslösningar inom bygg och måleri."+
      "Vår målsätting är enkel: Att leverera måleri och byggtjänster med hög kvalitet. Vi strävar alltid efter att du som kund ska känna vårt engemang i ditt projekt. Vi håller vad vi lovat och respekterar överenskomna deadlines.";
    let title = "Målaresset i Göteborg";
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
