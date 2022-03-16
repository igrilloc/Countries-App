import React from "react";

// Styles:
import './pagination.css';


export default function Pagination({ countriesCard, countriesPerPage, pagination}) {
    
    // pageNumbers es un array en el que se van agregando los números que va a tener el páginado
    const pageNumbers = [];
    
    // Número de paginas segun la cantidad de countries por pagina
    let paged = Math.ceil(countriesCard / countriesPerPage) 
    
    // Este for crear los números de la página, hasta cubrir todos los countries.
    for (let i = 1; i <= paged; i++) {
        pageNumbers.push(i);
    };


    return (
        <nav >
            <ul className = "pagination"> { /* acá se crea los anchors de los números de las páginas */ }
                { pageNumbers?.map((number) => (
                    <li key = {number}>
                        <button className = "btnPagination"
                            onClick = { () => pagination(number) }> {number}
                        </button>  
                    </li>
                ))}
            </ul>
        </nav>
    )
};



// 9 en la primera y 10 en el resto
/*
let currentCountries = currentPage === 1 
? countriesCard.slice(firstCountry, lastCountry - 1) 
: countriesCard.slice(firstCountry, lastCountry);
*/