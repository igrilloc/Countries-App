import React from 'react';
import { Link } from 'react-router-dom';

// Styles:
import './landingPage.css';


export default function LandingPage () {
    return (
        <div className = "containerLanding">
            
            <div className = "landing">

                <h1 className = "titleLanding">Welcome to <br />the countries app</h1>

                <div className = "containerButton">
                    <Link to = '/home'>
                        <button className = "button">Get into!</button>
                    </Link>
                </div>

            </div>
            
        </div>
    )
};


