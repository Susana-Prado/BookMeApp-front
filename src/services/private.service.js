import axios from 'axios';

import React, { Component } from 'react'

export default class PrivateService extends Component {
    constructor() {
        super();
      this.instance = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/private`,
        withCredentials: true,
      });
    }

    delete = (id) => this.instance.delete(`/${id}`);
    editPromoter = (data) => this.instance.put(`/edit-promoter/`, data);
    editVenue = (data) => this.instance.put(`/edit-venue/`, data);
    deletePromoter = () => this.instance.delete('/delete-promoter');
    deleteVenue = () => this.instance.delete('/delete-venue');
}
