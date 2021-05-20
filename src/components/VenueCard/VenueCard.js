import './VenueCard.css';
import { Button, Card } from 'react-bootstrap';
import React from 'react';

export default function VenueCard({ name, image, capacity, rentingPrice, id }) {
  return (
    <div className="cards-container">
      <Card>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <div className="card-description">
            <Card.Img variant="left" src={image}></Card.Img>
            <div className="text-description">
              <Card.Text>Capacity: {capacity} pax</Card.Text>
              <Card.Text>Price (base): {rentingPrice} €</Card.Text>
              <Button variant="primary">
                <a href={`/search/venue/${id}`}>See details & Book</a>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
