import styled from "styled-components";

export const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  div {
    border: 1.6rem solid #e1e8ed; /* Light grey */
    border-top: 1.6rem solid #1da1f2; /* Blue */
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
