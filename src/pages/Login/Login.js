import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { withAuth } from '../../context/auth.context';
import './Login.css';
const EMAIL_PATTERN = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ 

const validators = {
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
  
  class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
        fields: {
          email: "",
          password: ""
        },
        errors: {
          email: null,
          password: null
        }
      }
    }
  
    handleSubmit(event){
      event.preventDefault();
      console.log(this.state.fields);
      this.props.login(this.state.fields);
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
        <div className="form-container3">
            <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-item3">
                <input type="text" placeholder="Email" name="email" value={fields.email} onChange={(e) => this.handleChange(e)} />
            </div>
    
            <div className="form-item3">
                <input type="password" placeholder="Password" name="password" value={fields.password} onChange={(e) => this.handleChange(e)} />
            </div>
            <Button variant="primary" type="submit">
                Log in
            </Button>
            
            </form>
        </div>
      )
    }
  }

  export default withAuth(Login);