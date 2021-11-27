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


  .cheepContentWrapper {
    width: 100%;
    margin-bottom: 2rem;
  }

  .cheepPhotoWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 45rem;
    width: 80%;
    background-color: black;
    border-radius: 2.5rem;
    margin-bottom: 2rem;
  }
`;
