import React from 'react';
import { Button } from 'react-bootstrap';
import { withAuth } from '../../context/auth.context';
import promoter from '../../resources/img/promoter.png';

function PromoterProfile(props) {
  return (
    <div className="container">
      <div className="left-side">
        <div className="profile-detail">
          <p>Name: {props.user.name}</p>
        </div>
        <div className="right-side">
          <img className="promoter" src={props.user.image} alt="promoter" />
        </div>
        <div className="profile-detail">
          <p>Email: {props.user.email}</p>
        </div>
        <div className="profile-detail">
          <p>CIF:{props.user.CIF}</p>
        </div>
      </div>

      <div>
        <p>Bookings: {props.user.bookings}</p>
      </div>
      <Button>
        <a href="/edit-promoter-profile"> Edit profile info</a>
      </Button>
    </div>
  );
}

export default withAuth(PromoterProfile);
