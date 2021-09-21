import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactCard from "../Components/ContactCard";
import ContactForm from "../Components/ContactForm";
import obama from '../images/obama.jpg';
import shivan from '../images/Shivan.JPG';
import pence from '../images/pence.jpg';
import patrick from '../images/PatrikGesell.jpg';
import shiv from '../images/ShivanGesell.jpg';

class Contact extends React.Component {
  render() {
    return (
        <React.Fragment>
            
            
            <Container fluid="sm" >
                <Row>
                    <Col><ContactForm /></Col>
                </Row>
                <Row><Col> <h3>Vårt team </h3></Col></Row>
                <Row>
                    <Col><ContactCard img={obama} name='Patrik Gustavsson' text = 'VD'contact='Telefon: 0704-43 94 62' email='patrik@malaresset.se'/></Col>
                    <Col><img src={patrick} alt="diploma" className="img-fluid"></img></Col>
                    <Col><ContactCard img={shivan} name='Shivan Palany' text = 'Projektledare'contact='Telefon: 0768-74 10 22 ' email='shivan@malaresset.se'/></Col>
                    <Col><img src={shiv} alt="diploma" className="img-fluid"></img></Col>
                    
                </Row>
                <hr/>
                
                <Row><Col><ContactCard img={pence} name='Mahmood Salazar bin ' text = 'Projekt ledare'contact='Telefon:031123456'/></Col></Row>
            </Container>
            
        </React.Fragment>
    );
  }
}
export default Contact;
