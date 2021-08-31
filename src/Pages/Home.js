import React from "react";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";
import banner5 from "../images/banner5.jpg";
import bild from "../images/bild.png";
import nojdkund from "../images/nojdkund.png";
import service from "../images/service.png";
import rotavdrag from "../images/rotavdrag.png";
import fastpris from "../images/fastpris.png";
import "./Home.css";
import Package from "../Components/Package";
import { Col, Container, Row } from "react-bootstrap";

class Home extends React.Component {
  renderThumbs;
  render() {
    let bronsText = "Målaressets Brons-paket är för dig som redan har släta ytor men vill sätta din egna prägel på ditt hem genom en uppfräschning eller kulörbyte.";
    let silverText = "Målaressets Silver-paket är för dig som vill dölja skarvara och måla över gamla tapeter som hänger på väggarna.";
    let guldText = "Målaressets Guld-paket är för dig som vill ha hela jobbet gjort från grunden för bästa möjliga resultat.";
    let brons = [
      "Spackling av mindre hål och fogning av springor",
      "Målning av tak och väggar till fullgod täckning",
    ];
    let silver = [
      ...brons,
      "Fogning av vinklar och springor",
      "Målning av lister, karmar, foder",
    ];
    let guld = [
      ...silver,
      "Slipning, grundmålning och fläckspackling",
      "Bredspackling",
      "Priming",
    ];
    return (
      <div className="container-fluid">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval="2000"
          animationHandler="fade"
        >
          <div>
            <img
              src={banner1}
              alt="banner"
              style={{ height: "50vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={banner2}
              alt="banner"
              style={{ height: "50vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={banner3}
              alt="banner"
              style={{ height: "50vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={banner4}
              alt="banner"
              style={{ height: "50vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={banner5}
              alt="banner"
              style={{ height: "50vh", objectFit: "cover" }}
            />
          </div>
        </Carousel>
        <div className="home-info">
          <h2 className="info-child">Målaresset i Göteborg</h2>
          <p className="info-child">
            Målaresset är företaget ni anlitar när jobbet måste bli bra! Vi på Målaresset hjälper dig med allt inom måleri, plåt, snickeri, totalrenovering m.m. Vi riktar oss till:
            <b>
              <ul>
               <li> Privatkunder</li>
               <li> Byggföretag</li>
               <li> bostadsrättsföreningar</li>
              </ul></b>
            Vi är yrkesmålare med många år i branschen och dokumenterade yrkesbevis.
            Oavsett storlek på projekt så har vi som princip att alltid sätta kundens behov i centrum. God kommunikation med våra kunder är vår högsta prioritet då vi vill att våra kunder ska känna sig trygga när de anlitar Målaresset.
          </p>
          <img className="info-child" src={bild} alt="wet paint" />
        </div>
        <div className="home-success">
          <div className="success-child">
            <ul>
              <img src={fastpris} alt="logga" />
            </ul>
            <h3>Fast pris</h3>
            <p>
              Skicka in en beskrivning på jobbet du vill ha utfört via
              formuläret längst ner på sidan för att få en kostnadsfri offert.
            </p>
          </div>
          <div className="success-child">
            <ul>
              <img src={nojdkund} alt="logga" />
            </ul>
            <h3>100 % Nöjd kund garanti</h3>
            <p>
              Vi har lång erfarenhet av målaryrket och utför våra uppdrag med en
              hög standard. Därför ger vi två års garanti på du är nöjd med
              utfört arbete.
            </p>
          </div>
          <div className="success-child">
            <ul>
              <img src={rotavdrag} alt="logga" />
            </ul>
            <h3>Rotavdrag</h3>
            <p>
              De tjänster vi erbjuder är giltiga för ROT-avdrag. ROT-avdraget
              täcker arbetskostnader vid renovering och ombyggnation i ens
              bostad. Använd ROT-avdraget och betala bara 70% av
              arbetskostnaden.
            </p>
          </div>
        </div>
        <Container fluid="sm">
          <Row>
            <Col>
              <h2>Målaressets renoveringspaket</h2>
            </Col>
          </Row>

          <Row style={{ margin: "2% 0" }}>
            <Col className="py-2">
              <Package
                title="Brons"
                cardText={bronsText}
                lines={brons}
                icon="thumbs-up"
                variant="dark"
                textC="white"
              />
            </Col>
            <Col className="py-2">
              <Package
                title="Silver"
                cardText={silverText}
                lines={silver}
                icon="hand-scissors"
                variant="gradient"
                textC="white"
              />
            </Col>
            <Col className="py-2">
              <Package
                title="Guld"
                cardText={guldText}
                lines={guld}
                icon="hand-peace"
                variant="dark"
                textC="white"
              />
            </Col>
          </Row>
        </Container>
        <div className="home-services">
          <h2 className="service-child">Våra Tjänster</h2>
          <div className="service-child">
            <Link to="/malaresset">

              <img src={service} alt="tjanst-bild" />
              <div className="service-middle">
                <div className="text">Läs mer</div>
              </div>
            </Link>
            <h3>Totalentrepenad</h3>
          </div>
          <div className="service-child">
            <Link to="/malaresset">
              <img src={service} alt="tjanst-bild" />
              <div className="service-middle">
                <div className="text">Läs mer</div>
              </div>
            </Link>
            <h3>Invändigt</h3>
          </div>
          <div className="service-child">
            <Link to="/malaresset">
              <img src={service} alt="tjanst-bild" />
              <div className="service-middle">
                <div className="text">Läs mer</div>
              </div>
            </Link>
            <h3>Fasad</h3>
          </div>
          <div className="service-child">
            <Link to="/malaresset">
              <img src={service} alt="tjanst-bild" />
              <div className="service-middle">
                <div className="text">Läs mer</div>
              </div>
            </Link>
            <h3>Plåt</h3>
          </div>
          <div className="service-child">
            <Link to="/malaresset">
              <img src={service} alt="tjanst-bild" />
              <div className="service-middle">
                <div className="text">Läs mer</div>
              </div>
            </Link>
            <h3>Tapetsering</h3>
          </div>
          <div className="service-child">
            <Link to="/malaresset">
              <img src={service} alt="tjanst-bild" />
              <div className="service-middle">
                <div className="text">Läs mer</div>
              </div>
            </Link>
            <h3>Fönster</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
