import styled from "styled-components";

export const Container = styled.div`
width: 30.4rem;
height: 46.2rem; 
padding: 2.4rem;
position: relative;
flex: none;
cursor: pointer;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
border: 1px solid #000204;
border-radius: 8px;

text-align: center;

>svg { 
    width: 2.4rem;
    height: 2.2rem;
    display: flex;
    position: absolute;
    right: 18px;
    top: 1.6rem;
}

img {
    width: 17.6rem;
    height: 17.6rem; 
}

p {
    margin: 1.5rem 0;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 24px;
    
}

span {
    margin-bottom: 1.5rem;
    font-weight: 400;
    font-size: 1.4rem;
    color: ${({ theme })=> theme.COLORS.GRAY};
}

h2 {
    margin: 1.5rem 0;
    color: #82f3ff;
    font-size: 3.2rem;
    font-weight: 400;
}

.moreLess{
    font-size: 20px;
    font-weight: bold;
    display: flex;

    color: ${({ theme })=> theme.COLORS.WHITE2};
    gap: 16px;
    justify-content: center;
    align-items: center;
}

.moreLess svg {
    width: 2.4rem;
    height: 2.4rem;
}

`