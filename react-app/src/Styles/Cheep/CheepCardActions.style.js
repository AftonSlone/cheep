import styled from "styled-components";

export const CheepCardActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;


  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1da1f2;
    font-size: 30px;
    width: 20%;
    height: 30px;
    cursor: pointer;
    margin-right: 10px;

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
