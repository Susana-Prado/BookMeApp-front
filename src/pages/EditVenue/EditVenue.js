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
const genres = {
    genre1 : "All",
    genre2 : "Metal/Rock/Punk/Alternative",
    genre3 : "Blues/Rock",
    genre4 : "HipHop/Rap",
    genre5 : "Jazz",
    genre6 : "R&B/Soul",
    genre7 : "Latin",
    genre8 : "Folk/Acoustic",
    genre9 : "Electronic",
    genre10 : "Experimental"  
  } 
class EditVenue extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        name: this.props.user.name,
        image: null,
        website: this.props.user.website,
        CIF: this.props.user.CIF,
        capacity: this.props.user.capacity,
        rentingPrice: this.props.user.rentingPrice,
        rider: '',
        conditions: this.props.user.conditions,
        license: '',
        merch: this.props.user.merch,
        security: this.props.user.security,
        ticketOffice: this.props.user.ticketOffice,
        production: this.props.user.production,
        technicians: this.props.user.technicians,
        genre: this.props.user.genre      
      },
    //   errors: {
    //     name: null,
    //     image: null
    //   }
    }
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.editVenue(this.state.fields);
  }
  handleChange(event){
    const { name, value, type, files } = event.target;
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

  deleteUser = async () => {
    await this.props.deleteVenue()
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
        <div className="form-item">
          <label htmlFor="website">Website: </label>
          <input type="text" name="website" value={fields.website} onChange={(e) => this.handleChange(e)} />
        </div>
        {/* <div className="form-item">
          <label htmlFor="contactInfo">Address: </label>
          <input type="text" name="address" value={fields.address} onChange={(e) => this.handleChange(e)} />
        </div> */}
        <div className="form-item">
          <label htmlFor="image">Image: </label>
          <input type="file" name="image" onChange={(e) => this.handleChange(e)} />
        </div>
        <div className="form-item">
          <label htmlFor="contactInfo">Contact info: </label>
          <input type="text" name="contactInfo" value={fields.contactInfo} onChange={(e) => this.handleChange(e)} />
        </div>
        <div className="form-item">
          <label htmlFor="CIF">CIF: </label>
          <input type="text" name="CIF" value={fields.CIF} onChange={(e) => this.handleChange(e)} />
        </div>
        <div className="form-item">
          <label htmlFor="capacity">Capacity: </label>
          <input type="number" name="capacity" value={fields.capacity} onChange={(e) => this.handleChange(e)} />
        </div>
        <div className="form-item">
          <label htmlFor="rentingPrice">Renting price: </label>
          <input type="number" name="rentingPrice" value={fields.rentingPrice} onChange={(e) => this.handleChange(e)} />
        </div>
        <div className="form-item">
          <label htmlFor="rider">Rider: </label>
          <input type="file" name="rider" value={fields.rider} onChange={(e) => this.handleChange(e)} />
        </div>
        <div className="form-item">
          <label htmlFor="conditions">Conditions: </label>
          <input type="text" name="conditions" value={fields.conditions} onChange={(e) => this.handleChange(e)} />
        </div>
        <div className="form-item">
          <label htmlFor="license">License: </label>
          <input type="file" name="license" value={fields.license} onChange={(e) => this.handleChange(e)} />
        </div> 
        <div className="form-item">
          <label htmlFor="merch">Merch: </label>
          <input type="checkbox" name="merch" value={fields.merch} onChange={(e) => this.handleCheckbox(e)} />
        </div>
        <div className="form-item">
          <label htmlFor="security">Security: </label>
          <input type="checkbox" name="security" value={fields.security} onChange={(e) => this.handleCheckbox(e)} />
        </div>    
        <div className="form-item">
          <label htmlFor="ticketOffice">Ticket office: </label>
          <input type="checkbox" name="ticketOffice" value={fields.ticketOffice} onChange={(e) => this.handleCheckbox(e)} />
        </div>
        <div className="form-item">
          <label htmlFor="production">Production: </label>
          <input type="checkbox" name="production" value={fields.production} onChange={(e) => this.handleCheckbox(e)} />
        </div>
        <div className="form-item">
          <label htmlFor="technicians">Technicians: </label>
          <input type="checkbox" name="technicians" value={fields.technicians} onChange={(e) => this.handleCheckbox(e)} />
        </div>
        <div className="form-item">
          <label htmlFor="genre">Genre:</label>
            <select name="genre" value={fields.genre} onChange={(e) => this.handleChange(e)}>
              {Object.values(genres).map(key => (
                  <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </div> 
        <Button type="submit">
            Save changes
        </Button>        
      </form>
      <Button onClick={() => this.deleteUser()}>Delete User</Button>
      </div>
    )
  }
}
export default withAuth(EditVenue);