import React, { Component } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import './SearchForm.css';

export default class SearchForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          fields: {
              name:'',
              city:'',
              capacity:'',
              date:''
          }
      }
  }

  handleSubmit(event){
      event.preventDefault();
      console.log(this.state.fields)
      this.props.showResults(this.state.fields);
      this.setState({
        fields: {
            name:'',
            city:'',
            capacity:'',
            date:''
        },
        errors:{
            name: null,
            calories: null,
            image: null,
            quantity: null
        }
      })
  }

 

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
        fields:{
            ...this.state.fields,
            [name]: value
        },
    })
}
  
    render() {
    const {fields} = this.state;
    return (
      <div className="search-container">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input type="text" value={fields.name} onChange={(e) => this.handleChange(e)}/>
          </div>
          <div className="input-container">
            <label htmlFor="city">City</label>
            <select name="city" id="city">
              <option value={fields.city} onChange={(e) => this.handleChange(e)}>Barcelona</option>
              <option value={fields.city} onChange={(e) => this.handleChange(e)}>Madrid</option>
              <option value={fields.city} onChange={(e) => this.handleChange(e)}>Bilbao</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="capacity">Capacity</label>
            <select name="capacity" id="capacity">
              <option value={fields.capacity} onChange={(e) => this.handleChange(e)}>0-150 p</option>
              <option value={fields.capacity} onChange={(e) => this.handleChange(e)}>150-400 p</option>
              <option value={fields.capacity} onChange={(e) => this.handleChange(e)}>400-800 p</option>
              <option value={fields.capacity} onChange={(e) => this.handleChange(e)}>800-1200 p</option>
              <option value={fields.capacity} onChange={(e) => this.handleChange(e)}>1200-2000 p</option>
              <option value={fields.capacity} onChange={(e) => this.handleChange(e)}>2000-5000 p</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="date">Date</label>
            <input type="date" value={fields.date} onChange={(e) => this.handleChange(e)}/>
          </div>

          <Button variant="primary" type="submit">Search</Button>
        </form>
      </div>    
    );
  }
}
