import React from 'react';
import { Button } from 'react-bootstrap';
import { withAuth } from '../../context/auth.context';
import promoter from '../../resources/img/promoter.png'

function PromoterProfile(props) {
    return (
        <div className="container">
            <div className="left-side">
                <div className="profile-detail">
                        <p>{props.user.name}</p>           
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

export default withAuth(PromoterProfile);
