import axios from 'axios';
import { TYPES } from './types.js'

const { REACT_APP_URL } = process.env


export function getCountries() {
    return async function(dispatch) {
        try {
            const json = await axios.get(`${REACT_APP_URL}/countries`);
            
            // console.log("getCountries():", json.data)
            return dispatch(
                {
                    type: TYPES.GET_COUNTRIES,
                    payload: json.data
                }
            );

        } catch(error) {
            console.error(error);
        }
    }
};


export function getCountryName(name) {
    return async function(dispatch) {
        try {
            const json = await axios.get(`${REACT_APP_URL}/countries?name=${name}`);

            console.log("getCountriesName(name):", json.data)
            return dispatch (
                {
                    type: TYPES.GET_COUNTRIES_NAME,
                    payload: json.data
                }
            );
            
        } catch (error) {
            console.log(error);
            
            return dispatch(
                {
                    type:TYPES.GET_COUNTRIES_NAME,
                    payload:"No country"
                }
            )
        }
    }
};


export function getDetails(id) {
    return async function(dispatch) {
        try {
            const json = await axios.get(`${REACT_APP_URL}/countries/${id}`);
            
            console.log("getDetails(id):", json.data)
            return dispatch(
                {
                    type: TYPES.GET_DETAILS,
                    payload: json.data
                }
            );

        } catch(error) {
            console.log(error);
        }
    }
};


export function filterCountryByContinent(payload) {

    console.log("filterCountryByContinent():", payload)
    return {
        type: TYPES.FILTER_BY_CONTINENT,
        payload
    }
};


export function filterByActivity(payload) {

    console.log("filterByActivity():", payload)
    return {
        type: TYPES.FILTER_BY_ACTIVITIES,
        payload
    }
};


export function filterPopulationHigher() {
    return {
        type: TYPES.FILTER_POPULATION_HIGHER,
    }
};


export function filterPopulationSmaller() {
    return {
        type: TYPES.FILTER_POPULATION_SMALLER,    
    }
};


export function orderAlphabeticalAZ() {
    return {
        type: TYPES.ORDER_ALPHABETICAL_AZ
    }
};


export function orderAlphabeticalZA() {
    return {
        type: TYPES.ORDER_ALPHABETICAL_ZA
    }
};
