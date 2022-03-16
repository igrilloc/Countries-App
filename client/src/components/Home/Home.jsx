import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Components:
import FilterActivities from '../Filtered/FilterActivities.jsx';
import FilterContinents from '../Filtered/FilterContinents.jsx';
import FilterPopulation from '../Filtered/FilterPopulation.jsx';
import OrderAlphabetical from '../Orders/OrderAlphabetical.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import NavBar from '../NavBar/NavBar.jsx'
import Card from '../Card/Card.jsx'

// Style:
import './home.css';


export default function Home () {
    
    const countriesCard = useSelector((store) => store.countriesReducer.filteredCountries);

    // PAGED:
    const [currentPage, setCurrentPage] = useState(1); // Página que se muestra en el momento
    const [countriesPerPage, setCountriesPerPage] = useState(10); // Cantidad de países por página
    
    const lastCountry = currentPage * countriesPerPage; // 10
    const firstCountry = lastCountry - countriesPerPage;

    const currentCountries = countriesCard.slice(firstCountry, lastCountry) // 10 en todas.


    /* (Me ayuda en el renderizado).
    Esta función se la pasamos por props al componente Pagination. Se ejecute con el valor de ese botón,
    y setea la página al valor del mismo. Cuando modificamos el valor del estado de la página actual, obtenemos 
    el índice del último país de la página; consecuentemente el del primero; y mostramos la porción del array del estado global
    que se encuentra entre esos dos índices. 
    */
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // RE-RENDERIZADO DE LA PAG SEGUN setState:
    const [state, setState] = useState("");


    return (
        <div>
            <React.Fragment> 

            <div className = "containerBodyHome">

                <div className = "containerHome">

                    <h1 className = "titleHome">App to <br /> Search countries </h1>

                    <NavBar />

                    <div className = "selectors">
                        { 
                            /* Le paso la función setState para que puedan efectuar un cambio 
                            en un estado local y así poder volver a renderizar la página */
                        }
                        <FilterPopulation setState = {setState} />
                        <OrderAlphabetical setState = {setState} />
                        <FilterContinents />
                        <FilterActivities />
                    </div>

                    <div className = "renderCard"> 
                        
                        { // acá se renderiza sólo la porción correspondiente del estado global filteredCountries 
                            currentCountries === "No country" 
                            ? <h3 className = "error404"> Error 404 Not Found </h3>
                            : currentCountries.map((country) => {
                                return (
                                    <div key = {country.id}>
                                        <Card
                                            flags = {country.flags}
                                            name = {country.name}                                    
                                            continents = {country.continents}
                                            id = {country.id}
                                        />   
                                    </div>                        
                                );
                            })
                        } 
                    </div>


                    <div> 
                        {/* acá se renderiza los números del paginado y le pasamos las props que necesita */}
                        <Pagination 
                            countriesPerPage = {countriesPerPage} // 10
                            countriesCard = {countriesCard.length} // 250
                            pagination = {pagination} // Número de pág seleccionada
                        />
                    </div>


                </div>

            </div>
                
            </React.Fragment>
        </div>
    )
};

