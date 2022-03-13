import { Add } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div``;
const PayementList = styled.div`
    display:flex;
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
    height:370px;
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
    font-weight: 600;
    color:white;
    background:black;
    cursor:pointer;
`;
const PayeDiv = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 40px;
    margin-bottom: 20px;
`;
const PayeSpan = styled.span`
    font-size: 18px;
`;
const ListAddress = styled.div`
    margin:90px 0 0 160px;
    padding: 30px;
    height:400px;
    width:1013px;
    background:white;  
`;
const Number = styled.h1`
    font-family:Roboto;
    font-size:31px;
    padding:10px 0 0 40px;
`;
const ListAddressTitle = styled.h1``;
const ListAddressContainer = styled.div`
    padding: 20px 0;
    border-top: 1px solid lightgray;
    display:flex;
    align-items:center;
    justify-content: space-between;
`;
const ListAddressContainerItem = styled.div`
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
const ListAddressContainerItemUser = styled.div`
    margin-top:20px;
`;
const ListAddressContainerItemAddress = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:20px;
    font-size:20px;
`;
const ListAddressContainerItemUsername = styled.span`
    font-size: 24px;
    margin-right: 30px;
`;
const ListAddressContainerItemUserphone = styled.span`
    font-size: 20px;
    color: gray;
`;
const ListAddressContainerItemSpan = styled.span`
    margin-top:10px;
`;
const ListAddressContainerItemEdit = styled.div`
    display:flex;
    justify-content: end;
`;
const ListAddressContainerItemEditButton = styled.button`
    background-color: transparent;
    border:none;
    color: #1E90FF;
    font-size: 18px;
    margin: 50px 0 0 20px;
    cursor:pointer;
`;
const ListAddressContainerButton = styled.button`
    display:flex;
    align-items:center;
    padding: 16px;
    font-size: 20px;
    border: 1px solid black;
    background-color:transparent;
    width:430px;
    cursor: pointer;
    &:hover{
        background-color:gray;
    }
`;

function PayementDelivery() {
  return (
    <Container>
        <Path>Panier &nbsp;<ActualPath>&gt;&nbsp; LIVRAISON </ActualPath>&nbsp;&gt;&nbsp; Payer &nbsp;&gt;&nbsp; CONFIRMATION</Path>
        <PayementList>
            <ListAddress>
                <ListAddressTitle>Adresse De Livraison</ListAddressTitle>
                <ListAddressContainer>
                    <ListAddressContainerItem>
                        <ListAddressContainerItemUser>
                            <ListAddressContainerItemUsername>Hamza Saoulajane</ListAddressContainerItemUsername>
                            <ListAddressContainerItemUserphone>0755102583</ListAddressContainerItemUserphone>
                        </ListAddressContainerItemUser>
                        <ListAddressContainerItemAddress>
                            <ListAddressContainerItemSpan>29 rue au lin Apt 109</ListAddressContainerItemSpan>
                            <ListAddressContainerItemSpan>Amiens France 80000</ListAddressContainerItemSpan>
                        </ListAddressContainerItemAddress>
                        <ListAddressContainerItemEdit>
                            <ListAddressContainerItemEditButton>Modifier</ListAddressContainerItemEditButton>
                        </ListAddressContainerItemEdit>
                    </ListAddressContainerItem>
                    <ListAddressContainerButton> 
                        <Add style={{marginRight:10}}/>
                        AJOUTER UNE NOUVELLE ADRESSE
                    </ListAddressContainerButton>
                </ListAddressContainer>
            </ListAddress>
            <Paye>
                <Number>Résumé De Votre Commande</Number>
                <PayeDiv>
                    <PayeSpan>Subtotal:</PayeSpan>
                    <PayeSpan>15,40€</PayeSpan>
                </PayeDiv>
                <PayeDiv>
                    <PayeSpan>Frais de livraison:</PayeSpan>
                    <PayeSpan>1,60€</PayeSpan>
                </PayeDiv>
                <PayeDiv>
                    <PayeSpan>Totals:</PayeSpan>
                    <PayeSpan style={{ fontSize: 26, fontWeight: 600}}>17,00€</PayeSpan>
                </PayeDiv>
                <Buy>VALIDATION</Buy> {/* changer la couleur en fonction du panier est ce qu'il est vide */}
            </Paye>
        </PayementList>
    </Container>
  )
}

export default PayementDelivery