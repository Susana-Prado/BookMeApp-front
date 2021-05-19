import axios from 'axios';

import React, { Component } from 'react';

export default class VenueService extends Component {
  constructor() {
      super();
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/reservation`,
      withCredentials: true,
    });
  }

  get = () => this.instance.get('/search');
  getFiltered = (data) => this.instance.post('/search', data);
  getOne = (id) => this.instance.get(`/venue/${id}`);
  bookVenue = (id, date) => this.instance.post(`/venue/${id}/book`, {date})
  deleteBooking= (id) => this.instance.delete(`/booking/${id}`);
}