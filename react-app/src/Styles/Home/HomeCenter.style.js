import styled from "styled-components";

export const HomeCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  background-color: black;
  width: 40%;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
