import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './SignUpPromoterForm.css';
import { withAuth } from '../../context/auth.context';
const EMAIL_PATTERN = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ 


const validators = {
  name: (value) => {
    let message;
    if(!value){
      message = 'Your name is required';
    }
    return message;
  },
  email: (value) => {
    let message;
    if(!value){
      message = 'Your email is required.';
    } else if(!EMAIL_PATTERN.test(value)){
      message = 'Invalid email';
    }
    return message;
  },
  password: (value) => {
    let message;
    if(!value){
      message = 'Password is required.';
    } else if(value.length < 4){
      message = 'Your password must be at least 4 characters long.'
    }
    return message;
  },
  CIF: (value) => {
    let message;
    if(!value){
      message = 'Your CIF is required';
    }
    return message;
  }
}
  
class SignUpPromoterForm extends Component  {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        password: "",
        CIF: ""
      },
      errors: {
        name: null,
        email: null,
        password: null,
        CIF: null
      }
    }
  }
  
    handleSubmit(event){
      event.preventDefault();
      console.log(this.state.fields);
      // this.props.signup(this.state.fields);
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
                  {/* <label htmlFor="name">Username: </label> */}
                  <input type="text" placeholder="Name" name="name" value={fields.name} onChange={(e) => this.handleChange(e)} />
                </div>
        
                <div className="form-item">
                  {/* <label htmlFor="email">Email: </label> */}
                  <input type="text" placeholder="Email" name="email" value={fields.email} onChange={(e) => this.handleChange(e)} />
                </div>
        
                <div className="form-item">
                  {/* <label htmlFor="password">Password: </label> */}
                  <input type="password" placeholder="Password" name="password" value={fields.password} onChange={(e) => this.handleChange(e)} />
                </div>

                <div className="form-item">
                  {/* <label htmlFor="CIF">CIF: </label> */}
                  <input type="text" placeholder="CIF" name="CIF" value={fields.CIF} onChange={(e) => this.handleChange(e)} />
                </div>            
              
                <Button className="form-item" type="submit">
                Create Promoter Account
                </Button>
              </form>
            </div>  
       
      )
    }
  }

  export default withAuth(SignUpPromoterForm);
  
 