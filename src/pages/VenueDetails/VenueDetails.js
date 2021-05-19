import './VenueDetails.css';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import VenueService from '../../services/venues.service';
import VenueInfo from '../../components/VenueInfo/VenueInfo';
import { withRouter } from 'react-router';
import Calendar from 'react-calendar';



class VenueDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: {},
      date: new Date()
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

  bookVenue = async () => {
    await this.VenueService
    .bookVenue(this.props.match.params.id, this.state.date)
  }
  handleDayClick = (e) =>{
    this.setState({date: e})
    console.log(e)
  }
   
  render() {
    return (
      <div>
        <VenueInfo {...this.state.venue} />
        <Calendar onClickDay={(e)=> this.handleDayClick(e)}/>
        <Button variant="primary" onClick={()=>this.bookVenue()}>Book</Button>
      </div>
    );
  }
}

export default  withRouter(VenueDetails);
