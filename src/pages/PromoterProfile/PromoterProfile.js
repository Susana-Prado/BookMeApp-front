import React from 'react';
import { Button } from 'react-bootstrap';
import promoter from '../../resources/img/promoter.png'

export default function PromoterProfile(props) {
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
           <img className="promoter" src={promoter} alt="promoter" />   
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
