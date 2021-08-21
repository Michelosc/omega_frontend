import React from 'react';
import Header from '../components/header'
import Logout from '../components/Logout';
import './style.css';


export default function Home() {

  function iniciar () {
    console.log('iniciando')
  }
  return (
    <>
      <div className='box3'>
        <div className="card3">
          <Header/>
          <h1 className='Bv'>Bem vindo á Omega !</h1>
          <main className='iniciarProposta'>
            
            <div className="proposta">
              <p className='textoProposta'> Vamos fazer uma proposta ?</p>
              <div className='btnIniciar'>
              <button onClick={iniciar} className='iniciar' type="button">iniciar</button>
              </div>
            </div> 
          </main>  
          <Logout/>
        </div>
      </div>
    </>
  );
}
