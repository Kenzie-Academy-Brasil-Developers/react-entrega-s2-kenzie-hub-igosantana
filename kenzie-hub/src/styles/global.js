import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        font-family: 'Inter', sans-serif;
    }

    :root {
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa; 
        --sucess: #3fe864;
        --negative: #e83f5b; 
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

`
