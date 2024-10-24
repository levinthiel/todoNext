"use client"
import { createGlobalStyle } from "styled-components";


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
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  input {
    width: 100%;
    padding: 0.75rem;
    font-size: 1.2rem;
    border-radius: 15.5rem;
    border: none;
    background-color: var(--white);
    font-family: inherit;
  }

  ul {
    padding: 0;
  }
  footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 25px;
    padding:10px;
    background: var(--black);
  }
  footer button, .modal button {
    background: var(--white);
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    font-family: inherit;
  }
  footer button:hover {
    background: var(--gray);
  }
  a {
    text-decoration: none;
  }
`;