import { TYPES } from '../actions/types.js';


const initialState = {
    activities: [],
    filteredActivities: []
};


function activitiesReducer(state = initialState, action) {
    
    switch(action.type) {
        case TYPES.GET_ACTIVITIES:           
            return {
                ...state,
                activities: action.payload,
                filteredActivities: action.payload
            }


        case TYPES.ADD_ACTIVITIES:
            return {
                ...state
            }

            
        default:
        return state
    }
};


export default activitiesReducer;