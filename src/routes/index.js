import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Cadastro from '../views/Cadastro';
import Calculadora from '../views/Calculadora';
import Login from '../views/Login';
import Proposta from '../views/Proposta';
import PropostasContratadas from '../views/PropostasContratadas';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/home" exact component={Home} />
      <Route path="proposta" component={Proposta} />
      <Route path="propostascontradadas" component={PropostasContratadas} />
      <Route path="/calculadora" component={Calculadora} />
    </Switch>
  );
}
