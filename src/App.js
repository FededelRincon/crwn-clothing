import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
);

function App() {
  return ( // con swith usa solo el primer renglon de los routes. Y en este caso si no pongo el exact siempre entra al perimero, osea el /, y los otros ni los mira
    <div>  
      <Switch>  
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop/hats' component={ HatsPage } />
      </Switch>
    </div>
  );
}

export default App;
