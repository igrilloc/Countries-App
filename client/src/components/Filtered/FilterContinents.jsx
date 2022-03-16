import React from 'react';
import { useDispatch } from 'react-redux';

// Actions:
import { filterCountryByContinent } from '../../redux/actions/countryAction.js';

// Styles:
import './filterContinents.css'


export default function FilterContinents () {

    const dispatch = useDispatch();

    // FILTER BY CONTINENT:
    function handleContinent(event) {

        dispatch(filterCountryByContinent(event.target.value))
    };
    

    return (
        <div>
            <select onChange = {(event) => handleContinent(event)} className = "continentSelector">
                <option value = "All"> All continents </option>
                <option value = "Africa"> Africa </option>
                <option value = "Antarctica"> Antarctica </option>
                <option value = "Asia"> Asia </option>
                <option value = "Europe"> Europe </option>
                <option value = "North America"> North America </option>
                <option value = "South America"> South America </option>
                <option value = "Oceania"> Oceania </option>             
            </select>
        </div>
    )

}



