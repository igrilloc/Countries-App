import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions:
import { getActivities } from '../../redux/actions/activitiesAction';
import { getCountries } from '../../redux/actions/countryAction';

// Components:
import SearchBar from '../SearchBar/SearchBar.jsx';

// Styles:
import './navBar.css';



export default function NavBar() {
    
    const dispatch = useDispatch();

    // CARGO PAISES Y ACTIVIDADAES:
    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivities());
    },[dispatch]);
    
    // RECARGO PAISES:
    function handleReloadCities(event) {
        event.preventDefault();
        dispatch(getCountries());
    };


    return (
        <nav>
            
            <div className = "btnConteiner">

                <div>
                    <Link to = "/activity"> 
                        <button className = "btnNewActivity">
                            Create Activity
                        </button>
                    </Link>
                </div>
            
                <div>
                    <button onClick = {(event) => handleReloadCities(event)} className = "btnReload">
                        Reload Cities
                    </button>
                </div>

            </div>
            
            <SearchBar />

        </nav>
    )
};






