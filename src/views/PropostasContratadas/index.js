import React from 'react';
import Header from '../../components/header';
import Logout from '../../components/logout';
import './style.css';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function PropostasContratadas() {
  const [contratos, setContratos] = useState([]);

  useEffect(() => {
    const url = 'https://omega-tech.herokuapp.com/propostas';

    api.get(url).then((r) => {
      console.log(r.data);
      setContratos(r.data);
    });
  }, []);

  function adicionar() {
    console.log('adicionar proposta');
  }
  return (
    <>
      <div className="box4">
        <div className="card4">
          <Header />
          <h1 className="listaProposta">Propostas disponíveis</h1>
          <main className="propostasListadas">
            {contratos?.map((contrato) => {
              return (
                <article key={contrato.idPublico} className="clienteProposta">
                  <div className="propostaCard">
                    <h1>Porposta </h1>
                  </div>
                  <div className="cargaCard">
                    <p>Carga: {contrato.cargas.consumoKwh} </p>
                  </div>
                  <div className="submercadoCard">
                    <p>Submercado: {contrato.submercado} </p>
                  </div>
                  <div className="fonteCard">
                    <p>Fonte: {contrato.fonteDeEnergia} </p>
                  </div>
                  <div className="periodoCard">
                    <p>
                      Período: {contrato.dataInicio} - {contrato.dataFim}{' '}
                    </p>
                  </div>
                  <div className="valorCard">
                    <p>Valor: {contrato.valorDaProposta} </p>
                  </div>
                </article>
              );
            })}

            <div className="btnAdicionar">
              <Link to="/Calduladora">
                <button onClick={adicionar} className="adicionar" type="button">
                  +
                </button>
              </Link>
            </div>
          </main>
          <Logout />
        </div>
      </div>
    </>
  );
}
