import { useState } from "react";
import styled from "styled-components";
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
const SideRightInfo = styled.div`
    border-bottom: 1px solid #636364;
    padding: 35px 0;
`;
const SideRightInfoEdit = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
`;
const SideRightInfoEditLeft = styled.div``;
const SideRightInfoEditRight = styled.div``;
const SideRightInfoEditTitle = styled.h2``;
const SideRightInfoEditText = styled.span`
    font-size: 24px;
    color: #636364;
`;
const SideRightInfoEditButton = styled.button`
    padding: 10px;
    font-weight: 600;
    width: 200px;
    font-size: 20px;
    background-color: transparent;
    &:hover{
        background-color: lightgray;
    }
`;
const SideRightInfoFormEmail = styled.form`
    margin-top: 30px;
    display:${ props => !props.active ? "none" : "flex" };
    flex-direction: column;
    width: 300px;
    &>label{
        color: #636364;
        font-size: 18px;
        margin: 10px 0;
    }
    &>input{
        padding:10px;
    }
`;
const SideRightInfoFormPw = styled.form`
    margin-top: 30px;
    display:${ props => !props.active ? "none" : "flex" };
    flex-direction: column;
    width: 300px;
    &>label{
        color: #636364;
        font-size: 18px;
        margin: 10px 0;
    }
    &>input{
        padding:10px;
    }
`;
const SideRightInfoControl = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 20px;
`;
const SideRightInfoCancel = styled.button`
    padding: 10px;
    width: 140px;
    font-size: 20px;
    font-weight: 600;
    background-color: white;
    border:1px solid black;
    &:hover{
        background-color: lightgray;
    }
`;
const SideRightInfoConfirm = styled.button`
    padding: 10px;
    width: 140px;
    font-size: 20px;
    font-weight: 600;
    border:none;
    color: white;
    background-color: black;
    &:hover{
        background-color: gray;
    }
`;


function Profil() {

    const [showEmail, setShowEmail] = useState(false);
    const [showPw, setShowPw] = useState(false);

  return (
    <Container>
        <Path>Accueil &nbsp;/&nbsp; Mon Profil</Path>
        <Body>
            <SideProfil/>
            <SideRight>
                <SideRightTitle>MON PROFIL</SideRightTitle>
                <SideRightInfo>
                    <SideRightInfoEdit>
                        <SideRightInfoEditLeft>
                            <SideRightInfoEditTitle>Modifier Votre E-Mail</SideRightInfoEditTitle>
                            <SideRightInfoEditText>hamzasaoulajane9@gmail.com</SideRightInfoEditText>
                        </SideRightInfoEditLeft>
                        <SideRightInfoEditRight>
                            <SideRightInfoEditButton onClick={setShowEmail}>Modifier</SideRightInfoEditButton>
                        </SideRightInfoEditRight>
                    </SideRightInfoEdit>
                    <SideRightInfoFormEmail active={showEmail}>
                            <label for="email">Nouveau E-mail</label>
                            <input type="email" name="email" id="email" placeholder="Entrez un email"/>
                            
                            <label for="emailC">Confirmer l'E-mail</label>
                            <input type="email" name="emailC" id="emailC" placeholder="Entrez le même email"/>
                            <SideRightInfoControl>
                                <SideRightInfoCancel>Annuler</SideRightInfoCancel>
                                <SideRightInfoConfirm>Confirmer</SideRightInfoConfirm>
                            </SideRightInfoControl>
                    </SideRightInfoFormEmail>
                </SideRightInfo>
                
                <SideRightInfo>
                    <SideRightInfoEdit>
                        <SideRightInfoEditLeft>
                            <SideRightInfoEditTitle>Modifier Votre Mot de passe</SideRightInfoEditTitle>
                            <SideRightInfoEditText>********</SideRightInfoEditText>
                        </SideRightInfoEditLeft>
                        <SideRightInfoEditRight>
                            <SideRightInfoEditButton onClick={setShowPw}>Modifier</SideRightInfoEditButton>
                        </SideRightInfoEditRight>
                    </SideRightInfoEdit>
                    <SideRightInfoFormPw active={showPw}>
                            <label for="Amdp">Ancien Mot De Passe</label>
                            <input type="password" name="Amdp" id="Amdp"/>
                            
                            <label for="mdp">Mot De Passe</label>
                            <input type="password" name="mdp" id="mdp"/>

                            <label for="Cmdp">Confirmer Le Mot De Passe</label>
                            <input type="password" name="Cmdp" id="Cmdp"/>

                            {/* l'icone de visibility a faire ne pas oublier*/}
                            <SideRightInfoControl>
                                <SideRightInfoCancel>Annuler</SideRightInfoCancel>
                                <SideRightInfoConfirm>Confirmer</SideRightInfoConfirm>
                            </SideRightInfoControl>
                    </SideRightInfoFormPw>
                </SideRightInfo>
            </SideRight>
        </Body>
    </Container>
  )
}

export default Profil