import { api } from "../../services/api";
import { useState } from "react";

import { Container, Form } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Logo } from "../../components/Logo"

import { Link, useNavigate } from "react-router-dom";


export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.response){
            alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        })
    }

    return (
            <Container>
                <div className="logo">
                <Logo/>
                </div>

                <Form>
                    <h2>Crie sua conta</h2>

                    <div className="inputName">
                    <span>Seu nome</span>
                    <Input 
                    placeholder="Exemplo: Maria da Silva" 
                    type="text"
                    onChange={e => setName(e.target.value)} 
                    />
                    </div>

                    <div className="inputEmail">
                    <span>Email</span>
                    <Input 
                    placeholder="Exemplo: exemplo@exemplo.com.br" 
                    type="text"
                    onChange={e => setEmail(e.target.value)} 
                    />
                    </div>
                    
                    <div className="inputPassword">
                    <span>Senha</span>
                    <Input 
                    placeholder="No mínimo 6 caracteres" 
                    type="password" 
                    onChange={e => setPassword(e.target.value)}
                    />
                    </div>
            
                    <Button title="Entrar"  onClick={handleSignUp}/>
                    <div className="buttonText">
                    <Link className="link"
                    to="/">Já  tenho uma conta</Link>
                    
                    </div>
                </Form>
        
            </Container>
          )
        }  
    