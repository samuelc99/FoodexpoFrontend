import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
gap: 30.6rem;

.logo svg {
    fill: #065E7C;
    width: 4.9rem;
    height: 4.7rem;
}

.logo h2 {
    font-size: 4.2rem;
}
`

export const Form = styled.form`
width: 47.6rem;
padding: 6.4rem;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
border-radius: 16px;

display: flex;
flex-direction: column;
justify-content: center;
gap: 3.2rem;

h2 {
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
}

.inputEmail span, .inputPassword span, .inputName span {
    display: flex;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY};
}

input{
    border: 1px solid #FFFFFF;
    border-radius: 5px;
}

.buttonText {
    display: flex;
    justify-content: center;
}

.buttonText .link {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;

    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
}

`