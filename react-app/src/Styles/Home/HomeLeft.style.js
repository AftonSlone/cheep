import styled from "styled-components";

export const HomeLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: black;
  width: 30%;
  height: 100%;
  color: white;
  border-right: 1px solid rgba(245, 248, 250, 0.3);

  .navlinkcontainer {
    display: flex;
    flex-direction: column;
    width: 50%;
    background-color: black;
    height: 100%;
  }

  .icon {
    margin-right: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    color: white;
    height: 5%;
    border-radius: 2.5rem;
    font-size: 2.5rem;
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
      background-color: #14171a;
    }
  }
`;
