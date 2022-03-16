import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components:
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import CountryDetails from './components/Details/Details.jsx'
import ActivitiesCreated from './components/Activities/ActivitiesCreated';


function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path = "/" component = { LandingPage } />       
        <Route exact path = "/home" component = { Home } />
        <Route exact path = "/Activity" component = { ActivitiesCreated } />
        <Route path = "/countries/:id" component = { CountryDetails } /> 
        
        <Route path = "/">
          <h1>404 Not Found</h1>
        </Route>
      
      </Switch>
    </BrowserRouter>
  );
};   



export default App;