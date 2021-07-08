import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../views/Login';
import Inicio from '../views/Inicio'

function Routes() {
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Inicio" component={Inicio} />
      </Switch>
      </BrowserRouter>
    );
}

export default Routes;