import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import promoter from '../../resources/img/promoter.png';
import venue from '../../resources/img/venue.png';
import Navigation from '../../components/Navigation/Navigation';
import './SignUp.css';

<h1>Sign Up</h1>



export default function SignUp() {
    return (
        <div className="signup">
            <Navigation/>
            <div className="signup-option">
                <div>
                    <p>Sign up as a promoter</p>
                    <img src={promoter} alt="promoter"/>
                </div>
                <Link to="/signup-promoter">
                <Button variant="primary">
                    Create Promoter
                </Button>
                </Link>
            </div>
            <div className="signup-option">
                <div>
                    <p>Sign up as a venue</p>
                    <img src={venue} alt="venue"/>
                </div>
                <Link to="/signup-venue">
                <Button variant="primary">
                    Create Venue
                </Button>
                </Link>
            </div>
        </div>
    )
}
