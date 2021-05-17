import React from 'react';
import { Button } from 'react-bootstrap';
import avatar from '../../resources/img/avatar.png'

export default function PromoterProfile() {
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
           </div>
           <div className="right-side">
           <img className="avatar" src={avatar} alt="avatar" />   
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
