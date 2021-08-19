import React from 'react';
import './style.css';
import Header from '../components/header'
import Logout from '../components/Logout'
import { Fragment, useState, useEffect } from 'react';
import api from '../../services/api'

function Proposta(props) {
  const[proposta, setProposta] = useState([])

  // useEffect(() => {
  //   api.get('#')
  //   .then((r) => {setProposta(r)})
  //   console.log('#')
  // }, []);


  function back() {
    console.log('voltou')
  }

  function next() {
    console.log('Seguiu')
  }


 
  return (
        <>
          <div className='box1'>
            <div className="card1">
              <Header/>
              <main className='main'>
                
                {/* {proposta?.map((cliente) => {
                  return(
                    <article key={cliente.id} className="clienteProposta">
                      <p>Cargas/consumo: -------------------- {cliente.carga}</p>
                      <p>Período: --------------------------- {cliente.dataInicio} - {cliente.dataFim}</p>
                      <p>Submercado: ------------------------ {cliente.submercado}</p>
                      <p>Fonte: ----------------------------- {cliente.fonte}</p>
                      <p>Preço kwh: ------------------------- 10</p>
                      <p>PreçoKhw * Submercado * Fonte * Período * Cargas </p>
                      <span className='total'>total: </span>
                      <span className='calculo'>{cliente.calculo}</span>

                    </article>
                  );
                })} */}
                  <div className="testar">
                  <p>Cargas/consumo: --------------------------------- #</p>
                      <p>Período: -------------------------------------------- #</p>
                      <p>Submercado: -------------------------------------- #</p>
                      <p>Fonte: ---------------------------------------------- #</p>
                      <p>Preço kwh: ---------------------------------------- 10</p>
                      <p>PreçoKhw * Submercado * Fonte * Período * Cargas </p>
                      <span className='total'>total: </span>
                      <span className='calculo'>1.209.600,00</span>
                      </div> 
                  <div className='botoes'>
                    <button onClick={back} className='voltar' type="button">Voltar</button>
                    <button onClick={next} className='contratar' type="button">Contratar</button>
                  </div>
              </main>
              <Logout/>
            </div>
          </div> 
        </>
  );
}

export default Proposta;