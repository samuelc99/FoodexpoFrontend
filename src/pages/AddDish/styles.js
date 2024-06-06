import styled from "styled-components";

export const Container = styled.div`
.buttonText, h1 {
    padding-left: 12.3rem;
}

.buttonText{
    margin-bottom: 2.4rem;
}

h1 {
    font-weight: normal;
    margin-bottom: 3.2rem;
}


`

export const Form = styled.form`
position: relative;
display: flex;
flex-direction: column;

width: 112rem;
height: 50.8rem;

margin: auto;


gap: 3.2rem;

.saveButton {
    position: absolute;
    display: flex;
    width: 17.2rem;
    right: 0;
    bottom: 0;
    white-space: nowrap;
    background-color: ${({ theme }) => theme.COLORS. SALMON};
}

`


export const ImageNameCategory = styled.form`
    display: flex;
    gap: 3.2rem;

    .nameInput {
    width: 46.3rem;
}

.categoryInput {
    width: 36.6rem;
}

span {
    display: flex;
    margin-bottom: 1.6rem;
}


.imageDish {
    position: relative;
    width: 22.9rem;

label {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
    left: 3.2rem;
    top: 4.4rem;

    gap: 8px;

    svg {
        width: 28px;
        height: 28px;
    }

}

input {
        display: none;
    }

span {
    display: flex;
    margin-bottom: 1.6rem;
}
}

`

export const IngredientsPrice = styled.form`
display: flex;
gap: 3.2rem;

span {
    display: flex;
    margin-bottom: 1.6rem;
}

.tagsIngredientes {
    width: 83.7rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: 5px;
}

.priceInput {
    width: 25.3rem;
}

.tagsIngredientes {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 8px;
}

`
