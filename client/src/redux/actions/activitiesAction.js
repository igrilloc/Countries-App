import axios from 'axios';
import { TYPES } from './types.js';


export function getActivities() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/activity') 
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
            const json = await axios.post('http://localhost:3001/activity', payload);
            
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


