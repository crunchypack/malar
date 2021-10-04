import React from "react";
import logo from "../images/footLogo.png";
import nojd from "../images/nojdkund.png";
import maleri from "../images/maleriforetagen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import offerta from '../images/offertaIcon.png';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { footEmail: "", footMsg: "", footName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    //Code Goes Here 
    e.preventDefault();
    console.log(this.state);
    this.setState({
      footEmail: "",
      footMsg: "",
      footName: "",
    });
  }
  render() {
    return (
      <footer>
        <div className="footer-item">
          <img src={logo} alt="Målaressets logga" />
          <p>Målaresset är företaget ni anlitar när jobbet måste bli bra.</p>
          <h4>Kontakt info</h4>
          <div>
            <ul>
              <li>
                Telefon: <span>031 - 22 77 99</span>
              </li>
              <li>
                Mail{" "}
                <span>
                  <a href="mailto:patrik@malaresset.se">patrik@malaresset.se</a>
                </span>
              </li>
              <li>Målaresset Göteborg</li>
              <li>Ekebygatan 19</li>
              <li>422 54 Göteborg</li>
            </ul>
          </div>
        </div>

        <div className="footer-item">
          <Form action="/footerMail.php" method="post">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Namn.."
                name="footName"
                value={this.state.footName}
                onChange={this.handleChange}
              />

              <Form.Control
                type="email"
                placeholder="Email.."
                name="footEmail"
                value={this.state.footEmail}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                Vi kommer inte dela ut din personliga information.
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ditt meddelande.."
                name="footMsg"
                value={this.state.footMsg}
                onChange={this.handleChange}
              />
              <Button className="mb-2" variant="success" type="submit" name="submit">
                Skicka
              </Button>
            </Form.Group>
          </Form>
        </div>
        <div className="social footer-item">
          <h4>100% Nöjd Kund Garanti</h4>
          <img src={nojd} alt="nöjd kund logga" />
          <img src={maleri} alt="Måleriföretagen logga" />
          <h4>Läs vad våra kunder säger om oss</h4>
          <a
            href="https://offerta.se/foretag/malaresset-i-goteborg-ab/#ratings"
            rel="noreferrer"
            target="_blank"
            className="facebook"
          >
            <img src={offerta} alt="Icon offerta" className="img-fluid"/>
          </a>
          <a
            href="https://instagram.com/malaresset"
            rel="noreferrer"
            target="_blank"
            className="instagram"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
          </a>
        </div>
      </footer>
    );
  }
}
export default Footer;
