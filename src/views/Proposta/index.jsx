import React from 'react';
import './style.css';
import Header from '../components/header'
import { Fragment, useState, useEffect } from 'react';
import api from '../../services/api'

function Proposta(props) {
  const[proposta, setProposta] = useState([])

  useEffect(() => {
    api.get('#')
    .then((r) => {setProposta(r)})
    console.log('#')
  }, []);


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
                
                {proposta?.map((cliente) => {
                  return(
                    <article key={cliente} className="clienteProposta">
                      <p>Cargas/consumo: -------------------- {}</p>
                      <p>Período: --------------------------- {} - {}</p>
                      <p>Submercado: ------------------------ {}</p>
                      <p>Fonte: ----------------------------- {}</p>
                      <p>Preço kwh: ------------------------- 10</p>
                      <p>PreçoKhw * Submercado * Fonte * Período * Cargas </p>
                      <span className='total'>total: </span>
                      <span className='calculo'>{}</span>

                    </article>
                  );
                })}
           
                  <div className='botoes'>
                    <button onClick={back} className='voltar' type="button">Voltar</button>
                    <button onClick={next} className='contratar' type="button">Contratar</button>
                  </div>
              </main>
            </div>
          </div> 
        </>
  );
}

export default Proposta;