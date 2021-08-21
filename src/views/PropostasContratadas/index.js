import React from 'react';
import Header from '../components/header'
import Logout from '../components/Logout';
import './style.css';
import { Fragment, useState, useEffect } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';


export default function Home() {
    const[contratos, setContratos] = useState([])

  useEffect(() => {
    const url = "https://omega-tech.herokuapp.com/"


    api.get(url)
    .then((r) => {
      console.log(r)
      setContratos(r)})
  }, []);


  function adicionar () {
    console.log('adicionar proposta')
  }
  return (
    <>
      <div className='box4'>
        <div className="card4">
          <Header/>
          <h1 className='listaProposta'>Propostas disponíveis</h1>
          <main className='propostasListadas'>
           {contratos?.map((contrato) =>  {
                  return(
                    <article key={contrato.id} className="clienteProposta">
                      <div className='propostaCard'>
                        <h1>Porposta {contrato.id} </h1> 
                      </div>  
                      <div className='cargaCard'>
                        <p>Carga: {} </p> 
                      </div>  
                      <div className='submercadoCard'>
                        <p>Submercado: {} </p> 
                      </div>  
                      <div className='fonteCard'>
                        <p>Fonte: {} </p> 
                      </div>  
                      <div className='periodoCard'>
                        <p>Período: {} </p> 
                      </div>  
                      <div className='valorCard'>
                        <p>Valor: {} </p> 
                      </div>  
                      

                    </article>
                  );
                })} 
             
            <div className='btnAdicionar'>
              <Link to="/Calduladora"><button onClick={adicionar} className='adicionar' type="button">+</button></Link>
            </div>
          </main>  
          <Logout/>
        </div>
      </div>
    </>
  );
}