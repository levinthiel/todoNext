import styled from "styled-components"

export default function SavingModal({setModalOpen}){
    function cancelSave(){
        setModalOpen(false);
      }
    return(
        <>
            <StyledMOdalContainer className="modal">
                <StyledInputContainer>
                    <label for="listName">
                        <h2>Enter a name for your list:</h2>
                    </label>
                    <input id="listName" name="listName" type="text" placeholder="e.g. Todos for work"></input>
                    <StyledbuttonContainer>
                        <button type="button" onClick={cancelSave}>Cancel</button>
                        <button type="button">Save</button>
                    </StyledbuttonContainer>
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
    width: 350px;
    background: var(--black);
    padding: 20px;
    border-radius: 28px;
    color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
const StyledbuttonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;