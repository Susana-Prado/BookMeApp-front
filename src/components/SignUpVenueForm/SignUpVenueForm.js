import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { withAuth } from '../../context/auth.context';
import './SignUpVenueForm.css';
const EMAIL_PATTERN =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const validators = {
  name: (value) => {
    let message;
    if (!value) {
      message = 'Your name is required.';
    }

    return message;
  },
  email: (value) => {
    let message;
    if (!value) {
      message = 'Your email is required.';
    } else if (!EMAIL_PATTERN.test(value)) {
      message = 'Invalid email';
    }

    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = 'Password is required';
    } else if (value.length < 4) {
      message = 'Your password must be at least 4 characters long.';
    }

    return message;
  },
};

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

const cities = {
  city0: '---',
  city1: 'Barcelona',
  city2: 'Madrid',
  city3: 'Bilbao',
};

class SignUpVenueForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: '',
        email: '',
        password: '',
        address: {
          street: '',
          city: '',
          country: '',
        },
        contactInfo: {
          tel: '',
          email: '',
        },
        merch: false,
        security: false,
        ticketOffice: false,
        production: false,
        technicians: false,
      },
      errors: {
        name: null,
        email: null,
        password: null,
      },
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.fields);
    this.props.signupVenue(this.state.fields);
  }

  handleAddressChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        address: {
          ...this.state.fields.address,
          [name]: value,
        },
      },
      // errors: {
      //   ...this.state.errors,
      //   [name]: validators[name](value)
      // }
    });
  }

  handleContactChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        contactInfo: {
          ...this.state.fields.contactInfo,
          [name]: value,
        },
      },
      // errors: {
      //   ...this.state.errors,
      //   [name]: validators[name](value)
      // }
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
      // errors: {
      //   ...this.state.errors,
      //   [name]: validators[name](value)
      // }
    });
  }

  handleCheckbox(event) {
    const { name } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: !this.state[name],
      },
    });
  }

  render() {
    const { fields } = this.state;
    return (
      <div className="form-container2">
        <form className="signup-form2" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="info">
            <div className="left-side">
              <div className="form-item2">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={fields.name}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-item2">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={fields.email}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-item2">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={fields.password}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-item2">
                <input
                  type="text"
                  placeholder="Website"
                  name="website"
                  value={fields.website}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-item2">
              <label htmlFor="address">Address</label>
                <input
                  type="text"
                  placeholder="Street"
                  name="street"
                  value={fields.address.street}
                  onChange={(e) => this.handleAddressChange(e)}
                />
              </div>
              <div className="form-item2">
              <span>City: </span>
                <select
                  name="city"
                  value={fields.address.city}
                  onChange={(e) => this.handleAddressChange(e)}
                >
                  {Object.values(cities).map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-item2">
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={fields.address.country}
                  onChange={(e) => this.handleAddressChange(e)}
                />
              </div>

              <div className="form-item2">
              <label htmlFor="contactInfo">Contact Info</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  name="tel"
                  value={fields.contactInfo.tel}
                  onChange={(e) => this.handleContactChange(e)}
                />
              </div>

              <div className="form-item2">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={fields.contactInfo.email}
                  onChange={(e) => this.handleContactChange(e)}
                />
              </div>

              <div className="form-item2">
                <input
                  type="text"
                  placeholder="CIF"
                  name="CIF"
                  value={fields.CIF}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
            </div>
            <div className="right-side">
              <div className="form-item2">
                <input
                  type="number"
                  placeholder="Capacity"
                  name="capacity"
                  value={fields.capacity}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-item2">
                <input
                  type="number"
                  placeholder="Renting Price"
                  name="rentingPrice"
                  value={fields.rentingPrice}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-item2">
              <label htmlFor="rider">Rider</label>
                <input
                  type="file"
                  placeholder="Rider"
                  name="rider"
                  value={fields.rider}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-item2">
                <input
                  type="text"
                  placeholder="Conditions"
                  name="conditions"
                  value={fields.conditions}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-item2">
              <label htmlFor="license">License</label>
                <input
                  type="file"
                  placeholder="License"
                  name="license"
                  value={fields.license}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

              <div className="form-item2">
                <label htmlFor="merch">Merch(included?): </label>
                <input
                  type="checkbox"
                  name="merch"
                  value={fields.merch}
                  onChange={(e) => this.handleCheckbox(e)}
                />
              </div>

              <div className="form-item2">
                <label htmlFor="security">Security(included?): </label>
                <input
                  type="checkbox"
                  name="security"
                  value={fields.security}
                  onChange={(e) => this.handleCheckbox(e)}
                />
              </div>

              <div className="form-item2">
                <label htmlFor="ticketOffice">Ticket Office(included?): </label>
                <input
                  type="checkbox"
                  name="ticketOffice"
                  value={fields.ticketOffice}
                  onChange={(e) => this.handleCheckbox(e)}
                />
              </div>

              <div className="form-item2">
                <label htmlFor="production">Production(included?): </label>
                <input
                  type="checkbox"
                  name="production"
                  value={fields.production}
                  onChange={(e) => this.handleCheckbox(e)}
                />
              </div>

              <div className="form-item2">
                <label htmlFor="technicians">Technicians (included?): </label>
                <input
                  type="checkbox"
                  name="technicians"
                  value={fields.technicians}
                  onChange={(e) => this.handleCheckbox(e)}
                />
              </div>

              <div className="form-item2">
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

          <Button className="button" type="submit">
            Create Venue
          </Button>
        </form>
      </div>
    );
  }
}

export default withAuth(SignUpVenueForm);
