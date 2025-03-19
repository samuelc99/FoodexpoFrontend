import styled from "styled-components";


export const Container = styled.div`
grid-area: header;
justify-content: space-between;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
display: flex;
height: 10.4rem;

align-items: center;
padding: 0 12.3rem;


 svg {
    fill: #065E7C;
    
}

.out{
    fill: none;
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
}

.input {
 display: flex;
 width: 58.1rem;
}

.input svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.COLORS.GRAY};
}

Button {
width: 21.6rem;
}

`