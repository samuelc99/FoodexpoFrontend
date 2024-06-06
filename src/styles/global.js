import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        
        font-family: "Roboto";
        font-weight: 400;
        font-size: 1.6rem;

        max-width: 136.8rem;
        margin: auto;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea{
        font-family: "Roboto", sans-serif;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    } 





`