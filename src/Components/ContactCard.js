import React from "react";
import Card from 'react-bootstrap/Card'

class ContactCard extends React.Component {
    
  render() {
    return (
      <React.Fragment>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              {this.props.text} <br/>
              {this.props.contact} <br/>
              <a href={"mailto:" + this.props.email}>{this.props.email}</a>
              
            </Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}
export default ContactCard;