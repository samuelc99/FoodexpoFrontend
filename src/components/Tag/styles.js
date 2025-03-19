import styled from "styled-components";

export const Container = styled.div`
display: flex;
font-size: 16px;
font-weight: 400;



 background-color: ${({ $isNew, theme }) => ($isNew ? 'transparent' : theme.COLORS.GRAY_200)};
/* color: ${({ theme }) => theme.COLORS.GRAY_200}; */
/* border: ${({  $isNew, theme }) => ($isNew ? `1px dashed ${theme.COLORS.WHITE2}` : 'none')};  */

border: 1px dashed  #7C7C8A;
height: 3.2rem;
/* width: 13.8rem; */
border-radius: .8rem;

// color: ${({ theme }) => theme.COLORS.WHITE};
// border: ${({ theme }) => theme.COLORS.WHITE}; 
// border-radius: 1rem;
// width: 11.8rem;

 > button {
  display: flex;
  align-items: center;
  border: none;
  background: none;



  padding-right: 1.5rem;
  /* color: ${({ theme }) => theme.COLORS.PINK}; */

  /* position: absolute; */

  /* margin: .4rem 0 0 10.5rem; */
} 

svg {
  width: 2.2rem;
  height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.WHITE2};
} 

> input {

  /* background-color: ${({ $isNew, theme }) => ($isNew ? 'transparent' : theme.COLORS.GRAY)}; */
  /* color: ${({ theme }) => theme.COLORS.GRAY}; */
  /* border: ${({  $isNew, theme }) => ($isNew ? `1px dashed ${theme.COLORS.WHITE2}` : 'none')}; */







  height: 3.2rem;
  min-width: 10.8rem;
  max-width: ${({ $isNew }) => ($isNew ? '40rem' : '40rem')};
  padding-left: 1.6rem;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE2};
  background: transparent;
  border: none;
  border-radius: .8rem;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
}
`
