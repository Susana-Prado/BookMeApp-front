import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { withAuth } from '../../context/auth.context';
import './EditVenue.css';

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
  genre1: 'All',
  genre2: 'Metal/Rock/Punk/Alternative',
  genre3: 'Blues/Rock',
  genre4: 'HipHop/Rap',
  genre5: 'Jazz',
  genre6: 'R&B/Soul',
  genre7: 'Latin',
  genre8: 'Folk/Acoustic',
  genre9: 'Electronic',
  genre10: 'Experimental',
};
class EditVenue extends Component {
  constructor(props) {
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
        genre: this.props.user.genre,
      },
      //   errors: {
      //     name: null,
      //     image: null
      //   }
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const uploadData = new FormData();
    //uploadData.append('nombre de la clave', 'valor');
    Object.keys(this.state.fields).forEach((key) => {
      uploadData.append(key, this.state.fields[key]);
    });
    this.props.editVenue(uploadData);
  }

  handleChange(event) {
    const { name, value, type, files } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: type === 'file' ? files[0] : value,
      },
      //   ,
      //   errors: {
      //     ...this.state.errors,
      //     [name]: type === 'file' ? validators[name](files[0]) : validators[name](value)
      //   }
    });
  }

  handleCheckbox(event) {
    const { name } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: !this.state.fields[name],
      },
    });
  }

  deleteUser = async () => {
    await this.props.deleteVenue();
  };

  render() {
    const { fields } = this.state;
    return (
      <div className="container-edit">
        <form
          className="form-container4"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <div className="flex-edit">
            <div className="edit-venue-left">
              <div className="form-item4">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="form-item4">
                <label htmlFor="website">Website: </label>
                <input
                  type="text"
                  name="website"
                  value={fields.website}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              {/* <div className="form-item">
          <label htmlFor="contactInfo">Address: </label>
          <input type="text" name="address" value={fields.address} onChange={(e) => this.handleChange(e)} />
        </div> */}
              <div className="form-item4">
                <label htmlFor="image">Image: </label>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="form-item4">
                <label htmlFor="contactInfo">Contact info: </label>
                <input
                  type="text"
                  name="contactInfo"
                  value={fields.contactInfo}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="form-item4">
                <label htmlFor="CIF">CIF: </label>
                <input
                  type="text"
                  name="CIF"
                  value={fields.CIF}
                  onChange={(e) => this.handleChange(e)}
                />
                <div className="form-item4">
                  <label htmlFor="capacity">Capacity: </label>
                  <input
                    type="number"
                    name="capacity"
                    value={fields.capacity}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-item4">
                  <label htmlFor="rentingPrice">Renting price: </label>
                  <input
                    type="number"
                    name="rentingPrice"
                    value={fields.rentingPrice}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="edit-venue-right">
              <div className="form-item4">
                <label htmlFor="rider">Rider: </label>
                <input
                  type="file"
                  name="rider"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="form-item4">
                <label htmlFor="conditions">Conditions: </label>
                <input
                  type="text"
                  name="conditions"
                  value={fields.conditions}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="form-item4">
                <label htmlFor="license">License: </label>
                <input
                  type="file"
                  name="license"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="form-item4">
                <label htmlFor="merch">Merch: </label>
                <input
                  type="checkbox"
                  name="merch"
                  value={fields.merch}
                  onChange={(e) => this.handleCheckbox(e)}
                />
              </div>
              <div className="form-item4">
                <label htmlFor="security">Security: </label>
                <input
                  type="checkbox"
                  name="security"
                  value={fields.security}
                  onChange={(e) => this.handleCheckbox(e)}
                />
              </div>
              <div className="form-item4">
                <label htmlFor="ticketOffice">Ticket office: </label>
                <input
                  type="checkbox"
                  name="ticketOffice"
                  value={fields.ticketOffice}
                  onChange={(e) => this.handleCheckbox(e)}
                />
              </div>
              <div className="form-item4">
                <label htmlFor="production">Production: </label>
                <input
                  type="checkbox"
                  name="production"
                  value={fields.production}
                  onChange={(e) => this.handleCheckbox(e)}
                />
              </div>
              <div className="form-item4">
                <label htmlFor="technicians">Technicians: </label>
                <input
                  type="checkbox"
                  name="technicians"
                  value={fields.technicians}
                  onChange={(e) => this.handleCheckbox(e)}
                />
              </div>
              <div className="form-item4">
                <label htmlFor="genre">Genre:</label>
                <select
                  name="genre"
                  value={fields.genre}
                  onChange={(e) => this.handleChange(e)}
                >
                  {Object.values(genres).map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <Button type="submit">Save changes</Button>
        </form>
        <Button className="alarm" onClick={() => this.deleteUser()}>
          Delete User
        </Button>
      </div>
    );
  }
}
export default withAuth(EditVenue);
