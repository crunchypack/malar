import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formName: "",
      formEmail: "",
      formPhone: "",
      formMsg: "",
      files: null,
      fileName: "",
      status:"d-none text-success",
      sent:"Something went wrong please try again."

    };

  }
  handleFormChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleFile(e) {
    this.getBase64(e.target.files[0]);
    this.setState({fileName:e.target.files[0].name});


  }
 
  render() {
    return (
      <React.Fragment>
        <Form className="shadow-none" action="/mailHandler.php" method="post">
          <h2> Kontakta oss!</h2>

          <Form.Text className="text-muted">
            Att vara lätt tillgängliga är viktigt för att du ska känna
            förtroende för oss. Du når oss enklast direkt via telefon, mail
            eller genom att fylla i vårt formulär nedan. Vi lovar att återkomma
            till dig så snart vi kan!
          </Form.Text>
          <Form.Group className="mb-3">
            <Form.Label>Namn</Form.Label>
            <Form.Control
              type="text"
              name="formName"
              placeholder="Förnamn Efternamn"
            />
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              name="formEmail"
              placeholder="Name@email.com"
              required
            />
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              type="tel"
              name="formPhone"

              required
            />
            <Form.Label>Meddelande</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="formMsg"

            />
          </Form.Group>
          <Button variant="success" type="submit" name="submit">
            Skicka
          </Button>
          <div className={this.state.status}>{this.state.sent}</div>
          
        </Form>
      </React.Fragment>
    );
  }
}
export default ContactForm;
