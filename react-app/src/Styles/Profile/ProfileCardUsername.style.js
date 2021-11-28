import styled from "styled-components";

export const ProfileCardUsername = styled.div`
  width: 99%;
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin-bottom: 1rem;
  }

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
