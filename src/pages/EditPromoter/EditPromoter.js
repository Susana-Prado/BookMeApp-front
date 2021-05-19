import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { withAuth } from '../../context/auth.context'


// const validators = {
//   name: (value) => {
//     let message;
//     if(!value){
//       message = 'Username is required';
//     }

//     return message;
//   },
//   image: (value) => {
//     let message;
//     if(!value){
//       message = 'Photo is required';
//     } 

//     return message;
//   },
// }

class EditPromoter extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        name: this.props.user.name,
        image: null,
        CIF: this.props.user.CIF
      },
      errors: {
        name: null,
        image: null
      }
    }
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.fields);
    this.props.editPromoter(this.state.fields);
  }
  
  handleAddressChange(event){
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        address: {
        ...this.state.fields.address,
        [name]: value
        }
      },
      // errors: {
      //   ...this.state.errors,
      //   [name]: validators[name](value)
      // }
    })
  }
  deleteUser = async () => {
    await this.props.deletePromoter()
  }


  handleContactChange(event){
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        contactInfo: {
        ...this.state.fields.contactInfo,
        [name]: value
        }
      },
      // errors: {
      //   ...this.state.errors,
      //   [name]: validators[name](value)
      // }
    })
  }

  handleChange(event){
    const { name, value, type, files } = event.target;
    console.log(files);
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: type === 'file' ? files[0] : value
      }
    //   ,

    //   errors: {
    //     ...this.state.errors,
    //     [name]: type === 'file' ? validators[name](files[0]) : validators[name](value)
    //   }
      
    })
  }

  render() {
    const { fields } = this.state;
    return (
    <div className="container">
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form-item">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={fields.name} onChange={(e) => this.handleChange(e)} />
        </div>
        {/* //TODO:FIXME:TODO:FIXME:
        <div className="form-item">
          <label htmlFor="address">Address: </label>
          <input type="text" name="address" value={fields.address} onChange={(e) => this.handleChange(e)} />
        </div>
        //TODO:FIXME:TODO:FIXME:
        <div className="form-item">
          <label htmlFor="contactInfo">Contact Info: </label>
          <input type="text" name="contactInfo" value={fields.contactInfo} onChange={(e) => this.handleChange(e)} />
        </div>
        //TODO:FIXME:TODO:FIXME: */}
        <div className="form-item">
          <label htmlFor="image">Image: </label>
          <input type="file" name="image" onChange={(e) => this.handleChange(e)} />
        </div>

        <div className="form-item">
          <label htmlFor="CIF">CIF: </label>
          <input type="text" name="CIF" value={fields.CIF} onChange={(e) => this.handleChange(e)} />
        </div>

        <Button type="submit">
            Save changes?
        </Button> 
        <Button onClick={() => this.deleteUser()}>Delete User</Button>
       
      </form>
      </div>
    )
  }
}

export default withAuth(EditPromoter);