import { Star } from "@material-ui/icons";
import styled from "styled-components";

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
    padding: 20px;
    margin: auto;
`;
const BodyItem = styled.div`
    display:flex;
    padding:20px;
    border-bottom: 1px solid lightgray;
    margin-top: 50px;
`;
const BodyItemLeft = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    margin-right: 40px;
`;
const BodyItemRight = styled.div`
    display:flex;
    flex-direction: column;
    flex:3;
`;
const BodyItemLeftImg = styled.img`
    height:250px;
`;
const BodyItemLeftSpan = styled.span`
    font-size: 20px;
    margin-top: 10px;
`;
const BodyItemRightNotation = styled.div`
    display:flex;

    align-items:center;
`;
const BodyItemRightNotationSpan = styled.span`
    font-size: 24px;
    font-weight: 600;
    margin: 30px;
`;
const BodyItemRightNotationStars = styled.ul`
    display:flex;
    list-style: none;
    color: #FAEA25;
`;
const BodyItemRightNotationComment = styled.div`
    display:flex;
    margin:30px;
    &>label{
        font-size:24px;
        font-weight: 600;
        margin-right: 30px;
    }
    &>textarea{
        flex:1;
        height:150px;
        resize:none;
        border: 1px solid lightgray;
        font-size: 20px;
        padding: 10px;
        width: 850px;
    }
`;
const BodyButton = styled.button`
    padding: 20px;
    font-size: 26px;
    font-weight: 600;
    background-color: black;
    border:none;
    color:white;
    width: 450px;
    margin: 50px 0 50px 450px;
`;


function OrderItems() {
  return (
    <Container>
        <Path>Accueil &nbsp;/&nbsp; Mes Commandes &nbsp;/&nbsp; Note</Path>
        <Body>
            <BodyItem>
                <BodyItemLeft>
                    <BodyItemLeftImg src="../img/model.png" />
                    <BodyItemLeftSpan>T-shirt à motif slogan </BodyItemLeftSpan>
                    <BodyItemLeftSpan>Noir / L</BodyItemLeftSpan>
                    <BodyItemLeftSpan>Quantité(s): 1</BodyItemLeftSpan>
                </BodyItemLeft>
                <BodyItemRight>
                    <BodyItemRightNotation>
                        <BodyItemRightNotationSpan>Notation</BodyItemRightNotationSpan>
                        <BodyItemRightNotationStars>
                            <li><Star style={{ fontSize:35}} /></li>
                            <li><Star style={{ fontSize:35}} /></li>
                            <li><Star style={{ fontSize:35}} /></li>
                            <li><Star style={{ fontSize:35}} /></li>
                            <li><Star style={{ fontSize:35}} /></li>
                        </BodyItemRightNotationStars>
                        <BodyItemRightNotationSpan>Trés satisfait</BodyItemRightNotationSpan>
                    </BodyItemRightNotation>
                    <BodyItemRightNotationComment>
                            <label for="comment">Commentaire</label>
                            <textarea name="comment" id="comment" placeholder="Commentez avec plus de 10 caractères."></textarea>
                        </BodyItemRightNotationComment>
                </BodyItemRight>
            </BodyItem>

            <BodyItem>
                <BodyItemLeft>
                    <BodyItemLeftImg src="../img/model.png" />
                    <BodyItemLeftSpan>T-shirt à motif slogan </BodyItemLeftSpan>
                    <BodyItemLeftSpan>Noir / L</BodyItemLeftSpan>
                    <BodyItemLeftSpan>Quantité(s): 1</BodyItemLeftSpan>
                </BodyItemLeft>
                <BodyItemRight>
                    <BodyItemRightNotation>
                        <BodyItemRightNotationSpan>Notation</BodyItemRightNotationSpan>
                        <BodyItemRightNotationStars>
                            <li><Star style={{ fontSize:35}} /></li>
                            <li><Star style={{ fontSize:35}} /></li>
                            <li><Star style={{ fontSize:35}} /></li>
                            <li><Star style={{ fontSize:35}} /></li>
                            <li><Star style={{ fontSize:35}} /></li>
                        </BodyItemRightNotationStars>
                        <BodyItemRightNotationSpan>Trés satisfait</BodyItemRightNotationSpan>
                    </BodyItemRightNotation>
                    <BodyItemRightNotationComment>
                            <label for="comment">Commentaire</label>
                            <textarea name="comment" id="comment" placeholder="Commentez avec plus de 10 caractères."></textarea>
                        </BodyItemRightNotationComment>
                </BodyItemRight>
            </BodyItem>
            <BodyButton>SOUMETTRE</BodyButton>
        </Body>
    </Container>
  )
}

export default OrderItems