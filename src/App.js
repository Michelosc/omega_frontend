import React from 'react';
import Proposta from './views/Proposta'
import Home from './views/Home'
import PropostasContratadas from './views/PropostasContratadas'


export default function App() {
  return (
    <>
      <PropostasContratadas/>
      <Home/>
      <Proposta/>
    </>
  )
}
