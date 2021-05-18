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

    deleteOne = (id) => this.instance.delete(`/${id}`);
    updateOne = (id, data) => this.instance.put(`/${id}`, data);
}
