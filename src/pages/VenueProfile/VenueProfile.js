import React from 'react';
import { Button } from 'react-bootstrap';
import { withAuth } from '../../context/auth.context';
import PrivateService from '../../services/private.service';
import DeleteIcon from '@material-ui/icons/Delete';
import VenueService from '../../services/venues.service';
import './VenueProfile.css';

class VenueProfile extends React.Component {
  state = { user: {} };

  PrivateService = new PrivateService();
  VenueService = new VenueService();

  componentDidMount() {
    this.getVenueData();
  }

  getVenueData() {
    this.PrivateService.getVenue()
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((err) => console.error(err));
  }

  deleteBooking(booking) {
    this.VenueService.deleteBooking(booking.id)
      .then(() => {
        this.getVenueData();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="user-profile2">
        <div className="user-details2">
          <div className="profile-detail2">
            <h3>{this.state.user.name}</h3>
          </div>
          <div className="user2">
            <div className="venue-left">
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
                <p>
                  Ticket office: {this.state.user.ticketOffice ? 'Yes' : 'No'}{' '}
                </p>
              </div>
              <div className="profile-detail">
                <p>Production: {this.state.user.production ? 'Yes' : 'No'} </p>
              </div>
              <div className="profile-detail">
                <p>
                  Technicians: {this.state.user.technicians ? 'Yes' : 'No'}{' '}
                </p>
              </div>
              <div className="profile-detail">
                <p>Genre: {this.state.user.genre} </p>
              </div>
            </div>
            <div className="venue-right">
              <div className="profile-detail">
                <img
                  className="venue"
                  src={this.state.user.image}
                  alt="venue"
                />
              </div>
            </div>
          </div>

          <div className="bookings">
            <h5>Bookings:</h5>
            <p>
              {this.state.user &&
                this.state.user.bookings &&
                this.state.user.bookings.map((booking) => {
                  return (
                    <div className="delete">
                      <div>Promoter Name:{booking.promoter.name}</div>
                      <div>Date: {booking.date}</div>
                      <DeleteIcon
                        onClick={() => {
                          this.deleteBooking(booking);
                        }}
                      />
                    </div>
                  );
                })}
            </p>
          </div>
          <Button>
            <a href="/edit-venue-profile"> Edit profile info</a>
          </Button>
        </div>
      </div>
    );
  }
}

export default withAuth(VenueProfile);
