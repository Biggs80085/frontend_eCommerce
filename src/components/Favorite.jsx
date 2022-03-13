import { DeleteOutline } from "@material-ui/icons";
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

`;
const SideRightTitle = styled.h1`
    text-align: center;
`;
const SideRightArticles = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin-top: 100px;
`;
const SideRightArticlesItem = styled.div`
    display:flex;
    flex-direction: column;
    width: 250px;
    margin: 30px 35px;
`;
const SideRightArticlesImg = styled.img`
    height: 300px;
    width: 250px;
`;
const SideRightArticlesItemDiv = styled.div`
    margin-top: 10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;
const SideRightArticlesPrice = styled.span`
    font-size:20px;
    font-weight: 600;
`;
const SideRightArticlesName = styled.span`
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 250px;
    overflow: hidden;
    color:#636364;
    font-size:16px;
    margin-top: 10px;
`;

function Favorite() {
  return (
    <Container>
        <Path>Accueil &nbsp;/&nbsp; Mon Profil</Path>
        <Body>
            <SideProfil/>
            <SideRight>
                <SideRightTitle>MA LISTE D'ENVIE</SideRightTitle>
                <SideRightArticles>
                    <SideRightArticlesItem>
                        <SideRightArticlesImg src="../img/model.png" />
                        <SideRightArticlesName>SHEIN SXY Top court unicolore ajusté &amp; Jupe crayon taille haute</SideRightArticlesName>
                        <SideRightArticlesItemDiv>
                            <SideRightArticlesPrice>15,49€</SideRightArticlesPrice>
                            <DeleteOutline/>
                        </SideRightArticlesItemDiv>
                    </SideRightArticlesItem>

                    <SideRightArticlesItem>
                        <SideRightArticlesImg src="../img/model.png" />
                        <SideRightArticlesName>SHEIN SXY Top court unicolore ajusté &amp; Jupe crayon taille haute</SideRightArticlesName>
                        <SideRightArticlesItemDiv>
                            <SideRightArticlesPrice>15,49€</SideRightArticlesPrice>
                            <DeleteOutline/>
                        </SideRightArticlesItemDiv>
                    </SideRightArticlesItem>

                    <SideRightArticlesItem>
                        <SideRightArticlesImg src="../img/model.png" />
                        <SideRightArticlesName>SHEIN SXY Top court unicolore ajusté &amp; Jupe crayon taille haute</SideRightArticlesName>
                        <SideRightArticlesItemDiv>
                            <SideRightArticlesPrice>15,49€</SideRightArticlesPrice>
                            <DeleteOutline/>
                        </SideRightArticlesItemDiv>
                    </SideRightArticlesItem>

                    <SideRightArticlesItem>
                        <SideRightArticlesImg src="../img/model.png" />
                        <SideRightArticlesName>SHEIN SXY Top court unicolore ajusté &amp; Jupe crayon taille haute</SideRightArticlesName>
                        <SideRightArticlesItemDiv>
                            <SideRightArticlesPrice>15,49€</SideRightArticlesPrice>
                            <DeleteOutline/>
                        </SideRightArticlesItemDiv>
                    </SideRightArticlesItem>

                    <SideRightArticlesItem>
                        <SideRightArticlesImg src="../img/model.png" />
                        <SideRightArticlesName>SHEIN SXY Top court unicolore ajusté &amp; Jupe crayon taille haute</SideRightArticlesName>
                        <SideRightArticlesItemDiv>
                            <SideRightArticlesPrice>15,49€</SideRightArticlesPrice>
                            <DeleteOutline/>
                        </SideRightArticlesItemDiv>
                    </SideRightArticlesItem>
                    
                </SideRightArticles>
            </SideRight>
        </Body>
    </Container>
  )
}

export default Favorite