import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Actions:
import { postActivity } from '../../redux/actions/activitiesAction.js';
import { getCountries, orderAlphabeticalAZ } from '../../redux/actions/countryAction.js';

// Styles:
import './createActivity.css';


function validate(input) {
    
    let errors = {};
    
    if (!input.name)
        errors.name = "Your activity must have a name";

    if (!input.countries)
        errors.countries = "Your activity must have a country";

    if (!input.difficulty)
        errors.difficulty = "You must set a difficulty level for your activity";

    if (!input.duration)
        errors.duration = "Your activity must have a duration set in hours";

    if (!input.season)
        errors.season = "A season of the year is required";

    if (/^([0-9])*$/.test(input.name)) {
        errors.name = 'Numbers are not allowed'
    }


    return errors;
};


export default function ActivitiesCreated() {

    const countriesState = useSelector((state) => state.countriesReducer.allCountries);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);
    
    const [errors, setErrors] = useState({});
    const [order, setOrder] = useState('');

    // GUARDO EL FORMULARIO EN EL ESTADO:
    const [input, setInput] = useState(
        {
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: [],
        }
    );

    // GUARDO LO QUE EL USUARIO ESCRIBE EN INPUT:
    function handleChange(event) { 
        setInput ( /* CARGO TARGET.VALUE DE NOMBRE Y DURACION  */
            {
                // target.name = agarra el target name y lo completa con el valor del usuario 
                ...input,
                [event.target.name]: event.target.value
            }
        );

        setErrors(validate(
            { /* CONTROL DE ERROR EN TARGET.VALUE */
                ...input, 
                [event.target.name]: event.target.value 
            }
        ));
    };

    function handleDifficulty(event) {
        if (event.target.value) {
            setInput( /* CARGO TARGET.VALUE DE DIFICULTAD */
                {   
                    ...input,
                    difficulty: event.target.value
                }
            )
        }
    };

    function handleSeason(event) {
        setInput( /* CARGO TARGET.VALUE DE TEMPORADA */
            {
                ...input,
                season: event.target.value
            }
        )
    };

    function handleCountries(event) {
        setInput( /* CARGO TARGET.VALUE DE PAISES */
            {
                ...input,
                countries: [...input.countries, event.target.value]
            }
        )
    };

    function handleDeleteCountry(country) {
        setInput( /* ELIMINO DEL TARGET.VALUE EL PAIS SELECCIONADO */
            {
                ...input,
                countries: input.countries.filter((element) => element !== country),
            }
        )
    }

    // Esta función me ordena los países que están en el select, una vez que le hago click.
    function handleClick(){
        dispatch(orderAlphabeticalAZ());
        setOrder('ordenado');
    }


    function handleSubmitForm(event) {
        event.preventDefault();
        dispatch(postActivity(input))

        setInput(
            {
                name: "",
                difficulty: "",
                duration: "",
                season: "",
                countries: []
            }
        );
        
        history.push("./home");
    };


    return (

        <div className = "container-div">
               
            <Link to = "/home">
                <button className="btnBackForm" > Back </button>
            </Link>
     
            <form className = "formulario">

                <h1 > Create Activities </h1>

                <label> Name of the activity? </label>
                <div>
                    <input /* NOMBRE DE LA ACTIVIDAD */
                        type = "text" 
                        name = "name"
                        placeholder = "Numbers are not allowed"
                        value = {input.name} 
                        onChange = {(event) => handleChange(event)}
                    />
                    {
                        errors.name && (<p className = "errorForm"> {errors.name} </p>)
                    }
                </div>


                <label> How much time does it take? </label>
                <div>
                    <input 
                        type = "text" 
                        name = "duration"
                        placeholder = "Set time in hours" 
                        value = {input.duration}
                        onChange = {(event) => handleChange(event)}
                    />
                    {
                        errors.duration && (<p className = "errorForm"> {errors.duration} </p>)
                    }
                </div>


                <div className = "containerMargin">

                    <label> Difficulty? </label>
                    <div className = "containerInputs" onChange = {(event) => handleDifficulty(event)}>
                        <label> 1 </label><input className = "inputsDificultad" type = "radio" value = "1" name = "One" /> 
                        <label> 2 </label><input className = "inputsDificultad" type = "radio" value = "2" name = "Two" /> 
                        <label> 3 </label><input className = "inputsDificultad" type = "radio" value = "3" name = "Three" /> 
                        <label> 4 </label><input className = "inputsDificultad" type = "radio" value = "4" name = "Four" /> 
                        <label> 5 </label><input className = "inputsDificultad" type = "radio" value = "5" name = "Five" /> 
                    </div>
                    
                    {
                        errors.difficulty && (<p className = "errorForm"> {errors.difficulty} </p>)
                    }

                </div>


                <div className = "containerMargin">
                    
                    <label> What season is it done? </label>
                    <div className = "containerInputs">
                        <label> Summer </label><input className = "inputsDificultad" type = "checkbox" value = "Summer" name = "Summer" onChange = {(event) => handleSeason(event)} /> 
                        <label> Autumn </label><input className = "inputsDificultad" type = "checkbox" value = "Autumn" name = "Autumn" onChange = {(event) => handleSeason(event)} /> 
                        <label> Winter </label><input className = "inputsDificultad" type = "checkbox" value = "Winter" name = "Winter" onChange = {(event) => handleSeason(event)} /> 
                        <label> Spring </label><input className = "inputsDificultad" type = "checkbox" value = "Spring" name = "Spring" onChange = {(event) => handleSeason(event)} /> 
                    </div>

                    {   
                        errors.season && (<p className = "errorForm"> {errors.season} </p>)
                    }
                    
                </div>


                <div className = "containerMargin">

                    <label> What city is the activity in? </label>
                    <div>
                        <select onClick = {handleClick} onChange = {(event) => handleCountries(event)}>
                            { /* SELECCION DE PAISES QUE VAN A TENER ESA ACTIVIDAD */
                                countriesState.map((country) => ( <option key = {country.id} value = {country.name}> {country.name} </option> ))
                            }
                        </select >
                    </div>

                    {
                        errors.countries && (<p className = "errorForm"> {errors.countries} </p>)
                    }   

                </div>

            </form>

            <div className = "containerCountries">
                { /* ACÁ MUESTRO LOS PAÍSES QUE SE VAN SELECCIONANDO */
                    input.countries.map((country) => {
                        return (
                            <div className = "div-activity" key = {country.id}>
                                <button onClick={() => handleDeleteCountry(country)} className = "btnX"> x </button>
                            <p key = {country.id} >{country}</p>
                        </div>
                        );
                    })
                }
            </div>
            
           
            <button onClick = {handleSubmitForm} className = "crear"> ¡Create! </button>
       
        </div>
    )
};

