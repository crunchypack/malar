import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const{SENDGRID_API_KEY} =require('../sendgrid');

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
    this.formFiles = React.createRef();
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }
  getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
        this.setState({files:baseURL})
      };
      console.log(fileInfo);
    });
  };
  handleFormChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleFile(e) {
    this.getBase64(e.target.files[0]);
    this.setState({fileName:e.target.files[0].name});


  }
  handleFormSubmit(e) {
    //Code Goes Here
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(SENDGRID_API_KEY);
     e.preventDefault();
    const msg = {
      to: "simon.wolf.lobo@gmail.com", // Change to your recipient
      from: "simon.lobo@hotmail.se", // Change to your verified sender
      subject: "Kontaktformulär Målaresset",
      html:'<html><body><p> From:' +
      this.state.formName +
      '</p><p>Email: ' +
      this.state.formEmail +
      "</p><p>Tel.:" +
      this.state.formPhone +
      "</p>Meddelande: " +
      this.state.formMsg+'</p></body></html>',
      
    };
    sgMail
      .send(msg)
      .then(() => {
        this.setState({status:"text-success h3",sent:"Message sent"})
      })
      .catch((error) => {
        this.setState({status:"text-danger h3"});
        console.error(error);
      });
    console.log(this.state);

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
