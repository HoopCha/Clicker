import React, {useState} from "react";
import styled from "styled-components";
import Store from "./Store"


const Main = styled.div `
display: flex;
justify-content: space-around;
align-content: center;
padding: 10vh;
`

const Score = styled.div `
font-size: 36px;
`

const Button = styled.button `
padding: 15px 25px;
font-size: 24px;
cursor: pointer;
text-align: center;
text-decoration: none;
outline: none;
color: #fff;
background-color: #4CAF50;
border: none;
border-radius: 15px;
box-shadow: 0 9px #999;

&:hover {
    background-color: #3e8e41
}

&:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
`

export default function WelcomePage() {

const [score, setScore] = useState(0);
const [click, setClick] = useState(1);

  return (
    <Main>
        <Store setScore={setScore} score={score} setClick={setClick} click={click}/>
        <Button onClick={() => setScore(score + click)}>Click Me</Button>
        <Score>Clicks: {score}</Score>
    </Main>
  );
}