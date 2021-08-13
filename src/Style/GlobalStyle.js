import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    :root{
        --cor-1: #f7e7dc;
        --cor-roxo-escuro: #2f294e;
        --cor-branco: #ffffff;
        --cor-logo: #f7e7dc;
        --cor-rosa-escuro: #820263;
        --cor-rosa-escuro-2: #5c0247;
        --cor-roxo-claro: #8d8cb4;
        --cor-azul: #7bdff2;
        --cor-azul-claro: #2bf7ef;
        --cor-verde-claro: #caffbf;
        --cor-amarelo: #fdffb6;
        --cor-rosa-claro: #f2b5d4;
        --cor-rosa-claro-1: #f7d6e0;
        --cor-verde-escuro: #b8dccb;
        --cor-verde-pastel: #eff7f6;
         
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        color: var(---cor-branco);
        font-family: "Fauna One", serif;

    }

    input, button {
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: "Alfa Slab One", cursive;
    }
    
    button {
        cursor: pointer;
        font-family: "Fauna One", serif;
    }

    a {
        text-decoration: none;
    }
`;
