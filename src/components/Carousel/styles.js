import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:46.2rem;
    position: relative;


.cards {
    display: flex;
    overflow-x: auto;
    gap: 2.7rem;
    scroll-behavior: smooth;
    
}

.cards::-webkit-scrollbar {
  display: none; 
}

.swiper-button-prev {
  position: absolute;
  top: 18.4rem;
  z-index: 1;
}

.swiper-button-next {
  position: absolute;
  top: 18.4rem;
  right: 0;
  z-index: 1;
}



.swiper-button-prev svg, .swiper-button-next svg {
 width: 4rem;
 height: 4rem;
 cursor: pointer;
}

.swiper-button-prev button, .swiper-button-next button {
border: none;
background: none;
color: ${({ theme }) => theme.COLORS.WHITE};
}


`