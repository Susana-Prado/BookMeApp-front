import React from 'react';
import { Button } from 'react-bootstrap';
import { withAuth } from '../../context/auth.context';
import PrivateService from '../../services/private.service';


class VenueProfile extends React.Component {
  state = { user: {} };

  PrivateService = new PrivateService();

  componentDidMount() {
    this.PrivateService.getVenue()
    .then(response => {
      this.setState({user: response.data})
    })
    .catch(err => console.error(err))
  }


  render(){
    return (
      <div className="container">
        <div className="left-side">
          <div className="profile-detail">
            <p>Name: {this.state.user.name}</p>
          </div>
          <div className="right-side">
            <img className="venue" src={this.state.user.image} alt="venue" />
          </div>
          <div className="profile-detail">
            <p>Email: {this.state.user.email}</p>
          </div>
          <div className="profile-detail">
            <p>CIF: {this.state.user.CIF}</p>
          </div>
          <div className="profile-detail">
            <p>Website: {this.state.user.website}</p>
          </div>
          <div className="profile-detail">
            <p>Capacity: {this.state.user.capacity}</p>
          </div>
          <div className="profile-detail">
            <p>Price: {this.state.user.rentingPrice} €</p>
          </div>
          <div className="profile-detail">
            <p>Rider: {this.state.user.rider} </p>
          </div>
          <div className="profile-detail">
            <p>Conditions: {this.state.user.conditions} </p>
          </div>
          <div className="profile-detail">
            <p>License: {this.state.user.license} </p>
          </div>
          <div className="profile-detail">
            <p>Merch: {this.state.user.merch ? 'Yes' : 'No'} </p>
          </div>
          <div className="profile-detail">
            <p>Security: {this.state.user.security ? 'Yes' : 'No'} </p>
          </div>
          <div className="profile-detail">
            <p>Ticket office: {this.state.user.ticketOffice ? 'Yes' : 'No'} </p>
          </div>
          <div className="profile-detail">
            <p>Production: {this.state.user.production ? 'Yes' : 'No'} </p>
          </div>
          <div className="profile-detail">
            <p>Technicians: {this.state.user.technicians ? 'Yes' : 'No'} </p>
          </div>
          <div className="profile-detail">
            <p>Genre: {this.state.user.genre} </p>
          </div>
        </div>

        <div>
          <p>Bookings: </p>
          {this.state.user && this.state.user.bookings && this.state.user.bookings.map(booking => {
            return <p>Promoter Name:{booking.promoter.name} - Date: {booking.date}</p>
          })}
        </div>
        <Button>
          <a href="/edit-venue-profile"> Edit profile info</a>
        </Button>
      </div>
    );
  }
}


export default withAuth(VenueProfile);
