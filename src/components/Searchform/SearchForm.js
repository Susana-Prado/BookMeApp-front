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
      this.props.showResults(this.state.fields);
      this.setState({
        fields: {
            name:'',
            city:'',
            capacity:'',
            date:''
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
        <form onsubmit={(e) => this.handleSubmit(e)} action="/results" method="POST">
          <div className="input-container">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">City</label>
            <select name="city" id="city">
              <option value="Barcelona">Barcelona</option>
              <option value="Madrid">Madrid</option>
              <option value="Madrid">Bilbao</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="">Capacity</label>
            <select name="capacity" id="capacity">
              <option value="0-150">0-150 p</option>
              <option value="150-400">150-400 p</option>
              <option value="400-800">400-800 p</option>
              <option value="800-1200">800-1200 p</option>
              <option value="1200-2000">1200-2000 p</option>
              <option value="2000-5000">2000-5000 p</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="">Date</label>
            <input type="date" />
          </div>

          <Button variant="primary">Search</Button>
        </form>
      </div>    
    );
  }
}
