import React from 'react';
import { Button } from 'react-bootstrap';
import { withAuth } from '../../context/auth.context';
import venue from '../../resources/img/venue.png'

function VenueProfile(props) {
    return (
        <div className="container">
            <div className="left-side">
                <div className="profile-detail">
                        <p>Name: {props.user.name}</p>           
                    </div> 
                <div className="profile-detail">
                        <p>Email: {props.user.email}</p>   
                </div>
                <div className="profile-detail">
                        <p>CIF: {props.user.CIF}</p>   
                </div>
                <div className="profile-detail">
                        <p>Website: {props.user.website}</p>   
                </div>
                <div className="profile-detail">
                        <p>Capacity: {props.user.capacity}</p>   
                </div>
                <div className="profile-detail">
                        <p>Price: {props.user.rentingPrice} €</p>   
                </div>
                <div className="profile-detail">
                        <p>Rider: {props.user.rider} </p>   
                </div>
                <div className="profile-detail">
                        <p>Conditions: {props.user.conditions} </p>   
                </div>
                <div className="profile-detail">
                        <p>License: {props.user.license} </p>   
                </div>
                <div className="profile-detail">
                        <p>Merch: {props.user.merch ? "Yes" : "No"} </p>   
                </div>
                <div className="profile-detail">
                        <p>Security: {props.user.security ? "Yes" : "No"} </p>   
                </div>
                <div className="profile-detail">
                        <p>Ticket office: {props.user.ticketOffice ? "Yes" : "No"} </p>   
                </div>
                <div className="profile-detail">
                        <p>Production: {props.user.production ? "Yes" : "No"} </p>   
                </div>
                <div className="profile-detail">
                        <p>Technicians: {props.user.technicians ? "Yes" : "No"} </p>   
                </div>
                <div className="profile-detail">
                        <p>Genre: {props.user.genre} </p>   
                </div>
           </div>
           <div className="right-side">
           <img className="venue" src={venue} alt="venue" />   
           </div>
           <div>
               <p>Bookings</p>
           </div>
           <Button>           
                <a href="/edit-venue-profile"> Edit profile</a>               
           </Button>
        </div>
    )
}

export default withAuth(VenueProfile);