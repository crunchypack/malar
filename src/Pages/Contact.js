import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactCard from "../Components/ContactCard";
import ContactForm from "../Components/ContactForm";
import obama from '../images/obama.jpg';


class Contact extends React.Component {
  render() {
    return (
        <React.Fragment>
            
            
            <Container>
                <Row>
                    <Col><ContactForm /></Col>
                </Row>
                <Row>
                    <Col><ContactCard img={obama} name='Johan Leif Göransson' text = 'VD 'contact='Telefon:031123456'/></Col>
                    <Col><ContactCard img={obama} name='Fredrik Eriksson Chelseasson' text = 'Vice VD 'contact='Telefon:031123456'/></Col>
                </Row>
            </Container>
            
        </React.Fragment>
    );
  }
}
export default Contact;
