import styled from "styled-components"

export default function SavingModal({setModalOpen, saveList}){
    function cancelSave(){
        setModalOpen(false);
      }
    return(
        <>
            <StyledMOdalContainer className="modal">
                <StyledInputContainer onSubmit={saveList}>
                    <label for="listName">
                        <h2>Enter a name for your list:</h2>
                    </label>
                    <input id="listName" name="name" type="text" placeholder="e.g. Todos for work"></input>
                    <StyledSelect name="color"  >
                        <option value="0">Select a color:</option>
                        <option value="#97C9F2" style={{ background: "var(--lightblue)" }}>Cloud Blue</option>
                        <option value="#F1525D" style={{ background: "var(--red)" }}>Fuji Red</option>
                        <option value="#F1525D" style={{ background: "var(--pink)" }}>Panther Pink</option>
                        <option value="#6D87EE" style={{ background: "var(--purpleblue)" }}>Neptune Blue</option>
                        <option value="#F27942" style={{ background: "var(--orange)" }}>Goku Orange</option>
                        <option value="#37C66D" style={{ background: "var(--green)" }}>Lantern Green</option>
                        <option value="#E3E949" style={{ background: "var(--yellow)" }}>Mellow Yellow</option>
                        <option value="#0B6CEC" style={{ background: "var(--blue)" }}>Nightwing Blue</option>
                    </StyledSelect>
                    <StyledbuttonContainer>
                        <button type="button" onClick={cancelSave}>Cancel</button>
                        <button type="submit" onSubmit={saveList}>Save</button>
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
const StyledInputContainer = styled.form`
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
const StyledSelect = styled.select `
    padding: 15px 15px;
    border-radius: 25px;
    font-family: inherit;
    font-weight: bold;
    border: none;
    font-size: 1rem;
`;