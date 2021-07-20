import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../views/Login';
import Inicio from '../views/Inicio'
import FormularioUsuarios from '../components/FormularioUsuarios';

function Routes() {
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Inicio" component={Inicio} />
        <Route exact path="/Register" component={FormularioUsuarios} />
      </Switch>
      </BrowserRouter>
    );
}

export default Routes;