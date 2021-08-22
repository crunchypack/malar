import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactCard from "../Components/ContactCard";
import ContactForm from "../Components/ContactForm";
import obama from '../images/obama.jpg';
import biden from '../images/Biden.jpg';
import pence from '../images/pence.jpg';


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
                    <Col><ContactCard img={obama} name='Johan Leif Göransson' text = 'VD 'contact='Telefon:031123456'/></Col>
                    <Col><ContactCard img={biden} name='Fredrik Eriksson ' text = 'Vice VD 'contact='Telefon:031123456'/></Col>
                    <Col><ContactCard img={pence} name='Mahmood Salazar bin ' text = 'Projekt ledare'contact='Telefon:031123456'/></Col>
                </Row>
            </Container>
            
        </React.Fragment>
    );
  }
}
export default Contact;
