import React, { useState } from 'react'
import axios from 'axios';
import img_esq from '../../assets/cadastro.jpg'
import omega from '../../assets/logo-omega-energia.png'
import './style.css'
import { useHistory } from 'react-router';


const Cadastro = () => {

  const url = "http://localhost:3000";
  let history = useHistory();

  const [data, setData] = useState({
    nome: "",
    email: "",
    senha: ""
  })

  function submit(e){
    e.preventDefault();
    axios.post(url, {
      nome: data.nome,
      email: data.email,
      senha: data.senha
    })
    .then(res =>{
      console.log(res.data);
      history.push("/login");
    })
    .catch(err =>{console.log(err)})
  }

  function handle(e){
    const cadastrar={...data}
    cadastrar[e.target.id] = e.target.value;
    setData(cadastrar);
    console.log(cadastrar);
  }

  return (
    <div className="cadastro">
      <div className="cadastro-img-left" >
        <img src={img_esq} alt="imagem de página de cadastro" />
      </div>

      <div className="cadastro-direita">
        <img src={omega} alt="logo-omega-energia" />

        <form onSubmit={(e) => submit(e)}>
          <div className="CadastroNome">
            <label>Nome</label>
           <input type="text" id="nome" placeholder="Digite seu nome" value={data.nome} onChange={e => handle(e)}/>
          </div>

          <div className="CadastroEmail">
            <label>Email</label>
            <input type="email" id="email" placeholder="Digite seu email" value={data.email} onChange={e => handle(e)}/>
          </div>

          <div className="CadastroSenha">
            <label>Senha</label>
            <input type="password" id="senha" placeholder="Digite sua senha" value={data.senha} onChange={e => handle(e)}/>
          </div>

          <button className="btn-cadastrar">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
export default Cadastro;