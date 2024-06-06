
import { IoIosSearch } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

import { Logo } from "../Logo";
import { Button } from "../Button";
import { Input } from "../Input";

import { Container } from "./styles";

export function Header() {
    return(
        <Container>
           <Logo/>
           <div className="input">
            <Input placeholder="Busque por pratos ou ingedientes" icon={IoIosSearch } />
           </div>
        
            <Button title="Pedidos (0)" />
            <FiLogOut className="out"/>
            
        </Container>
    )
}