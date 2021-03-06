import React from "react";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";
import banner5 from "../images/banner5.jpg";
import bild from "../images/bild.jpg";
import nojdkund from "../images/nojdkund.png";

import tapeter from "../images/tapeter.jpg";
import spackle from "../images/spackle.jpg";
import window from "../images/fönster.jpg";
import kladd from "../images/kladd.jpg";
import fasad from "../images/fasad.jpg";
import metall from "../images/metall.jpg";

import bronzeMed from "../images/bronze-medal.png";
import silverMed from "../images/silver-medal.png";
import goldMed from "../images/gold-medal.png";
import malarRadio from "../Assets/Malar.wav";

import rotavdrag from "../images/rotavdrag.png";
import fastpris from "../images/fastpris.png";
import "./Home.css";
import Package from "../Components/Package";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  let bronsText =
    "Målaressets Brons-paket är för dig som vill sätta din egna prägel på ditt hem genom en uppfräschning eller kulörbyte.";
  let silverText =
    "Målaressets Silver-paket är för dig som vill ha jämna, fina och fräscha väggar.";
  let guldText =
    "Målaressets Guld-paket är för dig som vill ha hela jobbet gjort från grunden för bästa möjliga resultat.";
  let brons = [
    "Spackling och lagning av mindre hål",
    "Målning av tak och väggar till fullgod täckning",
  ];
  let silver = [
    ...brons,
    "Fogning av vinklar",
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
        // animationHandler="fade"
        className="myCarousel"
      >
        <div>
          <img
            src={banner1}
            alt="banner"
            style={{ height: "50vh", objectFit: "cover" }}
          />
          <div className="carousel-caption">
            <img
              src={nojdkund}
              alt="..."
              style={{
                height: "15vh",
                width: "15vh",
                marginRight: "120vh",
                marginBottom: "20vh",
              }}
            />
          </div>
        </div>

        <div>
          <img
            src={banner2}
            alt="banner"
            style={{ height: "50vh", objectFit: "cover" }}
          />
          <div className="carousel-caption">
            <img
              src={nojdkund}
              alt="..."
              style={{
                height: "15vh",
                width: "15vh",
                marginRight: "120vh",
                marginBottom: "20vh",
              }}
            />
          </div>
        </div>

        <div>
          <img
            src={banner3}
            alt="banner"
            style={{ height: "50vh", objectFit: "cover" }}
          />
          <div className="carousel-caption">
            <img
              src={nojdkund}
              alt="..."
              style={{
                height: "15vh",
                width: "15vh",
                marginRight: "120vh",
                marginBottom: "20vh",
              }}
            />
          </div>
        </div>

        <div>
          <img
            src={banner4}
            alt="banner"
            style={{ height: "50vh", objectFit: "cover" }}
          />
          <div className="carousel-caption">
            <img
              src={nojdkund}
              alt="..."
              style={{
                height: "15vh",
                width: "15vh",
                marginRight: "120vh",
                marginBottom: "20vh",
              }}
            />
          </div>
        </div>

        <div>
          <img
            src={banner5}
            alt="banner"
            style={{ height: "50vh", objectFit: "cover" }}
          />
          <div className="carousel-caption">
            <img
              src={nojdkund}
              alt="..."
              style={{
                height: "15vh",
                width: "15vh",
                marginRight: "120vh",
                marginBottom: "20vh",
              }}
            />
          </div>
        </div>
      </Carousel>
      <div className="container">
        <audio controls src={malarRadio} className="w-100">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>

      <div className="home-info">
        <h2 className="info-child">
          Målaresset i Göteborg AB.<h3>Måleri och Bygg i Göteborg</h3>
        </h2>
        <div className="info-child">
          Söker du målare i Göteborg? Målaresset är företaget ni anlitar när
          jobbet måste bli bra! Vi på Målaresset hjälper dig med allt inom
          måleri, kakel, plåt, snickeri, bygg m.m. Vi riktar oss till:
          <strong>
            <ul>
              <li> Privatkunder</li>
              <li> Byggföretag</li>
              <li> Kommuner</li>
              <li> Bostadsrättsföreningar</li>
            </ul>
          </strong>
          Vi är yrkesmålare med många år i branschen och dokumenterade
          yrkesbevis. Oavsett storlek på ditt projekt så har vi på Målaresset rätt kompentens att utföra alla projekt utefter kundens behov och önskemål.
          Vi har som princip att alltid sätta kundens behov i centrum. God kommunikation med våra
          kunder är vår högsta prioritet då vi vill att våra kunder ska känna
          sig trygga när de anlitar Målaresset.
        </div>
        <img className="info-child" src={bild} alt="wet paint" />
      </div>
      <div className="home-success">
        <div className="success-child">
          <img src={fastpris} alt="logga" />

          <h3>Fast pris</h3>
          <p>
            Skicka in en beskrivning på jobbet du vill ha utfört via formuläret
            längst ner på sidan för att få en kostnadsfri offert.
          </p>
        </div>
        <div className="success-child">
          <img src={nojdkund} alt="logga" />

          <h3>100 % Nöjd kund garanti</h3>
          <p>
            Vi har lång erfarenhet av målaryrket och utför våra uppdrag med en
            hög standard. Därför ger vi två års garanti på du är nöjd med utfört
            arbete.
          </p>
        </div>
        <div className="success-child">
          <img src={rotavdrag} alt="logga" />

          <h3>Rotavdrag</h3>
          <p>
            De tjänster vi erbjuder är giltiga för ROT-avdrag. ROT-avdraget
            täcker arbetskostnader vid renovering och ombyggnation i ens bostad.
            Använd ROT-avdraget och betala bara 70% av arbetskostnaden.
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
          <Col className="py-2 col-lg-4 col-sm-7 ">
            <Package
              title="Brons"
              cardText={bronsText}
              lines={brons}
              tillval="Målning av lister, karmar och foder"
              tillBool="true"
              icon="thumbs-up"
              variant="bronze"
              textC="dark"
              medal={bronzeMed}
            />
          </Col>
          <Col className="py-2 col-lg-4 col-sm-7">
            <Package
              title="Silver"
              cardText={silverText}
              lines={silver}
              icon="hand-scissors"
              tillval="Priming"
              tillBool="true"
              variant="silver"
              textC="dark"
              medal={silverMed}
            />
          </Col>
          <Col className="py-2 col-lg-4 col-sm-7 ">
            <Package
              title="Guld"
              cardText={guldText}
              lines={guld}
              icon="hand-peace"
              variant="gold"
              textC="dark"
              medal={goldMed}
            />
          </Col>
        </Row>
      </Container>
      <h2 className="service-child">Våra Tjänster</h2>
      <Row md={4} lg={6} sm={2} xs={1}>
        <div className="col">
          <div className="service-child">
            <Link to="/vara-tjanster">
              <img src={spackle} alt="tjanst-bild" />
              <div className="service-middle">
                <div className="text">Läs mer</div>
              </div>
            </Link>
            <h3>Totalentrepenad</h3>
          </div>
        </div>
        <div className="col">
          <div className="service-child">
            <Link to="/vara-tjanster">
              <img src={kladd} alt="tjanst-bild" />
              <div className="service-middle">
                <div className="text">Läs mer</div>
              </div>
            </Link>
            <h3>Invändigt</h3>
          </div>
        </div>
        <div className="col">
          <div className="service-child">
            <Link to="/vara-tjanster">
              <img src={fasad} alt="tjanst-bild" />
              <div className="service-middle">
                <div className="text">Läs mer</div>
              </div>
            </Link>
            <h3>Utvändigt</h3>
          </div>
        </div>

        <div className="col">
          <div className="service-child">
            <Link to="/vara-tjanster">
              <img src={metall} alt="tjanst-bild" />
              <div className="service-middle">
                <div className="text">Läs mer</div>
              </div>
            </Link>
            <h3>Plåt</h3>
          </div>
        </div>

        <div className="col">
          <div className="service-child">
            <Link to="/vara-tjanster">
              <img src={tapeter} alt="tjanst-bild" />
              <div className="service-middle">
                <div className="text">Läs mer</div>
              </div>
            </Link>
            <h3>Tapetsering</h3>
          </div>
        </div>

        <div className="col">
          <div className="service-child">
            <Link to="/vara-tjanster">
              <img src={window} alt="tjanst-bild" />
              <div className="service-middle">
                <div className="text">Läs mer</div>
              </div>
            </Link>
            <h3>Fönster</h3>
          </div>
        </div>
      </Row>
    </div>
  );
};
export default Home;
