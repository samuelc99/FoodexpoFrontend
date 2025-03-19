import { useState } from "react"; 
import { api}  from "../../services/api"

import { useNavigate } from "react-router-dom";

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
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewDish() {

        // if (!image) {
        //     return alert("Selecione a imagem do prato.");
        //   }
      
          if (!title) {
            return alert("Digite o nome do prato.");
          }
      
          if (!category) {
            return alert("Selecione a categoria do prato.");
          }
      
          if (tags.length === 0) {
            return alert("Informe pelo menos um ingrediente do prato.");
          }
      
          if (newTag) {
            return alert(
              "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
            );
          }
      
          if (!price) {
            return alert("Digite o preço do prato.");
          }
      
          if (!description) {
            return alert("Digite a descrição do prato.");
          }
      

        const formData = new FormData();
        // formData.append("image", image);
        formData.append("title", title);
        formData.append("tags", tags.join(","));
        formData.append("category", category);
        formData.append("price", price);
        formData.append("description", description);

        try {
            await api.post("/notes", formData);
            alert("Prato cadastrado com sucesso!");
            navigate("/");
          } catch (error) {
            if (error.response) {
              alert(error.response.data.message);
            } else {
              alert("Não foi possível cadastrar o prato.");
            }
          } 
          }
      


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
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                    
                        <div className="categoryInput">
                            <span>Categoria</span>
                            <Input  
                            placeholder="Refeição" 
                            type="text"
                            value={category}
                            onChange={e => setCategory(e.target.value)} 
                            />  
                        </div>    

                    </ImageNameCategory>
                    
                    <IngredientsPrice>
                        <div className="ingredients">
                            <span>Ingredientes</span>
                            <div className="tagsIngredientes">
                            {/* <p>{data.description}</p> */}

                            <Tag placeholder="Adicionar"
                                isNew
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />

                            {  
                                tags.map((tag, index) => (                                           
                                    <Tag 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}/>
                                  ))
                                }

                                   


                            </div>
                        </div>

                        <div className="priceInput">
                            <span>Preço</span>
                            <Input  
                            placeholder="R$ 00,00" 
                            type="number" 
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            />  
                        </div>    
                    </IngredientsPrice>
                    
                    <Textarea 
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    onChange={e => setDescription(e.target.value)}
                    />
                    
                    <Button className="saveButton"
                     title="Salvar alterações"
                     onClick={handleNewDish}
                     />
                    
                </Form>

                <Footer/>
        </Container>
    )
}