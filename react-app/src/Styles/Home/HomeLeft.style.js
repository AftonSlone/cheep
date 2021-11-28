import styled from 'styled-components';

export const HomeLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: black;
  width: 30%;
  height: 100%;
  color: white;
  border-right: 1px solid rgba(245, 248, 250, 0.3);

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    width: 30%;
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
