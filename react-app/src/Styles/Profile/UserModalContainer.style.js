import styled from "styled-components";

export const UserModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 30rem;
  position: relative;
  border: 1px solid #1DA1F2;
  border-radius: 2.5rem;
  background-color: black;

  span {
      color: white;
      font-size: 2rem;
      position: absolute;
      top: 1rem;
      left: 1rem;
      cursor: pointer;
  }

  div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #1DA1F2;
      color: white;
      width: 70%;
      height: 20%;
      border-radius: 2.5rem;
      font-size: 2rem;
      cursor: pointer;
  }
`;
