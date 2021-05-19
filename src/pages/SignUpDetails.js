import React, { Component } from 'react';
import SignUpPromoterForm from '../components/SignUpPromoterForm/SignUpPromoterForm';
import SignUpVenueForm from '../components/SignUpVenueForm/SignUpVenueForm';

export default class SignUpDetails extends Component {
    render() {
        return (
            <div className="signup-details">
                {/* <SignUpPromoterForm /> */}
                <SignUpVenueForm />               
            </div>
        )
    }
}
