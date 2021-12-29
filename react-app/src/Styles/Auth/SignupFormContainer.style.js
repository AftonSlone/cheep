import styled from "styled-components";

export const SignupFormContainer = styled.form`
  background-color: #14171a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40%;
  /* height: 40%; */
  font-size: 1.5rem;
  border-radius: 2.5rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: white;
    top: 1rem;
    left: 1rem;
    width: 3rem;
    height: 3rem;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }

  input {
    width: 60%;
    height: 3rem;
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
