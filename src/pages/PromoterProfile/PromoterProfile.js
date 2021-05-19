import React from 'react';
import { Button } from 'react-bootstrap';
import { withAuth } from '../../context/auth.context';
import promoter from '../../resources/img/promoter.png';
import PrivateService from '../../services/private.service';

class PromoterProfile extends React.Component {
  state = { user: {} };

  PrivateService = new PrivateService();

  componentDidMount() {
    this.PrivateService.getPromoter()
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="left-side">
          <div className="profile-detail">
            <p>Name: {this.state.user.name}</p>
          </div>
          <div className="right-side">
            <img className="promoter" src={this.state.user.image} alt="promoter" />
          </div>
          <div className="profile-detail">
            <p>Email: {this.state.user.email}</p>
          </div>
          <div className="profile-detail">
            <p>CIF:{this.state.user.CIF}</p>
          </div>
        </div>

        <div>
        <p>Bookings: </p>
          {this.state.user && this.state.user.bookings && this.state.user.bookings.map(booking => {
            return <p>Venue Name:{booking.venue.name} - Date: {booking.date}</p>
          })}
        </div>
        <Button>
          <a href="/edit-promoter-profile"> Edit profile info</a>
        </Button>
      </div>
    );
  }
}

export default withAuth(PromoterProfile);
