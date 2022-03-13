import React from 'react'
import styled from 'styled-components'
import Article from './Article';

const Container = styled.div``;
const PayementList = styled.div`
    display:flex;
`;
const ListArticle = styled.div`
    margin:90px 0 0 160px;
    min-height:570px;
    width:1073px;
    background:white;  
`
const Number = styled.h1`
    font-family:Roboto;
    font-size:31px;
    padding:10px 0 0 40px;
`
const Wrapper = styled.div`
  margin-top:-13px;
  border-bottom:1px solid #BEC3CC;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuItem = styled.div`
  font-size: 20px;
  font-family:Roboto;
  font-weight:bold;
  cursor: pointer;
  margin-left: 20px;
  display:flex;
  align-items:center;
  
`;
const Right = styled.div`
  width:550px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-content: space-between;
`;
const Empty = styled.div`
    height:345px;
    width:330px;
    margin: 40px 0 0 34%;
`;
const Panier = styled.img`
    height:240px;
    margin:-10px 0 0 10px;
`;
const EmptyMessage = styled.p`
    font-size:27px;
    margin:0;
    text-align:center;
`;
const Button = styled.div`
    margin-top:20px;
    padding-top:15px;
    height:50px;
    font-size:23px;
    font-family:Roboto;
    text-align:center;
    color:white;
    background:black;
`;
const Path = styled.p`
    font-size:25px;
    margin:55px 0 0 35%;
    font-family:Roboto;
    color:#636364;
`;
const ActualPath = styled.span`
    color:black;
    font-weight:600;
`;
const Paye = styled.div` 
    margin:90px 0 0 30px;
    height:270px;
    width:500px;
    background:white;  
`;
const Buy = styled.div`
    margin:35px;
    padding-top:15px;
    width:430px;
    height:60px;
    font-size:30px;
    font-family:Roboto;
    text-align:center;
    color:#BEC3CC;
    background:#707070;
`;
const Price = styled.h1`
    margin:-20px 40px 0 0;
    font-family:Roboto;
    font-size:35px;
    float:right;
`;
const SubTotal = styled.p`
    font-family:Roboto;
    font-size:17px;
    margin:-10px 0 0 40px;
`;
const MyArticles = () => {
  return (
    <Container>
        <Path><ActualPath>Panier</ActualPath> &nbsp;&gt;&nbsp; LIVRAISON &nbsp;&gt;&nbsp; Payer &nbsp;&gt;&nbsp; CONFIRMATION</Path>
        <PayementList>
            <ListArticle>
                <Number>Résumé De L'article(0)</Number>
                <Wrapper>
                    <MenuItem>Article(s)</MenuItem>
                    <Right>
                        <MenuItem>Prix</MenuItem>
                        <MenuItem>Quantité(s)</MenuItem>
                        <MenuItem>Total</MenuItem>
                    </Right>
                </Wrapper>
                {/*<Empty>
                    <Panier src="./img/panier.png"/>
                    <EmptyMessage>VOTRE PANIER EST VIDE!</EmptyMessage>
                    <Button>ACHETER MAINTENANT</Button>
                </Empty>*/}
                <Article/>
                <Article/>
            </ListArticle>
            <Paye>
                <Number>Résumé De Votre Commande</Number>
                <Price>0,00€</Price>
                <SubTotal>Subtotal</SubTotal>
                <Buy>Payer</Buy> {/* changer la couleur en fonction du panier est ce qu'il est vide */}
            </Paye>
        </PayementList>
    </Container>
  )
}

export default MyArticles