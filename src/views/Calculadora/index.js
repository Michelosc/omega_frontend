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
              <input className="teste" type="text" />
              <div className="teste2">ola</div>
            </form>
          </div>
          <div className="colTwo">ola teste dois</div>
        </div>
      </div>
    </div>
  );
}
