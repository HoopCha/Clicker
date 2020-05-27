import React, {useState} from "react";
import styled from "styled-components";

const Main = styled.div `
display: flex;
justify-content: space-around;
align-content: center;
background-color: red;
margin: 10px 0px;
`
const Middle = styled.div `
transition: .5s ease;
opacity: 0;

${Main}:hover & {
   opacity: 1;
}
`


export default function StoreItem(props) {
  return (
    <Main>
        <p>{props.index}</p>
        <p>{props.item.name}</p>
        <p>{props.item.description}</p>
        <p>Cost: {props.item.cost}</p>
    </Main>
  );
}
