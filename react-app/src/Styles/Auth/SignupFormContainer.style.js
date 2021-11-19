import styled from "styled-components";

export const SignupFormContainer = styled.form`
  background-color: #14171a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40%;
  height: 40%;
  border-radius: 25px;
  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: white;
    top: 10px;
    left: 10px;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }

  input {
    width: 60%;
    height: 30px;
    margin-top: 2%;
    margin-bottom: 2%;
    outline: none;
    background-color: #14171a;
    color: #1da1f2;
    border-bottom: 1px solid #1da1f2;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: white;
    }
  }
`;
