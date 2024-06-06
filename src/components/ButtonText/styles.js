import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
display: flex;
background: none;
border: none;
border-radius: .5rem;

color: ${({ theme })=> theme.COLORS.WHITE2};

font-family: "Poppins", sans-serif;
font-weight: bold;
font-size: 24px;

margin-top: 4rem;
align-items: center;
text-align: center;

>svg {
  width:32px;
  height: 32px;
}

&:disabled {
    opacity: 0.5;

}
`