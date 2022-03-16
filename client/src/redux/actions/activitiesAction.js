import axios from 'axios';
import { TYPES } from './types.js';

const { REACT_APP_URL } = process.env


export function getActivities() {
    return function (dispatch) {
        return axios.get(`${REACT_APP_URL}/activity`) 
        .then ((response) =>
            dispatch (
                { 
                    type: TYPES.GET_ACTIVITIES,
                    payload: response.data
                }
            ))
        .catch ((error) => console.log (error));
    };
};


export function postActivity(payload) {
    
    // console.log("Actividad creadada a países:", payload);
    
    return async function(dispatch) {
        try {
            const json = await axios.post(`${REACT_APP_URL}/activity`, payload);
            
            return dispatch(
                {
                    type: TYPES.ADD_ACTIVITIES,
                    payload: json.data
                }
            );
                     
        } catch(error) {
           console.log(error);
        }
    }
};


