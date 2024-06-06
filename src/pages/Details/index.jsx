import { IoIosArrowBack } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import imageFood from "../../assets/Mask group.png"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./styles";

export function Details() {
    return(
        <Container>
            <Header/>
            <ButtonText to="/"
            title="VOLTAR" 
            icon={IoIosArrowBack}
            />
            <Main>
                <div className="img">
                    <img src={imageFood} alt=""/>
                </div>
                <div className="details">
                    <h1>Salada Ravanello</h1>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                    <div className="tags"> 
                    <span>alface</span>
                    <span>cebola</span>
                    <span>pão naan</span>
                    <span>pepino</span>
                    <span>rabanete</span>
                    <span>tomate</span>
                    </div>
                    <div className="moreLess"> 
                        <FiMinus /> 
                        01
                        <FiPlus /> 
                        <Button title="incluir ∙ R$ 25,00"/> 
                    </div>
                </div>
                
            </Main>
            <Footer/>
        </Container>
    )
}