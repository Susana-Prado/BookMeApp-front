import React from 'react';
import { Button } from 'react-bootstrap';
import Navigation from '../components/Navigation/Navigation';
import './SignUp.css';

<h1>Sign Up</h1>



export default function SignUp() {
    return (
        <div className="signup">
            <Navigation/>
            <div className="signup-option">
                <div>
                    <p>Sign up as a promoter</p>
                </div>
                <Button variant="primary">
                    Create Promoter
                </Button>
            </div>
            <div className="signup-option">
                <div>
                    <p>Sign up as a venue</p>
                </div>
                <Button variant="primary">
                    Create Venue
                </Button>
            </div>
        </div>
    )
}
