import { TYPES } from '../actions/types.js';


const initialState = {
    allCountries: [],
    filteredCountries: [],
    orderCountriesAlf: [],
    countryDetail: {},
};


function countriesReducer(state = initialState, action) {

    switch(action.type) {
        
        case TYPES.GET_COUNTRIES:
            
            // console.log("Cargo paises al estado:", action.payload)            
            return {
                ...state,
                allCountries: action.payload,
                filteredCountries: action.payload,
            };
        

        case TYPES.GET_COUNTRIES_NAME:

            // console.log("Paises por nombre:", action.payload);
            return {
                ...state,
                filteredCountries: action.payload
            };

    
        case TYPES.GET_DETAILS:
            
            console.log("Pais detallado:", action.payload);
            return {
                ...state,
                countryDetail: action.payload
            };


        case TYPES.FILTER_BY_CONTINENT:
            const countries = state.allCountries;
            
            let filterByContinent = [];

            console.log("FILTER_BY_CONTINENT REDUCER:", action.payload);
            
            action.payload === "All" 
            ? filterByContinent = countries
            : filterByContinent = countries.filter((country) => country.continents[0] === action.payload);
            
            console.log("Paises filtrados continente:", filterByContinent)
            return {
                ...state,
                filteredCountries: filterByContinent,
            };    
            

        case TYPES.FILTER_BY_ACTIVITIES:
            const activitiesCountry = state.allCountries;

            let filterByActivities = [];

            console.log("FILTER_BY_ACTIVITIES REDUCER:" , action.payload);
            action.payload === "All"
            ? filterByActivities = activitiesCountry
            : filterByActivities = activitiesCountry.filter((country) => {
                // Reviso si el país tiene la actividad, si la tiene, lo filtro.
                let activity = country.activities.find((act) => act.name === action.payload);
                
                if(activity) {
                    return country
                }
            });

            console.log("Paises filtrados por actividad:", filterByActivities )
            return {
                ...state,
                filteredCountries: filterByActivities
            };
            

        case TYPES.FILTER_POPULATION_HIGHER:          
            const countriesHigher = state.allCountries;
            
            let filterHigher = countriesHigher.sort((x, y) => y.population - x.population);

            console.log("FILTER_POPULATION_HIGHER REDUCER:", filterHigher)
            return {
                ...state,
                filteredCountries: filterHigher
            };


        case TYPES.FILTER_POPULATION_SMALLER:           
            const countriesSmaller = state.allCountries;
            
            let orderSmaller = countriesSmaller.sort((x, y) => x.population - y.population);

            console.log("FILTER_POPULATION_SMALLER:", countriesSmaller)
            return {
                ...state,
                filteredCountries: orderSmaller
            };


        case TYPES.ORDER_ALPHABETICAL_AZ:
            let countriesAZ = state.filteredCountries;
            
            countriesAZ.sort(function(a, b) {
                if (a.name > b.name) {
                    return 1;

                } else if (a.name < b.name) {
                    return -1;
                }
                
                return 0;
            });

            // console.log("Orden AZ:", countriesAZ);
            return {
                ...state,
                orderCountriesAlf: countriesAZ
            };


        case TYPES.ORDER_ALPHABETICAL_ZA:
            let countriesZA = state.filteredCountries;

            countriesZA.sort(function(a, b) {
                if (a.name > b.name) {
                    return -1;

                } else if (a.name < b.name) {
                    return 1;
                }

                return 0;
            });

            // console.log("Orden ZA:", countriesZA);
            return {
                ...state,
                orderCountriesAlf: countriesZA
            };
    

        default: 
            return state;

    }
};



export default countriesReducer;