import styled from "styled-components";

export const CheepCardContainer = styled.div`
  width: 100%;
  max-height: 45rem;
  display: flex;
  border-top: 1px solid rgba(245, 248, 250, 0.3);
  border-bottom: 1px solid rgba(245, 248, 250, 0.3);
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: violet;


  img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin-top: 1rem;
  }

  .cheepPhoto {
    width: 30rem;
    height: 30rem;
    border-radius: 0%;
    margin-top: 0rem;
  }
`;
