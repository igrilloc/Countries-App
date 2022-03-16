import React from 'react';
import { useDispatch } from 'react-redux';

// Actions:
import { filterPopulationHigher, filterPopulationSmaller } from '../../redux/actions/countryAction.js';

// Style:
import './filterPopulation.css'


export default function FilterPopulation({ setState }) {

    const dispatch = useDispatch();

    function handleFilterPopulation(event) {
        
        event.target.value === "Higher"
        ? dispatch(filterPopulationHigher()) && setState("Higher")
        : dispatch(filterPopulationSmaller()) && setState("Smaller")
    }


    return (
        <div>

            <select onClick = {(event) => handleFilterPopulation(event)} className = "populationSelector" >
                <option value = "Higher"> Higher population </option> 
                <option value = "Smaller"> Smaller population </option>
            </select>

        </div>
    )
};

