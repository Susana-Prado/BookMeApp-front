import './VenueDetails.css';
import React, { Component } from 'react';
import VenueService from '../../services/venues.service';
import VenueInfo from '../../components/VenueInfo/VenueInfo';


export default class VenueDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: {},
    };

    this.VenueService = new VenueService();
  }

  componentDidMount(){
    this.getVenue()
  }

  getVenue = () => {
    this.VenueService
    .getOne(this.props.match.params.id)
    .then(({data}) => {
      this.setState({venue:data})
    })
    .catch((err) => console.error(err))
  }

   
  render() {
    return (
      <div>
        <VenueInfo {...this.state.venue} />
      </div>
    );
  }
}
