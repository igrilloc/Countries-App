import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions:
import { filterByActivity } from '../../redux/actions/countryAction.js';

// Styles:
import './filterActivities.css';


export default function FilterActivities() {

    const activities = useSelector((state) => state.activitiesReducer.filteredActivities);

    const dispatch = useDispatch();
        
    // FILTER BY ACTIVITIES:
    function handleActivities(event) {
        dispatch(filterByActivity(event.target.value))
    };

 
    return (
        <div>
            <select onChange = {(event) => handleActivities(event)} className = "activitiesSelector">
                <option value = "All" > All activities </option>
                {  
                    activities?.map(activity => (<option key = {activity.id} > {activity.name} </option>))
                }
            </select>
        </div>
    )
}


 