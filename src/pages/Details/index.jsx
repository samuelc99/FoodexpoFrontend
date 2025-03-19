import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import imageFood from "../../assets/Mask group.png"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag"

import { Container, Main } from "./styles";
import { api } from "../../services/api";

export function Details() {
    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(() => {
        const fetchNote = async () => {


            try {

                const response = await api.get(`/notes/${params.id}`)

                setData(response.data);
            } catch (error) {
                console.error("Error fetching the note:", error);

            }
        };

        fetchNote();
    }, [params.id]);

    return (
        <Container>
            <Header />
            <ButtonText to="/" title="VOLTAR" icon={IoIosArrowBack} />

            {
                data ? (
                    <Main>
                        <div className="img">
                            <img src={imageFood} alt="" />
                        </div>
                        <div className="details">
                            <h1>{data?.title}</h1>
                            <p>{data?.description}</p>

                            {/* {
                                data.tags && (
                                    <div className="tags"> 
                                        {data.tags.map((tag) => (
                                            <Tag 
                                                key={String(tag.id)}
                                                title={tag.name}
                                            />
                                        ))}
                                    </div>
                                )
                            } */}

                            <div className="moreLess">
                                <FiMinus />
                                01
                                <FiPlus />
                                <Button title="incluir ∙ R$ 25,00" />
                            </div>
                        </div>
                    </Main>
                ) : (
                    <p>Carregando...</p> //Ou qualquer outro componente de carregamento
                )
            }

            <Footer />
        </Container>
    );
}