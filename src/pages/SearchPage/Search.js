import SearchForm from '../../components/Searchform/SearchForm';
import React, { Component } from 'react';
import './Search.css';
import VenueCard from '../../components/VenueCard/VenueCard';
import VenueService from '../../services/venues.service';

export default class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      venues: []
    }
    this.VenueService = new VenueService()
  }

  componentDidMount(){
    this.VenueService.get()
    .then(response => {
      console.log(response.data);
      this.setState({venues: response.data})
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <SearchForm />
        <VenueCard />
      </div>
    );
  }
}
