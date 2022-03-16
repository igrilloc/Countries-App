import React from 'react';
import { Link } from 'react-router-dom';

// Style:
import './card.css';


export default function Card ({ id, flags, name, continents }) {
    return (

        <Link to = {`/countries/${id}`}>
            <div key = {id} className = "containerCard">
                
                <img 
                    className = "imgCard"
                    src = {flags} 
                    alt = "Not found"
                />

                <div className = "containerProps">
                    <p className = "countryName">{name}</p>
                    <p className = "countryContinent"> Continent: {continents[0]}</p>
                </div>

            </div>
        </Link> 
    )
};

