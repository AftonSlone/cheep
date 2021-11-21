import styled from "styled-components";

export const CheepCardUsername = styled.div`
  width: 95%;
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
    cursor: pointer;
    width: 3rem;
    height: 3rem;

    &:hover {
      background-color: #14171a;
      border-radius: 1rem;
    }
  }
`;
