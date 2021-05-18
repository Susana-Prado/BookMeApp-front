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
      this.setState({venues: response.data})
    })
    .catch(err => console.error(err))
  }


  showResults(searchdata){
    console.log(searchdata);
    this.VenueService.getFiltered(searchdata)
    .then(response => {
      this.setState({venues: response.data})
    })
    .catch(err => console.error(err))
  }

  displayVenues(){
    return this.state.venues.map(venue => {
      return <VenueCard {...venue} />
    })
  }

  render() {
    return (
      <div>
        <SearchForm showResults = {(results) => this.showResults(results)}  />
        {this.displayVenues()}
      </div>
    );
  }
}
