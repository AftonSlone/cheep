import styled from "styled-components";

export const CheepCardOptionsContainer = styled.div`
display: flex;
position: relative;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
background-color: black;
font-size: 2rem;
width: 30%;
height: 20%;
border: 1px solid #1DA1F2;
border-radius: 2rem;
span {
    position: absolute;
    top: 1rem;
    left: 1rem;
    cursor: pointer;
    margin: 1rem;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1DA1F2;
    width: 70%;
    height: 30%;
    margin: 1rem;
    border-radius: 2.5rem;
    cursor: pointer;
}
`;
