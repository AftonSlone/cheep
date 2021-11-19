import styled from "styled-components";

export const ProfileButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 15%;
  height: 8%;
  position: absolute;
  bottom: 20px;
  background-color: black;
  margin-right: 1%;
  border-radius: 35px;

  &:hover {
    background-color: #14171a;
    cursor: pointer;
  }

  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: block;
  }

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }

  div:nth-child(2) {
    width: 100%;
  }

  span {
    display: block;
    margin: 5%;
  }
`;
