import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { Container } from "./styles";
import { Button } from "../Button"
import imageFood from "../../assets/Mask group-2.png"

export function Cards() {
 return (
    <Container>
            <FiHeart />
            <img src={imageFood} alt="" />
            
            <div className="dishName">
                <p>Spaguetti Gambe  </p>
            </div>
            <span>Massa fraca com camarões e pesto.</span>
            <h2>R$ 79,97</h2>

            <div className="moreLess"> 
            <FiMinus /> 01 <FiPlus /> <Button title="incluir"/> 
            </div>
        
    </Container>
 )
}