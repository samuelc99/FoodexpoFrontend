
import { Container, Form } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Logo } from "../../components/Logo"
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";


export function SignIn() {

    const data = useAuth()
    console.log("myyyyyy", data)
    return (
            <Container>
                <div className="logo">
                <Logo/>
                </div>

                <Form>
                    <h2>Faça login</h2>

                    <div className="inputEmail">
                    <span>Email</span>
                    <Input 
                    placeholder="Exemplo: exemplo@exemplo.com.br" 
                    type="text" 
                    />
                    </div>
                    
                    <div className="inputPassword">
                    <span>Senha</span>
                    <Input 
                    placeholder="No mínimo 6 caracteres" 
                    type="password" 
                    />
                    </div>
            
                    <Button title="Entrar"  />
                    <div className="buttonText">
                    <Link className="link"
                    to="/signup">Criar uma conta</Link>
                    </div>
                </Form>
        
            </Container>
          )
        }  
    