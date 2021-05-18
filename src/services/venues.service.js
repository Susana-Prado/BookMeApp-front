import axios from 'axios';

import React, { Component } from 'react';

export default class VenueService extends Component {
  constructor() {
      super();
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/reservation/search`,
      withCredentials: true,
    });
  }

  get = () => this.instance.get('/');
  getFiltered = (data) => this.instance.post('/', data);
  getOne = (id) => this.instance.get(`/${id}`);
  deleteOne = (id) => this.instance.delete(`/${id}`);
  updateOne = (id, data) => this.instance.put(`/${id}`, data);
}
