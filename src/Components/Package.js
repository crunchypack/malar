import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import './Packages.css';
import 'animate.css';

class Package extends React.Component {
    
  render() {
    let items = this.props.lines.map(item => 
        <ListGroupItem variant={this.props.variant} ><FontAwesomeIcon icon='check'/> {item}</ListGroupItem>
        );
    return (
      <Card bg={this.props.variant} text={this.props.textC} >
        <Card.Body >
           <div className='IconContainer'><FontAwesomeIcon icon={this.props.icon}size='3x' className=' renovIcon'/></div> 
          <Card.Title className='text-center'>{this.props.title}</Card.Title>
          <Card.Text>{this.props.cardText}</Card.Text>
        </Card.Body>
        <ListGroup className='listGroup'variant={this.props.variant}>{items}</ListGroup>
      </Card>
    );
  }
}
export default Package;