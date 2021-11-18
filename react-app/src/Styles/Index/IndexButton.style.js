import styled from "styled-components";

export const IndexButton = styled.div`
  background-color: ${(props) => props.backgroundColor || "#1DA1F2"};
  color: ${(props) => props.color || "white"};
  height: 5%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 1%;
  margin-bottom: 1%;
  border: 1px solid ${(props) => props.borderColor || "#1DA1F2"};
  border-radius: 25px;
  cursor: pointer;
`;
