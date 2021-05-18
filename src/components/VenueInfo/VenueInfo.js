import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Calendar from '../Calendar/Calendar';


export default function VenueInfo({name, image, website, address, contactInfo, CIF, capacity, rentingPrice, rider, conditions, license, merch, security, ticketOffice, production, technicians, genre}) {

    return (
        <div>
        <div className="info-section">
            <p>{name}</p>
        </div>

        <div className="info-section">
            <img src={image} alt="" />
        </div>
    
        <Calendar />
        <Button variant="primary">Book</Button>

      </div>
    )
}
