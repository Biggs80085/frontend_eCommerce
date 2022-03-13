import Popup from "reactjs-popup";
import styled from "styled-components"

const Container = styled.div``;
const Body = styled.div`
    background-color: white;
    display:flex;
    margin-top: 300px;
    
`;
const BodyContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 30px 0;
`;
const BodyTitle = styled.h1``;
const BodyForm = styled.form`
    display:flex;
    flex-direction:column;
    border-right: 1px solid lightgray;
    padding: 60px 150px;
    &>label{
        font-size: 20px;
        color: gray;
        margin-bottom: 5px;
    }
    &>input{
        padding: 10px;
        height:35px;
        width:350px;
        font-size:23px;
        border:1px solid #BEC3CC;
        margin-bottom:30px;
    }
    &>button{
        padding: 10px;
        font-size: 24px;
        font-weight: 600;
        border:none;
        background-color: black;
        color:white;
        height: 60px;
    }
`;

function PopUpCnx() {
  return (
    <Container>
        <Popup trigger={<button>pop-up</button>} position="right center">
            <Body>
                <BodyContainer>
                    <BodyTitle>Connexion</BodyTitle>
                    <BodyForm>
                        <label for="email">E-Mail:</label>
                        <input type="text" name="email" id="email" placeholder="Entrez Votre Email" />
                        <label for="psw">Mot De Passe:</label>
                        <input type="password" name="psw" id="psw" placeholder="Entrez Votre Mot De Passe" />
                        <button>CONNEXION</button>
                    </BodyForm>
                </BodyContainer>
                <BodyContainer>
                    <BodyTitle>Nouveau Client</BodyTitle>
                    <BodyForm style={{border:"none"}} >
                        <label for="email">E-Mail:</label>
                        <input type="text" name="email" id="email" placeholder="Entrez Votre Email" />
                        <label for="psw">Mot De Passe:</label>
                        <input type="password" name="psw" id="psw" placeholder="Entrez Votre Mot De Passe" />
                        <label for="pswC">Confirmer Le Mot De Passe:</label>
                        <input type="password" name="pswC" id="pswC" placeholder="Confirmer Votre Mot De Passe" />
                        <button>S'INSCRIRE</button>
                    </BodyForm>
                </BodyContainer>
            </Body>
        </Popup>
    </Container>
  )
}

export default PopUpCnx