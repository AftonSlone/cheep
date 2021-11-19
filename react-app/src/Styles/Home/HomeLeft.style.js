import styled from "styled-components";

export const HomeLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: black;
  width: 30%;
  height: 100%;
  color: white;

  /* div {
      position: absolute;
      bottom: 0;
  } */

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    width: 30%;
    height: 5%;
    border-radius: 25px;
    font-size: 25px;
    background-color: black;
    margin-right: 20%;
    margin-top: 1%;
    margin-bottom: 1%;
    cursor: pointer;
    text-decoration: none;

    &:visited {
        color: white;
    }

    &:hover {
        background-color: #14171A;

    }
  }
`;