import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactCard from "../Components/ContactCard";
import ContactForm from "../Components/ContactForm";
import obama from '../images/obama.jpg';
import shivan1 from '../images/Shivan1.jpg';
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
                <Row md={2} >
                    <Col ><ContactCard img={obama} name='Patrik Gustavsson' text = 'VD'contact='Telefon: 0704-43 94 62' email='patrik@malaresset.se'/></Col>
                    <Col ><ContactCard img={patrick} border="border-0"/></Col>
                    <Col ><ContactCard img={shivan1} name='Shivan Palany' text = 'Projektledare'contact='Telefon: 0768-74 10 22 ' email='shivan@malaresset.se'/></Col>
                    <Col ><ContactCard img={shiv}  border="border-0"/></Col>
                    
                </Row>
                <hr/>
                
                <Row><Col><ContactCard img={pence} name='Jeanette Martinssson' text = 'Administration'contact='Telefon: 031-22 77 99' email='jeanette@malaresset.se'/></Col></Row>
            </Container>
            
        </React.Fragment>
    );
  }
}
export default Contact;
