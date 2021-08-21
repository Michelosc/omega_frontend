import React, { useState } from 'react';
import api from '../../services/api';

import logo from '../../assets/folder_home2.jpg';
import omega from '../../assets/omega-logo.png';
import { useHistory } from 'react-router';
import './style.css';

const Login = () => {
  const [dadosLogin, setDadosLogin] = useState({
    email: '',
    senha: '',
  });

  const url = 'https://omega-tech.herokuapp.com/users/login';
  let history = useHistory();

  function submit(e) {
    e.preventDefault();
    api
      .post(url, {
        email: dadosLogin.email,
        senha: dadosLogin.senha,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.accessToken);
        console.log(localStorage.getItem('token'));
        history.push('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handle(e) {
    const dados = { ...dadosLogin };
    dados[e.target.id] = e.target.value;
    setDadosLogin(dados);
    console.log(dados);
  }

  function redirecionar(e) {
    e.preventDefault();
    history.push('/cadastro');
  }

  return (
    <div className="login">
      <div className="login-img-left">
        <img src={logo} alt="imagem de página login" />
      </div>

      <div className="login-right">
        <img src={omega} alt="logo-omega-energia" />

        <form onSubmit={(e) => submit(e)}>
          <div className="loginInputEmail">
            <label>Usuário</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={dadosLogin.email}
              id="email"
              onChange={(e) => handle(e)}
            />
          </div>

          <div className="loginInputPassword">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={dadosLogin.senha}
              id="senha"
              onChange={(e) => handle(e)}
            />
          </div>

          <button className="btn-entrar" type="submit">
            Entrar
          </button>
          <button
            className="btn-cadastrar"
            type="submit"
            onClick={(e) => redirecionar(e)}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
