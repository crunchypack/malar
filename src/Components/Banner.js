import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
class Banner extends React.Component{
    render(){
        let middle;
        let button;
        if(this.props.middle){
            middle = <Col className="nojdkund animate__animated animate__fadeIn">             
            <img src={this.props.nojd} alt="Nöjd kund logga" className="img-fluid"/>
            
            <img src={this.props.Malforetag} alt="Måleriföretagen logga" className="img-fluid"/></Col>;
        }
        if(this.props.button){
          button = (<div className='service-btns1' >
          <Link to='/malaresset/kontakta-oss'><Button variant='outline-dark'>
            Kontakta oss
          </Button></Link>
        </div>);
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
                {button}
              </Col>
              {middle}
              <Col className="banner-img" xs={12} md={8}>
                <img src={this.props.banner} alt="Banner" style={{height:'50vh', objectFit:'cover'}}/>
              
              </Col>
            </Row>
          </Container>
        )
    }
}
export default Banner;