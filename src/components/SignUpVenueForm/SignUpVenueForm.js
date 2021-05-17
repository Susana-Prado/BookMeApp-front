import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
const EMAIL_PATTERN = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ 


const validators = {
    name: (value) => {
      let message;
      if(!value){
        message = 'Name is required';
      }
  
      return message;
    },
    email: (value) => {
      let message;
      if(!value){
        message = 'Email is required';
      } else if(!EMAIL_PATTERN.test(value)){
        message = 'Invalid email';
      }
  
      return message;
    },
    password: (value) => {
      let message;
      if(!value){
        message = 'Password is required';
      } else if(value.length < 3){
        message = 'Invalid password'
      }
  
      return message;
    },
  }
  
export default class SignUpVenueForm extends Component  {
    constructor(props){
      super(props);
      this.state = {
        fields: {
          name: "",
          email: "",
          password: ""
        },
        errors: {
          name: null,
          email: null,
          password: null
        }
      }
    }
  
    handleSubmit(event){
      event.preventDefault();
      console.log(this.state.fields);
      this.props.signup(this.state.fields);
    }
  
    handleChange(event){
      const { name, value } = event.target;
      this.setState({
        fields: {
          ...this.state.fields,
          [name]: value
        },
        errors: {
          ...this.state.errors,
          [name]: validators[name](value)
        }
      })
    }
  
    render() {
      const { fields } = this.state;
      return (
        <div className="form-container">
        <form className="signup-form" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-item">
            {/* <label htmlFor="name">Name: </label> */}
            <input type="text" placeholder="Name (required)" name="name" value={fields.name} onChange={(e) => this.handleChange(e)} />
          </div>
  
          <div className="form-item">
            {/* <label htmlFor="email">Email: </label> */}
            <input type="text" placeholder="Email (required)" name="email" value={fields.email} onChange={(e) => this.handleChange(e)} />
          </div>
  
          <div className="form-item">
            {/* <label htmlFor="password">Password: </label> */}
            <input type="password" placeholder="Password (required)" name="password" value={fields.password} onChange={(e) => this.handleChange(e)} />
          </div>   

          <div className="form-item">
            {/* <label htmlFor="website">Website: </label> */}
            <input type="text" placeholder="website" name="website" value={fields.website} onChange={(e) => this.handleChange(e)} />
          </div>    

          <div className="form-item">
            {/* <label htmlFor="email">Location: </label> */}
            <input type="text" placeholder="Location" name="location" value={fields.location} onChange={(e) => this.handleChange(e)} />
          </div>   

          <div className="form-item">
            {/* <label htmlFor="contactInfo">Contact Info: </label> */}
            <input type="text" placeholder="Contact Info" name="contactInfo" value={fields.contactInfo} onChange={(e) => this.handleChange(e)} />
          </div>        

          <div className="form-item">
            {/* <label htmlFor="CIF">CIF: </label> */}
            <input type="text" placeholder="CIF (required)" name="CIF" value={fields.CIF} onChange={(e) => this.handleChange(e)} />
          </div> 

          <div className="form-item">
            {/* <label htmlFor="capacity">Capacity: </label> */}
            <input type="number" placeholder="Capacity (required)" name="capacity" value={fields.capacity} onChange={(e) => this.handleChange(e)} />
          </div> 

          <div className="form-item">
            {/* <label htmlFor="rentingPrice">Renting Price: </label> */}
            <input type="number" placeholder="Renting Price" name="rentingPrice" value={fields.rentingPrice} onChange={(e) => this.handleChange(e)} />
          </div> 

          <div className="form-item">
            {/* <label htmlFor="rider">Rider: </label> */}
            <input type="text" placeholder="Rider (required)" name="rider" value={fields.rider} onChange={(e) => this.handleChange(e)} />
          </div>

          <div className="form-item">
            {/* <label htmlFor="conditions">Conditions: </label> */}
            <input type="text" placeholder="Conditions (required)" name="conditions" value={fields.conditions} onChange={(e) => this.handleChange(e)} />
          </div>

          <div className="form-item">
            {/* <label htmlFor="license">License: </label> */}
            <input type="text" placeholder="License (required)" name="license" value={fields.license} onChange={(e) => this.handleChange(e)} />
          </div>

          <div className="form-item">
            {/* <label htmlFor="date">Date: </label> */}
            <input type="date" placeholder="Date" name="date" value={fields.date} onChange={(e) => this.handleChange(e)} />
          </div>

          <div className="form-item">
          <label htmlFor="merch">Merch </label>
            <input type="checkbox" name="merch" value={fields.merch} onChange={(e) => this.handleChange(e)} />
          </div>

          <div className="form-item">
          <label htmlFor="security">Security </label>
            <input type="checkbox" name="security" value={fields.security} onChange={(e) => this.handleChange(e)} />
          </div>

          <div className="form-item">
          <label htmlFor="ticketOffice">Ticket Office </label>
            <input type="checkbox" name="ticketOffice" value={fields.ticketOffice} onChange={(e) => this.handleChange(e)} />
          </div>

          <div className="form-item">
          <label htmlFor="production">Production </label>
            <input type="checkbox" name="production" value={fields.production} onChange={(e) => this.handleChange(e)} />
          </div>

          <div className="form-item">
          <label htmlFor="technicians">Technicians </label>
            <input type="checkbox" name="technicians" value={fields.technicians} onChange={(e) => this.handleChange(e)} />
          </div>

          {/* <div className="form-item">
          <label htmlFor="genre">Genre:</label>
            <select name="genre" value={fields.genre} onChange={(e) => this.handleChange(e)}>
              <option value={fields.genre.All}>All</option>
              <option value={fields.genre.Metal/Rock/Punk/Alternative}>Metal/Rock/Punk/Alternative</option>
              <option value={fields.genre.Blues/Rock}>Blues/Rock</option>
              <option value={fields.genre.HipHop/Rap}>HipHop/Rap</option>
              <option value={fields.genre.Jazz}>Jazz</option>
              <option value={fields.genre.R&B/Soul}>R&B/Soul</option>
              <option value={fields.genre.Latin}>Latin</option>
              <option value={fields.genre.Folk/Acoustic}>Folk/Acoustic</option>
              <option value={fields.genre.Electronic}>Electronic</option>
              <option value={fields.genre.Experimental}>Experimental</option>
            </select>
          </div>          */}
         
          <Button type="submit">
           Create Venue
          </Button>
        </form>
        </div>
      )
    }
  }
  
 