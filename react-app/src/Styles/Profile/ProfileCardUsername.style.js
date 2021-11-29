import styled from "styled-components";

export const ProfileCardUsername = styled.div`
  width: 99%;
  color: white;
  font-size: 2rem;
  position: relative;
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1da1f2;
    cursor: pointer;
    width: 10rem;
    height: 3rem;
    position: absolute;
    right: 1rem;
    top: 0;

    &:hover {
      background-color: #14171a;
      border-radius: 1rem;
    }
  }
`;
