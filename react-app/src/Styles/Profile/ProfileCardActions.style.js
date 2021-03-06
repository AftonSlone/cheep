import styled from "styled-components";

export const ProfileCardActions = styled.div`
  display: flex;
  width: 100%;
  /* position: absolute; */
  bottom: 0;
  justify-content: space-around;
  margin-top: 2rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1da1f2;
    font-size: 3rem;
    width: 50%;
    height: 3rem;
    cursor: pointer;
    margin-right: 1rem;

    div:nth-child(1) {
      border-radius: 50%;
      width: 30%;
      &:hover {
        background-color: #14171a;
        color: #1da1f2;
      }
    }
  }
`;
