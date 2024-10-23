"use client"
import styled from "styled-components";
import Link from "next/link";

export default function Mylists() {
    return (
        <>
        <section>
            <Link href="/">
                <button type="button">Back</button>
            </Link>
            <StyledH2>My lists:</StyledH2>
            <ul>
                <StyledMylists>
                    <StyledListTitle>list one</StyledListTitle>
                    <span>Todos: 50</span>
                </StyledMylists>
                <StyledMylists>
                    list one we try a very long name
                </StyledMylists>
                <StyledMylists>
                    list one
                </StyledMylists>
                <StyledMylists>
                    list one
                </StyledMylists>
            </ul>
        </section>
        </>
    );
}
const StyledH2 = styled.h2`
    color: var(--white);
`;
const StyledMylists = styled.li`
    list-style: none;
    width: 150px;
    height: 150px;
    background: var(--blue);
    border-radius: 20px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;
const StyledListTitle = styled.span`
    font-size: 1.5rem;
`;