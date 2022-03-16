import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Actions:
import { getCountryName } from '../../redux/actions/countryAction.js';

// Styles:
import './searchBar.css';


export default function SearchBar() {

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    

    function handleChange(event) {
        // console.log("handleChange SERCHBAR:", event.target.value)
        setName(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(getCountryName(name));
        setName("");
    };


    return (
        <div className = "container">
            
            <input
            className = 'searchButton'
            type = "text"
            name = "name"
            placeholder = "Choose a country!"
            onChange = {(event) => handleChange(event)}
            value = {name}
            />

            <button className = "btnSubmit" onClick = {(event) => handleSubmit(event)} type = "submit">
                <img src = "images/search.png" alt = "img not found" className = "imgSearch"  />
            </button>

        </div>
    )
};