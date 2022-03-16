import { combineReducers } from 'redux';

// Reducers:
import countriesReducer from './countryReducer.js';
import activitiesReducer from './activitiesReducer.js';


const rootReducer = combineReducers({
    countriesReducer,
    activitiesReducer,
});


export default rootReducer;