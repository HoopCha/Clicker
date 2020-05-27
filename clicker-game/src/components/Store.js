import React, {useState, useEffect} from "react";
import styled from "styled-components";
import StoreItem from "./StoreItem";

const Main = styled.div `
display: flex;
flex-direction: column;
justify-content: space-around;
align-content: center;
padding: 30px;
width: 30vw;
background-color: #cbf5eb;
`

const Item = styled.div `
display: flex;
justify-content: space-around;
padding-bottom: 20px;
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

export default function Store(props) {


const checkMoneytoPrice = (money, price) => {
    if(money >= price){
        return true
    }
    return false
};


const Upgrade = (cost, upgrade, multiplier, key) => {
    console.log(cost)
    if (checkMoneytoPrice(props.score, cost)){
        props.setClick(props.click + upgrade)
        props.setScore(props.score - cost)
        test[key].cost = cost*multiplier;
    }
}

var storeItem = {
    key: 0,
    name: "Clicker", 
    description:"Increases clicks gained per click by 1", 
    upgrade: 1,
    cost:10, 
    multiplier:2,
    visible: true
};

var storeItem2 = {
    key: 1,
    name: "Clicker2", 
    description:"Increases amount of clicks by 1", 
    upgrade: 10,
    cost:100, 
    multiplier:2,
    visible: true
};

const [test, setTest] = useState([storeItem, storeItem2]);


  return (
    <Main>
        <h1>Store</h1>
        {test.map((item) => {
            if(item.visible === true){
            return (
            <div key={item.key}>
            <StoreItem 
            item={item} 
            upgrade={Upgrade} />
            <button onClick={() => Upgrade(item.cost, item.upgrade, item.multiplier, item.key)}>Buy</button>
            </div>
            )}
        })}
    </Main>
  );
}