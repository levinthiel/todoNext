"use client"
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import todoColors from "../../Data/data";
import { useState } from "react";



export default function InputForm ({placeholder, setTodos, todos}) {

    const [prevColor, SetPrevColor] = useState()

    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const randomColor = todoColors[Math.floor(Math.random() * todoColors.length)];
        console.log("randomColor", randomColor)

        let newTodo = {
            colorid: randomColor.id,
            id: uuidv4(),
            color:randomColor.color,
            colordark:randomColor.colordark,
            text: data.todoInput
        };

        if ( newTodo.colorid === prevColor ) {

            const randomColor = todoColors[Math.floor(Math.random() * todoColors.length)];

            newTodo = {
                colorid: randomColor.id,
                id: uuidv4(),
                color:randomColor.color,
                colordark:randomColor.colordark,
                text: data.todoInput
            };
        }


        console.log("newTodo", newTodo)
        setTodos([...todos, newTodo]);
        SetPrevColor(newTodo.colorid)
        console.log("prevocolor", prevColor)

        event.target.reset();
        event.target.focus();

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <StyledInput name="todoInput" placeholder={placeholder}/>
            </form>
        </>
    )
}

/*-------CSS----------------------------------------*/
const StyledInput = styled.input`
    margin-top: 100px;
`;