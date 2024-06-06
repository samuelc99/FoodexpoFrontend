import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 4.8rem;

display: flex;
align-items: center;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
border-radius: .5rem;


>input {
width: 100%;
height: 4.8rem;
font-size: 16px;
color: ${({ theme }) => theme.COLORS.WHITE};
background-color: transparent;
border: none;

padding: 1.2rem 1.4rem;

&:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
}
}
`