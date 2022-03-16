import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

// Actions:
import { getDetails } from '../../redux/actions/countryAction.js';

// Styles:
import './details.css';


export default function CountryDetail () {
    
    const country = useSelector((state) => state.countriesReducer.countryDetail);
    
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetails(id))
    }, [dispatch, id]);
    

    return (
        <div className = "conteinerDetails">
     
            <Link to = "/home">
                <button className = "btnBackDetails" > Back </button>
            </Link>
            

            <div className = "detailsProps">
                { 
                    typeof country === 'object' ?
                        <div key = {country.id}>

                            <div >                               
                                <img
                                    className = "imgDetails" 
                                    src = {country.flags}
                                    alt = "Not found"   
                                />
                            </div>

                            <div className = "propsDetails">
                                <h2> {country.name} </h2>
                                <p>Population: {country.population}</p>
                                <p>Capital: {country.capital}</p>
                                <p>Subregion: {country.subregion}</p>
                                <p>Area: {country.area} kms2</p>                                
                                
                                <p>Activities: </p>
                                {
                                    country.activities?.map((element) => (
                                        <div key = {element.id}>
                                            <p>- {element.name} in {element.season}</p>
                                            <p> Duration: {element.duration}</p>
                                            <p> Difficulty: {element.difficulty}</p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div> 

                    : <h3>Error 404 Not Found</h3>
                }

            </div>
            
        </div>
    )
};
