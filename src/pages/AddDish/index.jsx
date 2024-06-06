import { MdOutlineFileUpload } from "react-icons/md";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { Footer } from "../../components/Footer"

import { Container, Form, ImageNameCategory, IngredientsPrice } from "./styles";

export function AddDish() {
    return(
        <Container>
            <Header/>
                    <ButtonText to="/"
                    className="buttonText"
                    title="voltar"/>
                    <h1>Adicionar prato</h1>
                <Form>

                    <ImageNameCategory>

                        <div className="imageDish">
                            <span>Imagem do prato</span>   
                            <Input 
                            id="addImagem"
                            type="file" 
                            accept="image/*"
                            />
                            
                            <label htmlFor="addImagem">
                            <MdOutlineFileUpload />Selecione imagem
                            </label>
                        </div>
                        
                        <div className="nameInput" >
                            <span>Nome</span>
                            <Input
                            placeholder="Ex.: Salada Ceasar" 
                            type="text" 
                            />
                        </div>
                    
                        <div className="categoryInput">
                            <span>Categoria</span>
                            <Input  
                            placeholder="Refeição" 
                            type="text" 
                            />  
                        </div>    

                    </ImageNameCategory>
                    
                    <IngredientsPrice>
                        <div className="ingredients">
                            <span>Ingredientes</span>
                            <div className="tagsIngredientes">
                                <Tag placeholder="Adicionar +"/>
                                <Tag/>
                            </div>
                        </div>

                        <div className="priceInput">
                            <span>Preço</span>
                            <Input  
                            placeholder="R$ 00,00" 
                            type="number" 
                            />  
                        </div>    
                    </IngredientsPrice>
                    
                    <Textarea 
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    />
                    <Button className="saveButton"
                     title="Salvar alterações"/>
                    
                </Form>

                <Footer/>
        </Container>
    )
}