import React, { Component } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import './SearchForm.css';

const capacities = {
    capacity0: '---',
    capacity1: '0 - 150',
    capacity2: '150 - 400',
    capacity3: '400 - 800',
    capacity4: '800 - 1200',
    capacity5: '1200 - 2000',
    capacity5: '2000 - 5000'
}


const cities = {
    city0: '---',
    city1: 'Barcelona',
    city2: 'Madrid',
    city3: 'Bilbao'
}

export default class SearchForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          fields: {
              name:'',
              city:'---',
              capacity:'---',
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
            city:'---',
            capacity: '---',
            date:''
        },
        errors:{
            name: null,
            city: null,
            capacity: null,
            date: null
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
            <input type="text" name="name" value={fields.name} onChange={(e) => this.handleChange(e)}/>
          </div>
          <div className="input-container">
            <label htmlFor="city">City</label>
            <select name="city" id="city" onChange={(e) => this.handleChange(e)}>
            {Object.values(cities).map(key => (
                <option key={key} value={key}>{key}</option>
            ))}
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="capacity">Capacity</label>
            <select name="capacity" id="capacity" onChange={(e) => this.handleChange(e)}>
            {Object.values(capacities).map(key => (
                <option key={key} value={key}>{key}</option>
            ))}
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="date">Date</label>
            <input type="date" name="date" value={fields.date} onChange={(e) => this.handleChange(e)}/>
          </div>

          <Button variant="primary" type="submit">Search</Button>
        </form>
      </div>    
    );
  }
}
