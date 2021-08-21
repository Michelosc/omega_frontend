import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Cadastro from '../views/Cadastro';
import Proposta from '../views/Proposta';
import PropostasContratadas from '../views/PropostasContratadas';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/editar/:id" component={Cadastro} />
      <Route path="/Proposta" component={Proposta} />
      <Route path="/PropostasContratadas" component={PropostasContratadas} />
    </Switch>
  );
}
