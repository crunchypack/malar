import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//const{SENDGRID_API_KEY} =require('../sendgrid');

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formName: "",
      formEmail: "",
      formPhone: "",
      formMsg: "",
      files: null,
    };
    this.formFiles = React.createRef();
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }
  handleFormChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleFile(e) {
    this.setState({
      files: e.target.files,
    });
  }
  handleFormSubmit(e) {
    // //Code Goes Here
    // const sgMail = require("@sendgrid/mail");
    // sgMail.setApiKey(SENDGRID_API_KEY);
    // e.preventDefault();
    // const msg = {
    //   to: "simon.wolf.lobo@gmail.com", // Change to your recipient
    //   from: "simon.lobo@hotmail.se", // Change to your verified sender
    //   subject: "Kontaktformulär Målaresset",
    //   text:
    //   "From:" +
    //   this.state.formName +
    //   "\nEmail:" +
    //   this.state.formEmail +
    //   "\nTel.:" +
    //   this.state.formPhone +
    //   "\nMeddelande: " +
    //   this.state.formMsg
      
    // };
    // sgMail
    //   .send(msg)
    //   .then(() => {
    //     console.log("Email sent");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    this.setState({
      formName: "",
      formEmail: "",
      formPhone: "",
      formMsg: "",
      files: null,
    });
    this.formFiles.current.value = "";
  }
  render() {
    return (
      <React.Fragment>
        <Form className="shadow-none" onSubmit={this.handleFormSubmit}>
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
              value={this.state.formName}
              onChange={this.handleFormChange}
            />
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              name="formEmail"
              value={this.state.formEmail}
              onChange={this.handleFormChange}
              required
            />
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              type="tel"
              name="formPhone"
              value={this.state.formPhone}
              onChange={this.handleFormChange}
              required
            />
            <Form.Label>Meddelande</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="formMsg"
              value={this.state.formMsg}
              onChange={this.handleFormChange}
            />
            <Form.Label>Bifoga bilder</Form.Label>
            <Form.Control
              type="file"
              multiple
              onChange={this.handleFile}
              ref={this.formFiles}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}
export default ContactForm;
