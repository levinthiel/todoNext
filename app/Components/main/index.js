"use client"
import styled, { css } from "styled-components";
import InputForm from "../input";
import Image from "next/image";
import Logo from "../Logo";


export default function Main ({todos, setTodos, handleBin, handleIsDone, todosList}) {

   


    return (
        <MainCompo>
            <header >
                <Logo />
            </header>
             
            <InputForm setTodos={setTodos}  todos={todos} placeholder='write a to do and press "Enter"'/>
            {todosList.length !== 0 && ( <p>Current List: {todosList[todosList.length -1].name}</p> ) }
            {todos.length ===0 && (
                <StyledInfoMsg>
                    <Image
                    src="/imgs/circle-info-solid.svg"
                    width={20}
                    height={20}
                    alt="trash bin"/>
                    <p>These to dos are only sotred locally inside your browser</p>
                </StyledInfoMsg>
                )}
            <ul>
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <Styledli key={todo.id} onClick={() => handleIsDone(todo.id)} $isDone={todo.isDone} $todoColor={todo.color} $todoColorDark={todo.colordark}>
                            {todo.text}
                            <div>
                                {/* <Binbtn >
                                    
                                </Binbtn> */}
                                <Binbtn onClick={(e) => { e.stopPropagation(); handleBin(todo.id); }}>
                                    <Image
                                        src="/imgs/trash-solid.svg"
                                        width={20}
                                        height={20}
                                        alt="trash bin"/>
                                </Binbtn>
                            </div>
                        </Styledli>
                    ))
                ) : (
                    null
                )}
            </ul>
        </MainCompo>
    )
}

/*-------CSS----------------------------------------*/
const MainCompo = styled.main`
    max-width: 450px;
    margin: 0px auto;
    width: 450px;
    padding: 10px;
`;
const Styledli = styled.li`
    color: var(--black);
    background-color: ${({ $todoColor }) => $todoColor || "var(--red)"};;
    list-style: none;
    margin-bottom: 5px;
    width: 100%;
    text-align: center;
    padding: 20px;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    word-break: break-all;
    font-size: 1.5rem;
    align-items: center;
    font-weight: 900;
    transition: all 0.6s ease;

    &:hover {
        background-color:  ${({ $todoColorDark }) => $todoColorDark || "var(--red-dark)"};
  }
  ${({ $isDone }) =>
    $isDone &&
    css`
        background-color: var(--blacklight);
        text-decoration: line-through;
        &:hover {
        background-color: var(--blacklight);
  }
    `}
    ${({ $todoColor }) =>
    $todoColor &&
    css`
        background-color: {todo.color};
        &:hover {
        background-color:{todo.colordark};
  }
    `}
`;
const Binbtn = styled.button`
    border: none;
    border-radius: 25px;
    padding: 12px 17px;
`;

const StyledInfoMsg = styled.div`
    display: flex;
    color: var(--white);
    justify-content: space-between;
    align-items: center;
`;
