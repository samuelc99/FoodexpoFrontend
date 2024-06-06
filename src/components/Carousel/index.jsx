import { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { Container } from "./styles";
import { Cards } from "../Cards"

export function Carousel() {
    const cards = useRef(null);

    const handleSwiperPrev = (e) => {
        e.preventDefault()
        cards.current.scrollLeft -= cards.current.offsetWidth;
    }

    const handleSwiperNext = (e) => {
        e.preventDefault()
        cards.current.scrollLeft += cards.current.offsetWidth;
    }
    
    return(
        <Container>
                <div className="cards" ref={cards}>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
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