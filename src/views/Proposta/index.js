import React from 'react';
import './style.css';
import Header from '../../components/header';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { getOptions } from '../../services/api';
import { Link } from 'react-router-dom';

function Proposta(props) {
  const [proposta, setProposta] = useState([]);
  const url = 'https://omega-tech.herokuapp.com/propostas';

  useEffect(() => {
    api.get(url, getOptions()).then((r) => {
      console.log(r.data);
      setProposta(r.data);
    });
  }, []);

  function back() {
    console.log('voltou');
  }

  function next(cliente) {
    const contratado = { contratado: true };
    api.patch(`${url}/${cliente.idPublico}`, contratado, {
      headers: {
        authorization: proposta,
      },
    });
  }

  return (
    <>
      <div className="box1">
        <div className="card1">
          <Header />
          <main className="main">
            {proposta?.map((cliente) => {
              return (
                <article key={cliente.idPublico} className="clienteProposta">
                  <p>
                    Cargas/consumo: --------------------{' '}
                    {cliente.cargas.consumo}
                  </p>
                  <p>
                    Período: --------------------------- {cliente.dataInicio} -{' '}
                    {cliente.dataFim}
                  </p>
                  <p>
                    Submercado: ------------------------ {cliente.submercado}
                  </p>
                  <p>
                    Fonte: -----------------------------{' '}
                    {cliente.fonteDeEnergia}
                  </p>
                  <p>Preço kwh: ------------------------- 10</p>
                  <p>PreçoKhw * Submercado * Fonte * Período * Cargas </p>
                  <span className="total">total: </span>
                  <span className="calculo">R$ {cliente.valorDaProposta}</span>
                  <div className="botoes">
                    <Link to="/Calculadora">
                      <button onClick={back} className="voltar" type="button">
                        Voltar
                      </button>
                    </Link>
                    <Link to="/PropostasContratadas">
                      <button
                        onClick={() => next(cliente)}
                        className="contratar"
                        type="button"
                      >
                        Contratar
                      </button>
                    </Link>
                  </div>
                </article>
              );
            })}
          </main>
        </div>
      </div>
    </>
  );
}

export default Proposta;
