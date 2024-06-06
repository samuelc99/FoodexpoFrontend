import styled from "styled-components";

export const Container = styled.footer`
    position: absolute;
    bottom: 0;

    width: 136.8rem;
    height: 7.7rem;

    display: flex;
    padding: 0 12.3rem;

    background: ${({ theme })=> theme.COLORS.BACKGROUND_800};
    justify-content: space-between;
    color: ${({ theme })=> theme.COLORS.GRAY_200};

    svg {
        fill: ${({ theme })=> theme.COLORS.GRAY_200};

    }

p {
    display: flex;
    align-items: center;
    color: ${({ theme })=> theme.COLORS.WHITE};
    font-size: 14px;
}

`