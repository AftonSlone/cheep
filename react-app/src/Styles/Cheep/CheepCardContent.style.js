import styled from "styled-components";

export const CheepCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  box-sizing: border-box;
  width: 100%;
  /* min-height: 30%; */
  border: 1px solid red;

  .cheepContentWrapper {
    width: 100%;
    background-color: firebrick;
  }

  .cheepPhotoWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    background-color: black;
    border-radius: 2.5rem;
  }
`;
