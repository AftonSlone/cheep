import styled from "styled-components";

export const EditCheepContainer = styled.div`
  background-color: black;
  width: 50%;
  height: 20%;
  display: flex;
  border: 1px solid #1DA1F2;

  span {
      color: white;
      font-size: 2rem;
      position: absolute;
      left: 1rem;
      top: 1rem;
      cursor: pointer;
  }


  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    height: 100%;
    width: 15%;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 85%;
    background-color: black;

    div:nth-child(1) {
      width: 100%;
      height: 70%;
      background-color: black;
      border-bottom: 1px solid rgba(29, 161, 242, 0.3);
    }

    div:nth-child(2) {
      width: 100%;
      height: 6rem;
      background-color: black;
      color: #1da1f2;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10%;
        height: 90%;
        font-size: 4rem;
        border-bottom: none;
        cursor: pointer;
      }

      div:nth-child(3) {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 30%;
        height: 80%;
        font-size: 3rem;
        border-bottom: none;
        background-color: #1da1f2;
        border-radius: 3rem;
        cursor: pointer;
      }
    }
  }

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin-top: 1rem;
  }

  textarea {
    width: 99%;
    height: 100%;
    resize: none;
    background-color: black;
    color: white;
    font-size: 2rem;

    &:focus {
      outline: none;
    }
  }
`;
