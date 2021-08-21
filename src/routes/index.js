import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Cadastro from '../views/Cadastro';
import Calculadora from '../views/Calculadora';
import Login from '../views/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/editar/:id" component={Cadastro} />
      <Route path="/calculadora" component={Calculadora} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}
