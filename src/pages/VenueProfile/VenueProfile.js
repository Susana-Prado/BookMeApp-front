import React from 'react';
import { Button } from 'react-bootstrap';
import venue from '../../resources/img/venue.png'

export default function VenueProfile() {
    return (
        <div className="container">
            <div className="left-side">
                <div className="profile-detail">
                        <p>Name:</p>           
                    </div> 
                <div className="profile-detail">
                        <p>Contact:</p>   
                </div>
                <div className="profile-detail">
                        <p>CIF:</p>   
                </div>
                <div className="profile-detail">
                        <p>Website:</p>   
                </div>
                <div className="profile-detail">
                        <p>Capacity:</p>   
                </div>
           </div>
           <div className="right-side">
           <img className="venue" src={venue} alt="venue" />   
           </div>
           <div>
               <p>Bookings</p>
           </div>
           <Button>
               Edit profile info
           </Button>
        </div>
    )
}