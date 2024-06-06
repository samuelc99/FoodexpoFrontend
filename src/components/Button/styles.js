import styled from "styled-components";

export const Container = styled.button`
width: 100%;
max-height: 5.6rem;
padding: 1.2rem 3.2rem;

background: ${({ theme }) => theme.COLORS.RED};
color: ${({ theme })=> theme.COLORS.WHITE};

border: none;
border-radius: .5rem;

font-family: "Poppins", sans-serif;
font-weight: 500;

&:disabled {
    opacity: 0.5;
    z-index: 1;
}
`