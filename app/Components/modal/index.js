import styled from "styled-components"

export default function SavingModal(){
    return(
        <>
            <StyledMOdalContainer>
                <StyledInputContainer>
                    <h2>Enter Something</h2>
                </StyledInputContainer>
            </StyledMOdalContainer>
        </>
    )
}

const StyledMOdalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    `;
const StyledInputContainer = styled.div`
`;