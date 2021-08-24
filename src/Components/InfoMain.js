import React from "react";
import { Col, Row } from "react-bootstrap";

class InfoMain extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={this.props.orderText}>
          <h2>{this.props.title}</h2>
          <p>
            {this.props.text}
          </p>
        </Col>
        <Col xs={this.props.orderImg}>
          <img src={this.props.img} className="mainQimg" alt={this.props.alt} />
        </Col>
      </Row>
    );
  }
}
export default InfoMain;
