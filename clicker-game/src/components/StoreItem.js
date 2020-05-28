import React, {useState, useEffect } from "react";
import styled from "styled-components";

const Main = styled.div `
display: flex;
flex-direction: column;
background-color: #d9d9d9;
margin: 10px 0px;
padding: 10px;
width: 70%;
`
// const Middle = styled.div `
// transition: .5s ease;
// opacity: 0;

// ${Main}:hover & {
//    opacity: 1;
// }
// `
const Text = styled.div `
color: #222;
font-size: 2rem;
`

const Flex = styled.div `
display: flex;
justify-content: space-between;
`
const Text2 = styled.div `
font-size: 2rem;
&.red {
  color: red;
}
&.green {
  color: green;
}
`



export default function StoreItem(props) {

const [purchasable, setPurchasable] = useState("red");

const canBuy = () => {
  if(props.score >= props.item.cost){
      setPurchasable("green")
  }
else if (props.score < props.item.cost){
  setPurchasable("red")
}
};

useEffect(() => {
  canBuy()
}, [props.score]);


  return (
    <Main>
      <Flex>
        <Text>{props.item.name}</Text>
        <Text2 className ={purchasable}>Cost: {props.item.cost}</Text2>
      </Flex>
        <p>{props.item.description}</p>
    </Main>
  );
}
