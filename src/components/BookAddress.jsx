import { Add } from "@material-ui/icons";
import styled from "styled-components"
import SideProfil from "./SideProfil";
import Popup from 'reactjs-popup';

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
const SideRightButton = styled.button`
    margin-top: 80px;
    display:flex;
    align-items:center;
    padding: 16px;
    font-size: 20px;
    color: white;
    background-color: black;
    border: none;
    width:430px;
    cursor: pointer;
    &:hover{
        background-color:gray;
    }
`;
const SideRightAddress = styled.div`
    margin-top: 20px;
    display:flex;
    flex-wrap: wrap;
`;
const SideRightAddressItem = styled.div`
    border: 1px solid lightgray;
    border-left:5px dashed blue;
    width: 420px;
    padding: 20px;
    margin: 20px 10px 0 0;
    &:hover{
        transform: scale(1.05);
        border-color: black;
    }
`;
const SideRightAddressItemUser = styled.div`
    margin-top:20px;
`;
const SideRightAddressItemAddress = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:20px;
    font-size:20px;
`;
const SideRightAddressItemUsername = styled.span`
    font-size: 24px;
    margin-right: 30px;
`;
const SideRightAddressItemUserphone = styled.span`
    font-size: 20px;
    color: gray;
`;
const SideRightAddressItemSpan = styled.span`
    margin-top:10px;
`;
const SideRightAddressItemEdit = styled.div`
    display:flex;
    justify-content: end;
`;
const SideRightAddressItemEditButton = styled.button`
    background-color: transparent;
    border:none;
    color: #1E90FF;
    font-size: 18px;
    margin: 50px 0 0 20px;
    cursor:pointer;
`;
const PopUpContainer = styled.div`
    margin: 400px 0 0 -600px;
    width: 950px;
    background-color: white;
    padding: 20px 50px;
`;
const PopUpTitle = styled.h1`
    font-size:40px;
`;
const PopUpForm = styled.form`
    border-top: 1px solid lightgray;
    padding-top: 20px;
    display:flex;
    flex-wrap:wrap;
`;
const PopUpInputLg = styled.div`
    display:flex;
    flex-direction: column;
    margin:10px 10px;
    border: 1px solid #636364;
    padding: 5px 10px;
    width:900px;
    &>label{
        font-size: 20px;
        color: gray;
    }
    &>input{
        padding: 5px;
        border:none;
        font-size:20px;
    }
    &>input:focus{
        outline:none;
    }
`;
const PopUpInputSm = styled.div`
    display:flex;
    flex-direction: column;
    margin:10px 10px;
    border: 1px solid #636364;
    padding: 5px 10px;
    width: 430px;
    &>label{
        font-size: 20px;
        color: gray;
    }
    &>input{
        padding: 5px;
        border:none;
        font-size:20px;
    }
    &>input:focus{
        outline:none;
    }
`;
const PopUpButton = styled.button`
    padding: 20px;
    font-size: 20px;
    color: white;
    background-color: black;
    border:none;
    font-weight: 600;
    width: 250px;
    margin: 40px 0 20px 350px;
    cursor: pointer;
