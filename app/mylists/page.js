"use client"
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Components/Logo";

export default function Mylists() {
    return (
        <>
            <header >
                <Logo />
            </header>
        <StyledListSection>
            <Link href="/">
                <StyledBackButton type="button">
                    <Image
                        src="/imgs/arrow-right-solid.svg"
                        width={20}
                        height={20}
                        alt="trash bin"/>
                    Back
                </StyledBackButton>
            </Link>
            <StyledH2>My lists:</StyledH2>
            <StyledUl>
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
            </StyledUl>
        </StyledListSection>
        </>
    );
}
const StyledListSection = styled.section`
    max-width: 450px;
    margin: 0px auto;
    width: 450px;
`;
const StyledH2 = styled.h2`
    color: var(--white);
`;
const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;
const StyledMylists = styled.li`
    list-style: none;
    width: 140px;
    height: 150px;
    background: var(--blue);
    border-radius: 20px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    cursor: pointer;
    color: var(--white);

    &:hover {
        background: var(--blue-dark);
    }
`;
const StyledListTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0;
`;
const StyledBackButton = styled.button`
    background-color: var(--white);
    border: none;
    padding: 10px 30px;
    border-radius: 20px;
    font-family: inherit;
    font-size: 1rem;
    display: flex;
    gap: 10px;
    font-weight: bold;

    &:hover {
        background-color: var(--gray);
    }
`;