import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

import { Logo } from "../Logo";
import { Button } from "../Button";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";

export function Header() {

    const navigate = useNavigate()

    function handleAddDish() {
        navigate("/addDish");
      }




    const { signOut } = useAuth()
    return(
        <Container>
           <Logo/>
           <div className="input">
            <Input placeholder="Busque por pratos ou ingedientes" icon={IoIosSearch } />
           </div>
        
            <Button title="Pedidos (0)"
             onClick={handleAddDish}
             />
            <FiLogOut className="out"
            onClick={signOut}/>
            
        </Container>
    )
}