`;

function BookAddress() {
  return (
    <Container>
        <Path>Accueil &nbsp;/&nbsp; Mon Carnet d'adresses</Path>
        <Body>
            <SideProfil/>
            <SideRight>
                <SideRightTitle>CARNET D'ADRESSES</SideRightTitle>
                <Popup trigger={<SideRightButton> 
                                    <Add style={{marginRight:10}}/>
                                    AJOUTER UNE NOUVELLE ADRESSE
                                </SideRightButton>} 
                        position="right center">
                    <PopUpContainer>
                        <PopUpTitle>Adresse de livraison</PopUpTitle>
                        <PopUpForm>
                            <PopUpInputSm>
                                <label for="pays">*Pays/Région</label>
                                <input type="text" name="pays" id="pays" placeholder="France" /> {/** A voir apres si on va faire une liste des pays */}
                            </PopUpInputSm>
                            <div style={{width:30}} />
                            <PopUpInputSm>
                                <label for="prenom">*Prénom</label>
                                <input type="text" name="prenom" id="prenom" placeholder="Entrez Votre Prénom" />
                            </PopUpInputSm>
                            <PopUpInputSm>
                                <label for="nom">*Nom</label>
                                <input type="text" name="nom" id="nom" placeholder="Entrez Votre Nom" />
                            </PopUpInputSm>
                            <PopUpInputLg>
                                <label for="tel">*Numéro de téléphone</label>
                                <input type="text" name="tel" id="tel" placeholder="Entrez Votre Numéro de tétéphone" />
                            </PopUpInputLg>
                            <PopUpInputLg>
                                <label for="Adresse">*Ligne 1 d'Adresse</label>
                                <input type="text" name="Adresse" id="Adresse" placeholder="Entrez Votre Adresse" />
                            </PopUpInputLg>
                            <PopUpInputLg>
                                <label for="AdresseC">Ligne 2 d'Adresse</label>
                                <input type="text" name="AdresseC" id="AdresseC" placeholder="Entrez étage, apt, etc" />
                            </PopUpInputLg>
                            <PopUpInputLg>
                                <label for="cp">*Code Postal</label>
                                <input type="text" name="cp" id="cp" placeholder="Entrez Votre code postal" />
                            </PopUpInputLg>
                            <PopUpInputSm>
                                <label for="etat">*État/Province</label>
                                <input type="text" name="etat" id="etat" placeholder="Haut-de-France" />
                            </PopUpInputSm>
                            <PopUpInputSm>
                                <label for="ville">*Ville</label>
                                <input type="text" name="ville" id="ville" placeholder="Amiens" />
                            </PopUpInputSm>
                            <PopUpButton>CONSERVER</PopUpButton>
                        </PopUpForm>
                    </PopUpContainer>
                </Popup>
                <SideRightAddress>
                    <SideRightAddressItem>
                        <SideRightAddressItemUser>
                            <SideRightAddressItemUsername>Hamza Saoulajane</SideRightAddressItemUsername>
                            <SideRightAddressItemUserphone>0755102583</SideRightAddressItemUserphone>
                        </SideRightAddressItemUser>
                        <SideRightAddressItemAddress>
                            <SideRightAddressItemSpan>29 rue au lin Apt 109</SideRightAddressItemSpan>
                            <SideRightAddressItemSpan>Amiens France 80000</SideRightAddressItemSpan>
                        </SideRightAddressItemAddress>
                        <SideRightAddressItemEdit>
                            <SideRightAddressItemEditButton>Effacer</SideRightAddressItemEditButton>
                            <SideRightAddressItemEditButton>Modifier</SideRightAddressItemEditButton>
                        </SideRightAddressItemEdit>
                    </SideRightAddressItem>

                    <SideRightAddressItem>
                        <SideRightAddressItemUser>
                            <SideRightAddressItemUsername>Hamza Saoulajane</SideRightAddressItemUsername>
                            <SideRightAddressItemUserphone>0755102583</SideRightAddressItemUserphone>
                        </SideRightAddressItemUser>
                        <SideRightAddressItemAddress>
                            <SideRightAddressItemSpan>29 rue au lin Apt 109</SideRightAddressItemSpan>
                            <SideRightAddressItemSpan>Amiens France 80000</SideRightAddressItemSpan>
                        </SideRightAddressItemAddress>
                        <SideRightAddressItemEdit>
                            <SideRightAddressItemEditButton>Effacer</SideRightAddressItemEditButton>
                            <SideRightAddressItemEditButton>Modifier</SideRightAddressItemEditButton>
                        </SideRightAddressItemEdit>
                    </SideRightAddressItem>

                    <SideRightAddressItem>
                        <SideRightAddressItemUser>
                            <SideRightAddressItemUsername>Hamza Saoulajane</SideRightAddressItemUsername>
                            <SideRightAddressItemUserphone>0755102583</SideRightAddressItemUserphone>
                        </SideRightAddressItemUser>
                        <SideRightAddressItemAddress>
                            <SideRightAddressItemSpan>29 rue au lin Apt 109</SideRightAddressItemSpan>
                            <SideRightAddressItemSpan>Amiens France 80000</SideRightAddressItemSpan>
                        </SideRightAddressItemAddress>
                        <SideRightAddressItemEdit>
                            <SideRightAddressItemEditButton>Effacer</SideRightAddressItemEditButton>
                            <SideRightAddressItemEditButton>Modifier</SideRightAddressItemEditButton>
                        </SideRightAddressItemEdit>
                    </SideRightAddressItem>
                </SideRightAddress>
            </SideRight>
        </Body>

        {/* PopUp */}

            
    </Container>
  )
}

export default BookAddress