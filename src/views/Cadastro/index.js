import React, { useState } from "react";
import api from "../../services/api.js";
import img_esq from "../../assets/cadastro.jpg";
import omega from "../../assets/omega-logo.png";
import "./style.css";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const Cadastro = () => {
  const url = "https://omega-tech.herokuapp.com/users";
  let history = useHistory();
  let messageError = "";

  const [data, setData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  async function submit(e) {
    e.preventDefault();
    await api
      .post(url, {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
      })
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((err) => {
        messageError = err.response.data.message;
        console.log(messageError);
      });
    toast.error("Seu cadastro contém campos inválidos. Confira.");
  }

  function handle(e) {
    const cadastrar = { ...data };
    cadastrar[e.target.id] = e.target.value;
    setData(cadastrar);
    console.log(cadastrar);
  }

  return (
    <div className="cadastro">
      <div className="cadastro-img-left">
        <img src={img_esq} alt="imagem de página de cadastro" />
      </div>

      <div className="cadastro-direita">
        <img src={omega} alt="logo-omega-energia" />

        <form onSubmit={(e) => submit(e)}>
          <div className="CadastroNome">
            <label>Nome</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              value={data.nome}
              onChange={(e) => handle(e)}
            />
          </div>

          <div className="CadastroEmail">
            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={data.email}
              onChange={(e) => handle(e)}
            />
          </div>

          <div className="CadastroSenha">
            <label>Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              value={data.senha}
              onChange={(e) => handle(e)}
            />
          </div>

          <button className="btn-cadastrar">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};
export default Cadastro;
