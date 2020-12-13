import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';


function App() {
  return ( // con swith usa solo el primer renglon de los routes. Y en este caso si no pongo el exact siempre entra al perimero, osea el /, y los otros ni los mira
    <div>  
      <Header />
      <Switch>  
        <Route exact path='/' component={ HomePage } />  
        <Route path='/shop' component={ ShopPage } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
