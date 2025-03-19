import { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Container } from "./styles";
import { Cards } from "../Cards"
import { api } from '../../services/api';

export function Carousel() {
    const cards = useRef(null);

    const [data, setData] = useState([])

    useEffect(() => {
        async function buscar() {
            const response = await api.get("/notes")
            setData(response.data)
            console.log(response.data)
        }

        buscar()

    }, [])


    const handleSwiperPrev = (e) => {
        e.preventDefault()
        cards.current.scrollLeft -= cards.current.offsetWidth;
    }

    const handleSwiperNext = (e) => {
        e.preventDefault()
        cards.current.scrollLeft += cards.current.offsetWidth;
    }

    return (
        <Container>
            <div className="cards" ref={cards}>
            {data.map((card) => (
          <Cards data={card} key={String(card.id)} />
        ))}

            </div>

            <div className="swiper-button-prev">
                <button onClick={handleSwiperPrev}>
                    <IoIosArrowBack />
                </button>
            </div>

            <div className="swiper-button-next">
                <button onClick={handleSwiperNext}>
                    <IoIosArrowForward />
                </button>
            </div>




        </Container>
    )
}