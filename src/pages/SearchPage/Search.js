import SearchForm from '../../components/Searchform/SearchForm';
import React, { Component } from 'react';
import './Search.css';
import VenueCard from '../../components/VenueCard/VenueCard';

export default class Search extends Component {


  showResults(){
    
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
