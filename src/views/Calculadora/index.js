import React from 'react';
import logo from '../../assets/omega-logo.png';
import './style.css';

export default function Calculadora() {
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
            <form className="containerInput">
              <label className="legendOfData" htmlFor="data">
                Escolha um período
              </label>
              <input className="input-data" type="text" name="data" />
              <label className="legendOfData" htmlFor="data">
                Escolha o submercado
              </label>
              <div className="container-buttons">
                <button className="style-button">N</button>
                <button className="style-button">NE</button>
                <button className="style-button">S</button>
                <button className="style-button">SE</button>
              </div>
              <label className="type-energy" htmlFor="type-energy">
                Qual o tipo de energia deseja contratar ?
              </label>
              <div className="container-buttons-energy">
                <button className="button-type-energy">CONV</button>
                <button className="button-type-energy">RENOV</button>
              </div>
              <label className="type-energy" htmlFor="">
                Adicionar Carga
              </label>
              <input type="text" />
            </form>
          </div>
          <div className="colTwo">ola teste dois</div>
        </div>
      </div>
    </div>
  );
}
