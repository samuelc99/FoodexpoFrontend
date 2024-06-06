import styled from "styled-components";

export const Container = styled.div`
display: flex;
font-size: 16px;
font-weight: 400;

color: ${({ theme }) => theme.COLORS.WHITE};
border: ${({ theme }) => theme.COLORS.WHITE}; 
border-radius: 1rem;
width: 11.8rem;

> button {
  display: flex;
  align-items: center;
  border: none;
  background: none;
  padding-right: 1.6rem;
  color: ${({ theme }) => theme.COLORS.PINK};
}

svg {
  width: 2.2rem;
  height: 2.4rem;
}

> input {
  height: 3.2rem;
  width: 11.8rem;
  padding-left: 1.6rem;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE2};
  background: transparent;
  border: 1px dashed  #7C7C8A;
  border-radius: .8rem;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
}
`
