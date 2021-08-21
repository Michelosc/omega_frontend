import React from 'react';
import { useState } from 'react';
import logo from '../../assets/omega-logo.png';
import './style.css';

export default function Calculadora() {
  const [periodo, setPeriodo] = useState('');

  const object = {
    ...periodo,
  };

  function submit(e) {
    console.log(e);
  }

  function handleSubmit() {}

  return (
    <div className="box">
      <div className="card">
        <div className="container-header">
          <img className="imagem-header" src={logo} alt="Logo Uol" />
          <h6>Olá cliente</h6>
        </div>
        <div className="container-body">
          <div className="colOne">
            <h6 className="titleColOne">Vamos fazer uma cotação?</h6>
            <form onSubmit={handleSubmit} className="containerInput">
              <label className="legendOfData" htmlFor="data">
                Escolha um período
              </label>
              <input
                className="input-data"
                type="text"
                name="data"
                required
                value={periodo}
                onChange={({ target }) => setPeriodo(target.value)}
                type="text"
              />
              <label className="legendOfData" htmlFor="data">
                Escolha o submercado
              </label>
              <div className="container-buttons">
                <button
                  onClick={({ target }) => submit(target.value)}
                  className="style-button"
                >
                  N
                </button>
                <button
                  onClick={({ target }) => submit(target.value)}
                  className="style-button"
                >
                  NE
                </button>
                <button
                  onClick={({ target }) => submit(target.value)}
                  className="style-button"
                >
                  S
                </button>
                <button
                  onClick={({ target }) => submit(target.value)}
                  className="style-button"
                >
                  SE
                </button>
              </div>
              <label className="type-energy" htmlFor="type-energy">
                Qual o tipo de energia deseja contratar ?
              </label>
              <div className="container-buttons-energy">
                <button
                  onClick={({ target }) => submit(target.value)}
                  className="button-type-energy"
                >
                  CONV
                </button>
                <button
                  onClick={({ target }) => submit(target.value)}
                  className="button-type-energy"
                >
                  RENOV
                </button>
              </div>
              <label className="type-energy" htmlFor="">
                Adicionar Carga
              </label>
              <input className="input-data" type="text" />
            </form>
          </div>
          <div className="colTwo">
            <h1 className="title-colTwo">Inicie sua proposta</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
