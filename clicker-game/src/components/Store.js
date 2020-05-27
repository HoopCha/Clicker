import React, {useState} from "react";
import styled from "styled-components";


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

export default function Store(props) {
const [cost, setCost] = useState(10);

const checkMoneytoPrice = (money, price) => {
    if(money >= price){
        return true
    }
    return false
};


const FirstUpgrade = () => {
    if (checkMoneytoPrice(props.score, cost)){
        props.setClick(props.click + 1)
        props.setScore(props.score - cost)
        setCost(cost*2)
    }
}

  return (
    <div>
        <Button onClick={() => FirstUpgrade()}>Increase click by 1. Cost:{cost}</Button>
    </div>
  );
}