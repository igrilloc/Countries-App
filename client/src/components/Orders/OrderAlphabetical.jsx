import React from 'react';
import { useDispatch } from 'react-redux';

// Actions:
import { orderAlphabeticalAZ, orderAlphabeticalZA } from '../../redux/actions/countryAction.js';

// Styles:
import './orderAlphabetical.css'


export default function OrderAlphabetical({ setState }) {

    const dispatch = useDispatch();

    function handleOrderAlphabetical(event) {

        event.target.value === "AZ"
        ? dispatch(orderAlphabeticalAZ()) && setState("AZ")
        : dispatch(orderAlphabeticalZA()) && setState("ZA")
    }


    return (
        <div>

            <select onClick = {(event) => handleOrderAlphabetical(event)} className = "alphabeticalSelector">
                <option value = "AZ" > Order A-Z </option>
                <option value = "ZA" > Order Z-A </option>
            </select>
            
        </div>
    )
};