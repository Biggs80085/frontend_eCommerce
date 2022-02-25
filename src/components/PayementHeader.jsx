import React from 'react'
import styled from 'styled-components'
import {Lock, ArrowRight} from "@material-ui/icons";

const Container = styled.div`
    height:120px;
    background:white;
    box-shadow: 0px 3px 5px lightgray;
`
const Wrapper = styled.div`
  margin-top:-13px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  font-size:80px;
`;

const Logo = styled.img`
    margin-left:33px;
    height:120px;
`;

const MenuItem = styled.div`
  font-size: 26px;
  margin-left: 15px;
  display:flex;
  align-items:center;
  color:#85B294;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Back = styled.div`
    font-size: 26px;
    margin-right:80px;
    display:flex;
    align-items:center;
    color:#707070;
`

const PayementHeader = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo src="./img/logo.png" />/
                <MenuItem>
                    <Lock style={{fontSize:45, background:'#85B294', borderRadius: 50, color:'white', padding:10, marginRight: 15}}/>
                    PAIEMENT FIABLE
                </MenuItem>
            </Left>
            <Right>
                <Back>
                    CONTINUER MES ACHATS
                    <ArrowRight style={{fontSize:40}}/>
                </Back>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default PayementHeader