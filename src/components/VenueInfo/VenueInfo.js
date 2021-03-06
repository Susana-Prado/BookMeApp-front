import React from 'react';
import './VenueInfo.css';

import { Link } from 'react-router-dom';

export default function VenueInfo({
  name,
  image,
  website,
  address,
  contactInfo,
  CIF,
  capacity,
  rentingPrice,
  rider,
  conditions,
  license,
  merch,
  security,
  ticketOffice,
  production,
  technicians,
  genre,
}) {
  return (
    <div className="venuedetails">
      <div className="info-section">
        <h2>{name}</h2>
      </div>
      <div className="venue-info">
        <div className="venue-info-left">
          <div className="info-section-image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="venue-info-right">
          <div className="info-section">
            <span>Website: </span>
            <Link>{website}</Link>
          </div>
          <div className="info-section">
            <p>Address:</p>
            {address && (
              <p>
                {address.street}, {address.city}, {address.country}
              </p>
            )}
          </div>
          <div className="info-section">
            {contactInfo && (
              <>
                <p>Contact Info:</p>
                <p>Telephone: {contactInfo.tel}</p>
                <p>Email: {contactInfo.email}</p>
              </>
            )}
          </div>
          <div className="info-section">
            <p>CIF: {CIF}</p>
          </div>
          <div className="info-section">
            <p>Capacity: {capacity}</p>
          </div>
          <div className="info-section">
            <p>Renting price (base): {rentingPrice}</p>
          </div>
          <div className="info-section">
            <p>Rider: {rider}</p>
          </div>
          <div className="info-section">
            <p>Conditions: {conditions}</p>
          </div>
          <div className="info-section">
            <p>License: {license}</p>
          </div>
          <div className="info-section">
            <p>Merch: {merch ? 'yes' : 'no'}</p>
          </div>
          <div className="info-section">
            <p>Security: {security ? 'yes' : 'no'}</p>
          </div>
          <div className="info-section">
            <p>Ticket Office: {ticketOffice ? 'yes' : 'no'}</p>
          </div>
          <div className="info-section">
            <p>Production: {production ? 'yes' : 'no'}</p>
          </div>
          <div className="info-section">
            <p>Technicians: {technicians ? 'yes' : 'no'}</p>
          </div>
          <div className="info-section">
            <p>Genre: {genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
