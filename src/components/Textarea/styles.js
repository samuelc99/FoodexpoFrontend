import styled from "styled-components";

export const Container = styled.textarea`
width: 100%;
height: 17.2rem;
display: flex;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
border-radius: .8rem;
border: none;
resize: none;

font-size: 16px;
color: ${({ theme }) => theme.COLORS.WHITE};

padding: 1.4rem;

&:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
}

`