import React from "react";
import Card from 'react-bootstrap/Card'

class ContactCard extends React.Component {
    constructor(props) {
        super(props);
        
      }
  render() {
    
    return (
      <React.Fragment>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              {this.props.text} <br/>
              {this.props.contact}
            </Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}
export default ContactCard;