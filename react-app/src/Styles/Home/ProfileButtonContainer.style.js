import styled from "styled-components";

export const ProfileButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 15%;
  height: 8%;
  font-size: 1.5rem;
  position: absolute;
  bottom: 2rem;
  background-color: black;
  margin-right: 1%;
  border-radius: 3.5rem;

  &:hover {
    background-color: #14171a;
    cursor: pointer;
  }

  img {
    width: 6rem;
    height: 5rem;
    border-radius: 50%;
    object-fit: fill;
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
