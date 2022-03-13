import { ListAlt } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components"
import SideProfil from "./SideProfil";

const Container = styled.div`
    width: 75%;
    margin:auto;
    padding-top: 25px;
`;
const Path = styled.span`
    font-size:20px;
    font-family:Roboto;
    color:gray;
    margin-left: 40px;
`;
const Body = styled.div`
    display: flex;
    margin-top: 25px;
`;
const SideRight = styled.div`
    flex: 3;
    margin-left: 20px;
    padding:20px 70px 60px 70px;
    background-color: white;
    display:flex;
    flex-direction:column;
    ${{/*align-items:center;                Quand c'est vide*/}}
`;
const SideRightTitle = styled.h1`
    text-align: center;
`;
const SideRightText = styled.span`
    font-size: 16px;
    color: gray;
`;
const SideRightTop = styled.div`
    margin: 50px 0 20px 0;
    display:flex;
    justify-content: space-around;
    background-color:#F7F8FA;
    height: 40px;
    align-items:center;
`;
const SideRightBottom = styled.div`
    margin-top:20px;
`;
const SideRightTopTitle = styled.span`
    font-size: 20px;
`;
const SideRightBottomWrap = styled.div`
    padding-top: 10px;
    border: 1px solid lightgray;
`;
const SideRightBottomRef = styled.span`
    margin: 20px;
`;
const SideRightBottomList = styled.div`
    padding:10px;
    margin-top:20px;
    display:flex;
    justify-content: space-around;
    align-items:center;
    
`;
const SideRightBottomItem = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const SideRightBottomItemImg = styled.img`
    height: 140px;
`;
const SideRightBottomItemNumber = styled.span`
    font-size:20px;
    margin-top: 10px;
`;
const SideRightBottomItemSpan = styled.span`
    font-size: 24px;
    font-weight: 600;
`;
const SideRightBottomItemButton = styled.button`
    padding: 10px;
    font-size: 20px;
    font-weight: 600;
    background-color:black;
    border:none;
    color: white;
    width: 180px;
    cursor: pointer;
    &:hover{
        background-color: gray;
    }
`;

function Orders() {
  return (
    <Container>
        <Path>Accueil &nbsp;/&nbsp; Mes Commandes</Path>
        <Body>
            <SideProfil />
            <SideRight>
                <SideRightTitle>MES COMMANDES</SideRightTitle>
                {/* 
                    Quand il n'y a aucune commande

                <ListAlt style={{marginTop:40, fontSize: 70, color: "gray"}} />
                <SideRightText>Vide ici :-(</SideRightText>
                */}

                <SideRightTop>
                    <SideRightTopTitle>Les articles</SideRightTopTitle>
                    <SideRightTopTitle>Total</SideRightTopTitle>
                    <SideRightTopTitle>État</SideRightTopTitle>
                    <SideRightTopTitle>Activités de commande</SideRightTopTitle>
                </SideRightTop>
                <SideRightBottom>
                    <SideRightBottomWrap>
                        <SideRightBottomRef>18 févr. 2022 01:42:34  Numéro de commande FDSQGFHTHRS245363563</SideRightBottomRef>
                        <SideRightBottomList>
                            <SideRightBottomItem>
                                <SideRightBottomItemImg src="../img/model.png"/>
                                <SideRightBottomItemNumber>1 Article</SideRightBottomItemNumber>
                            </SideRightBottomItem>

                            <SideRightBottomItem>
                                <SideRightBottomItemSpan>5,00€</SideRightBottomItemSpan>
                            </SideRightBottomItem>

                            <SideRightBottomItem>
                                <SideRightBottomItemSpan>Livré</SideRightBottomItemSpan>
                            </SideRightBottomItem>

                            <SideRightBottomItem>
                                <Link to="order/1">
                                    <SideRightBottomItemButton>Commentaire</SideRightBottomItemButton>
                                </Link>
                            </SideRightBottomItem>
                        </SideRightBottomList>
                    </SideRightBottomWrap>
                    
                    <SideRightBottomWrap>
                        <SideRightBottomRef>18 févr. 2022 01:42:34  Numéro de commande FDSQGFHTHRS245363563</SideRightBottomRef>
                        <SideRightBottomList>
                            <SideRightBottomItem>
                                <SideRightBottomItemImg src="../img/model.png"/>
                                <SideRightBottomItemNumber>1 Article</SideRightBottomItemNumber>
                            </SideRightBottomItem>

                            <SideRightBottomItem>
                                <SideRightBottomItemSpan>5,00€</SideRightBottomItemSpan>
                            </SideRightBottomItem>

                            <SideRightBottomItem>
                                <SideRightBottomItemSpan>Livré</SideRightBottomItemSpan>
                            </SideRightBottomItem>

                            <SideRightBottomItem>
                                <Link to="order/1">
                                    <SideRightBottomItemButton>Commentaire</SideRightBottomItemButton>
                                </Link>
                            </SideRightBottomItem>
                        </SideRightBottomList>
                    </SideRightBottomWrap>
                </SideRightBottom>
            </SideRight>
        </Body>
    </Container>
  )
}

export default Orders