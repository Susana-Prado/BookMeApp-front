import React from 'react';
import { Button } from 'react-bootstrap';
import { withAuth } from '../../context/auth.context';
import promoter from '../../resources/img/promoter.png';
import PrivateService from '../../services/private.service';
import './PromoterProfile.css';
import DeleteIcon from '@material-ui/icons/Delete';
import VenueService from '../../services/venues.service';

class PromoterProfile extends React.Component {
  state = { user: {}, isBookingsVisible: false };

  PrivateService = new PrivateService();
  VenueService = new VenueService();

  componentDidMount() {
    this.getPromoterData();
  }

  getPromoterData(){
    this.PrivateService.getPromoter()
    .then((response) => {
      this.setState({ user: response.data });
    })
    .catch((err) => console.error(err));
  }

  deleteBooking(booking) {
    this.VenueService.deleteBooking(booking.id)
      .then(() => {
       this.getPromoterData();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="user-profile">

      <div className="user-details">
        <div className="user">
          <div className="profile-detail">
            <h3>{this.state.user.name}</h3>
          </div>
          <div className="profile-detail">
            <p>Email:{this.state.user.email}</p>
          </div>
          <div className="profile-detail">
            <p>CIF:{this.state.user.CIF}</p>
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
                    <div>Venue Name:{booking.venue.name}</div>
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
          <a href="/edit-promoter-profile"> Edit profile info</a>
        </Button>
      </div>
      </div>
    );
  }
}

export default withAuth(PromoterProfile);
