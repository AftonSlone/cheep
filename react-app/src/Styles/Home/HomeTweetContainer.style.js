import styled from "styled-components";

export const HomeTweetContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 20%;
  display: flex;
  border-top: 1px solid rgba(245, 248, 250, 0.3);
  border-bottom: 1px solid rgba(245, 248, 250, 0.3);

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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
      height: 60px;
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
        font-size: 40px;
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
        font-size: 30px;
        border-bottom: none;
        background-color: #1da1f2;
        border-radius: 30px;
        cursor: pointer;
      }
    }
  }

  img {
    width: 80%;
    height: 40%;
    border-radius: 50%;
    margin-top: 10px;
  }

  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    background-color: black;
    color: white;
    font-size: 20px;

    &:focus {
      outline: none;
    }
  }
`;
