import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class ContactForm extends React.Component{
    render(){
        return(
            <React.Fragment>
                
            <Form>
            <h2> Kontakta Oss</h2>

                <Form.Text className='text-muted'>Du når oss på telefon, mail eller genom att fylla i vårt formulär nedan. Vi återkommer till dig så snart vi kan!</Form.Text>
              <Form.Group className="mb-3">
                <Form.Label>Namn</Form.Label>
                <Form.Control type="text" />
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" />
                <Form.Label>Telefon</Form.Label>
                <Form.Control type="tel" />
                <Form.Label>Meddelande</Form.Label>
                <Form.Control as="textarea" rows={4} />
                <Form.Label>Bifoga bilder</Form.Label>
                <Form.Control type="file" multiple />
              </Form.Group>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </React.Fragment>
        )
    }
}
export default ContactForm;