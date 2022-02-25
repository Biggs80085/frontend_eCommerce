import React, { useState } from 'react'
import styled from 'styled-components'
import {KeyboardArrowDown, Remove} from "@material-ui/icons";

const Container = styled.div`
    height:250px;
    width:95%;
    margin:2.5% 1% 2.5% 3.5%;
    border-bottom: dashed #BEC3CC;
    display:flex;
`;
const Model = styled.img`
    height:225px;
`;
const Information = styled.div`
    margin-left:10px;
    height:225px;
    width:100%;
`;
const Name = styled.p`
    margin:0;
    font-size: 20px;
    font-family:Roboto;
`;
const SizePrice = styled.div`
    margin-top:5px;
    width:100%;
    display:flex;
    align-items:center;   
`;
const Right = styled.div`
    margin-left:230px;
    width:540px;
    display: flex;
    justify-content: flex-end;
    justify-content: space-between;
    align-items: center;
`;
const Size = styled.div`
    font-size:20px;
    font-family:Roboto;
    font-weight:bold;
    height:20px;
    padding:10px 15px 10px 15px;
    background:#f2f2f2;
    border-radius:30px;
    display:flex;
    align-items:center;
`;
const Price = styled.p`
    font-size:22px;
    font-family:Roboto:
    font-weight:bold;
`;
const Quantity = styled.div`
    height:35px;
    width:100px;
    border:1px solid #BEC3CC;
    border-radius:30px;
    display:flex;
    justify-content: space-between;
`
const Minus = styled.button`
    height:35px;
    width:30px;
    border-radius:30px 0 0 30px;
    background:transparent;
    border:none;
    border-right: 1px solid #BEC3CC;
`;
const Number = styled.p`
    margin-top:8px;
`;
const Plus = styled.button`
    font-size:20px;
    height:35px;
    width:30px;
    border-radius:0 30px 30px 0;
    background:transparent;
    border:none;
    border-left: 1px solid #BEC3CC;
`;
const Total = styled.p`
    font-size:22px;
    font-family:Roboto:
    font-weight:bold;
`;
const Delete = styled.p`
    font-size:20px;
    font-family:Roboto;
    margin-top:90px;
`;


function Article() {
    const [number, setNumber] = useState(1);
  
  return (
    <Container>
        <Model src="./img/model.png"/>
        <Information>
            <Name>Doudoune zippée à poche à capuche (sans manches)</Name>
            <SizePrice>
                <Size>L
                    <KeyboardArrowDown style={{marginTop:8}}/>
                </Size>
                <Right>
                    <Price>20,99€</Price>
                    <Quantity>
                        <Minus onClick={(e) => { setNumber(number - 1)}}><Remove style={{fontSize:17, marginTop:3}}/></Minus>
                        <Number>{number}</Number>
                        <Plus onClick={(e) => { setNumber(number + 1)}}>+</Plus>
                    </Quantity>
                    <Total>{number * 20.99}€</Total>
                </Right>
            </SizePrice>
            <Delete>Effacer</Delete>
        </Information>
    </Container>
  )
}

export default Article