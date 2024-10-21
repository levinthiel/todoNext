"use client"
import { createGlobalStyle } from "styled-components";

import { Fredoka } from 'next/font/google';
const fred = Fredoka({ subsets: ['latin'] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :root {
  --black: #131313;
  --blacklight: #454545;
  --white: #F7F7F7; 
  --gray: #d1d1d1;
  --lightblue:#97C9F2;
  --lightblue-dark:#709DC2;
  --red:#F1525D;
  --red-dark:#A63038;
  --pink:#F28FC0;
  --pink-dark:#B6638B;
  --blue:#0B6CEC;
  --blue-dark:#1256AF;
  --purpleblue:#6D87EE;
  --purpleblue-dark:#5366B2;
  --orange:#F27942;
  --orange-dark:#B45B31;
  --green:#37C66D;
  --grenn-dark:#2A8D50;
  --yellow:#E3E949;
  --yellow-dark:#A5A93D;

}

  body {
    margin: 0;
    background-color: var(--black);
    font-family: "Fredoka", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  ul {
    padding: 0;
  }
  footer {
    position: fixed;
    bottom: 0;
  }
`;