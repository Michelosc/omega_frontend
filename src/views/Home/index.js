import React from 'react';
import Header from '../../components/header';
import Logout from '../../components/logout';
import './style.css';
import { Link } from 'react-router-dom';

export default function Home() {
  function iniciar() {
    console.log('iniciando');
  }
  function verPropostas() {
    console.log('iniciando');
  }
  return (
    <>
      <div className="box3">
        <div className="card3">
          <Header />
          <h1 className="Bv">Bem-vindo à Omega !</h1>
          <main className="iniciarProposta">
            <div className="proposta">
              <p className="textoProposta"> Vamos fazer uma proposta ?</p>
              <div className="btnHome">
                <Link to="/PropostasContratadas">
                  <button
                    onClick={verPropostas}
                    className="verPropostas"
                    type="button"
                  >
                    Propostas
                  </button>
                </Link>
                <Link to="/Calculadora">
                  <button onClick={iniciar} className="iniciar" type="button">
                    iniciar
                  </button>
                </Link>
              </div>
            </div>
          </main>
          <Logout />
        </div>
      </div>
    </>
  );
}
