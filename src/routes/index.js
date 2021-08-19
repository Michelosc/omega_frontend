import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Login from '../views/Login';
import Cadastro from '../views/Cadastro';
import Calculadora from '../views/Calculadora';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/editar/:id" component={Cadastro} />
      <Route path="/calculadora" component={Calculadora} />
    </Switch>
  );
}
