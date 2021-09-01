import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class ContactForm extends React.Component{
    render(){
        return(
            <React.Fragment>
                
            <Form className="shadow-none">
            <h2> Kontakta oss!</h2>

                <Form.Text className='text-muted'>
                Att vara lätt tillgängliga är viktigt för att du ska känna förtroende för oss. Du når oss enklast direkt via telefon, mail eller genom att fylla i vårt formulär nedan. Vi lovar att återkomma till dig så snart vi kan!</Form.Text>
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