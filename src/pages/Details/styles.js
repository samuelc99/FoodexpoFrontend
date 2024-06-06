import styled from "styled-components";

export const Container = styled.div`
height: 100%;
`

export const Main = styled.div`
display: flex;
margin-top: 4.2rem;
gap: 4.7rem;
align-items: center;

.img img {
    width: 39rem;
    height: 39rem;
}

.details {
    max-width: 68.7rem;
}

h1 {
    font-family: "Poppins", sans-serif;    
    font-weight: 500;
    font-size: 40px;
    color: ${({ theme })=> theme.COLORS.WHITE2};
}

p {
    font-family: "Poppins", sans-serif;    
    font-weight: 300;
    font-size: 24px;
    margin: 2.4rem 0;
    color: ${({ theme })=> theme.COLORS.WHITE2};
}

.tags {
    display: flex;
    gap: 1.2rem;
}

.tags span {
    display: flex;
    padding: 4px 8px;

    text-align: center;
    align-items: center;
    justify-content: center;

    font-family: "Poppins", sans-serif;    
    font-size: 14px;
    line-height: 24px;
    
    background-color: ${({ theme })=> theme.COLORS.GRAY_400};
    border-radius: .5rem;

    margin-bottom: 4.8rem;

}

.moreLess{
    font-size: 20px;
    font-weight: bold;
    display: flex;

    color: ${({ theme })=> theme.COLORS.WHITE2};
    gap: 16px;
    align-items: center;
}

`
