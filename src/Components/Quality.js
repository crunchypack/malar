import React from "react";
import "./Quality.css";
import nojd from "../images/nojdkund.png";
import banner from "../images/Banner(1).png";
import pexels from '../images/pexels.jpg';
import { Container} from "react-bootstrap";
import Banner from "./Banner";
import InfoMain from "./InfoMain";

class Quality extends React.Component {
  render() {
    let text ="Vi målar med miljö- och hälsocertifierade målarfärger. Det betyder att målarfärgen är vattenburen och får inte innehålla allergiframkallande eller hormonstörande ämnen och inte heller tungmetaller.";
    let title = "Miljömärkt målarfärg";
    let text2 = "Vi målar med miljö- och hälsocertifierade målarfärger. Det betyder att målarfärgen är vattenburen och får inte innehålla allergiframkallande eller hormonstörande ämnen och inte heller tungmetaller.";
    let title2 ="Miljömärkt målarfärg";
    return (
      <React.Fragment>
        <Banner title="Vi fokuserar på" mainTitle="Kvalitet och miljo" text="När du anlitar [INSERT NAME], värnar du samtidigt om miljön och får kvalitén på köpet." nojd={nojd} banner={banner} middle={true}/>
       
        <Container className='mainQ'>
          <InfoMain orderText={{order:1}} orderImg={{order:2}} title={title} text={text} img={pexels}/>
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