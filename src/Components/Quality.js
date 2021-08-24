import React from "react";
import "./Quality.css";
import nojd from "../images/nojdkund.png";
import banner from "../images/Banner(1).png";
import pexels from '../images/pexels.jpg';
import { Col, Container, Row } from "react-bootstrap";
import Banner from "./Banner";

class Quality extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Banner title="Vi fokuserar på" mainTitle="Kvalitet och miljo" text="När du anlitar [INSERT NAME], värnar du samtidigt om miljön och får kvalitén på köpet." nojd={nojd} banner={banner} middle={true}/>
       
        <Container className='mainQ'>
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
                Vi målar med miljö- och hälsocertifierade målarfärger. Det
                betyder att målarfärgen är vattenburen och får inte innehålla
                allergiframkallande eller hormonstörande ämnen och inte heller
                tungmetaller.
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
        </Container>
      </React.Fragment>
    );
  }
}
export default Quality;
