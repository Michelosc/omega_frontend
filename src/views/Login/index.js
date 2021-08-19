import React,  {useState} from 'react'
import logo from './folder_home.jpg' 
import omega from './logo-omega-energia.png'
import './style.css'



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="login">
            <div className="login-img-left" >
                <img src={logo} alt="imagem de página login" />
            </div>

            <div className="login-right">
                <img src={omega} alt="logo-omega-energia" />
                
                <div className="loginInputEmail">
                    <h3>Usuário</h3>
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={e =>setEmail(e.target.value)}
                    />
                </div>

                <div className="loginInputPassword">
                    <h3>Senha</h3>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e =>setPassword(e.target.value)}
                    />
                </div>

                <button className="btn-entrar" type="submit">
                    Entrar
                </button>
                <button className="btn-cadastrar" type="submit">
                    Cadastrar
                </button>
            </div>


        </div>

    )
}
export default Login;