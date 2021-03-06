import React from "react";
import "./Quality.css";
import nojd from "../images/nojdkund.png";
import maleriforetagen from "../images/maleriforetagen.png";
import bannerImg from "../images/quality.jpg";
import pexels from '../images/pexels.jpg';
import env from '../images/enva.jpg';
import { Container} from "react-bootstrap";
import Banner from "./Banner";
import InfoMain from "./InfoMain";

class Quality extends React.Component {
  render() {
    let text ="Målaresset i Göteborg är ett kvalitets- och miljömedvetet företag som alltid har miljön och kunden i fokus. Vi strävar efter att alltid välja de produkter som har minst negativ miljöpåverkan. I samråd med beställare, kunder och våra samarbetspartner väljer vi alltid det alternativet som är bäst ur miljö- och hälsoperspektivet. Valda produkter skall ge en försköning och lång livslängd åt den behandlade ytan. Vi arbetar med professionella svanenmärkta produkter som är miljö- och hälsocertifierade, det betyder att målarfärgen är vattenburen och innehåller inga allergiframkallande eller hormonstörande ämnen. Vi arbetar även med Auro ekologisk tak- och väggfärg. Auro är ett komplett miljö- och hälsovänligt sortiment av ekologiska färger för väggar och tak samt produkter för naturlig ytbehandling och underhåll. ";
    let title = "Miljömärkta produkter";
    let title2 ="Miljötänk";
    let text2 = "Kvalitet genomsyrar våra tjänster, metoder, information och relationer. Vi gör tillsammans med våra underentrepenörer, leverantörer och kunder aktiva val i strävar efter att välja de produkter och arbetsmetoder som är har minst negativ påverkan på miljön. Vi planerar våra resor och samlevererar material för att minska miljöpåverkan från våra transporter. För att minska vår resursförbrukning minimerar vi onödigt spill i form av vatten och färgrester. Våra maskiner rengörs hos leverantörens verkstad där färgrester och vatten tas hand om enligt de regelverk som finns. Efter ett avslutat projekt källsorterar vi det avfall som uppstår.";
    return (
      <React.Fragment>
        <Banner title="Vi fokuserar på" mainTitle="Kvalitet och miljö" text="När du anlitar Målaresset får du kvalitet samtidigt som du värnar om miljön." nojd={nojd} Malforetag={maleriforetagen} banner={bannerImg} middle={true}/>
       
        <Container className='mainQ'>
          <InfoMain orderText={{order:1}} orderImg={{order:2}} title={title} text={text} img={env}/>
          <InfoMain orderText={{order:2}} orderImg={{order:1}} title={title2} text={text2} img={pexels}/>
        </Container>
      </React.Fragment>
    );
  }
}
export default Quality;

/*
         <Row>
            <Col>
              <h2>Miljömärkt målarfärg</h2>
              <p>
                Vi målar med miljö- och hälsocertifierade målarfärger. Det
                betyder att målarfärgen är vattenburen och får inte innehålla
                allergiframkallande eller hormonstörande ämnen och inte heller
                tungmetaller.
              </p>
            </Col>
            <Col>
              <img src={pexels}  className='mainQimg' alt='pexels'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={pexels}  className='mainQimg' alt='pexels'/>
            </Col>
            <Col>
              <h2>Miljömärkt målarfärg</h2>
              <p>
                Vi målar med miljö- och hälsocertifierade målarfärger. Det betyder att målarfärgen är vattenburen och får inte innehålla allergiframkallande eller hormonstörande ämnen och inte heller tungmetaller.
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Items</li>
                </ul>
              </p>
            </Col>
          </Row>
*/