import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

class Banner extends React.Component{
    render(){
        let middle;
        if(this.props.middle){
            middle = <Col className="nojdkund animate__animated animate__fadeIn"><img src={this.props.nojd} alt="Nöjd kund logga" /></Col>;
        }
        
        return(
            <Container className="kvalitetC" fluid>
            <Row className='gx-0'>
              <Col className="box">
                <div className="infoQ animate__animated animate__fadeIn">
                  <h3 className="text-muted">{this.props.title}</h3>
                  <h2>{this.props.mainTitle}</h2>
                  <p>
                    {this.props.text}
                  </p>
                </div>
              </Col>
              {middle}
              <Col className="banner-img" xs={12} md={8}>
                <img src={this.props.banner} alt="Banner" />
              </Col>
            </Row>
          </Container>
        )
    }
}
export default Banner;