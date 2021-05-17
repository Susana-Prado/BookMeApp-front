import './VenueCard.css';
import { Button, Card } from 'react-bootstrap';
import React from 'react';

export default function VenueCard() {
  return (
    <div className="cards-container">
      <Card>
        <Card.Header>Venue Name</Card.Header>
        <Card.Body>
          <Card.Img variant="left" src="holder.js/100px180" />
          <div className="card-description">
            <Card.Text>Description</Card.Text>
            <Button variant="primary">See details & Book</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
