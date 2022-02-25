import React from 'react'
import styled from 'styled-components'


const Container = styled.div``;
const Path = styled.p`
    font-size:20px;
    margin:30px 0 0 60px;
    font-family:Roboto;
    color:#636364;
`;
const ActualPath = styled.span`
    color:black;
    font-weight:bold;
`;
const Form = styled.form`
    width:85%;
    margin:0 0 100px 7.5%;
`;
const Title = styled.h1`
    font-size:35px;
    font-family:Roboto;
    weight:bold;
`;
const Lign = styled.hr`
    margin-top:30px;
    border: none;
    border-top: 2px solid #636364;
`;
const Civility = styled.div`
    display:flex;
    font-size:20px;
    font-family:Roboto;
`;
const Radio = styled.input`
    margin: 24px 0 0 30px;
    width: 20px;
    height: 20px;
`;
const RadioLabel = styled.label`
    margin: 20px 0 0 10px;  
`;
const GlobalInput = styled.div`
    flex-direction: column;
    font-size:20px;
    font-family:Roboto;
    width:550px;
    margin:30px 70px 0 0;
`;
const InputLabel = styled.label`

`;
const Input = styled.input`
    margin-top:10px;
    padding: 0 20px;
    height:50px;
    width:500px;
    font-size:20px;
    border: 1px solid #BEC3CC;
`;
const Information = styled.div`
    display:flex;
    flex-wrap: wrap;
`;
const Remark = styled.p`
    margin:0;
    font-size:15px;
    font-family:Roboto;
    color:#BEC3CC;
`;
const Valide = styled.button`
    margin-top: 60px;
    font-size:23px;
    font-family:Roboto;
    height:65px;
    width:345px;
    background:black;
    color:white;
    border:none;
`;

function Register() {
  return (
    <Container>
       <Path>Accueil &nbsp;/&nbsp; Mon compte &nbsp;/&nbsp; <ActualPath>Données personnelles</ActualPath></Path>
       <Form>
            <Title>CRÉER UN COMTPE</Title>
            <Lign/>
            <Civility>
                <p>Civilité*</p>
                <Radio type={'radio'} id={'man'} name={'check'} value={'man'}/>
                <RadioLabel for="man">Monsieur</RadioLabel>
                <Radio type={'radio'} id={'woman'} name={'check'} value={'woman'}/>
                <RadioLabel for="woman">Madame</RadioLabel>
            </Civility>
            <Information>
                <GlobalInput>
                    <InputLabel for={'firstname'}>Nom*</InputLabel>
                    <Input type={'text'} id={'firstname'} placeholder={'Votre nom'}/>
                </GlobalInput>
                <GlobalInput>
                    <InputLabel for={'lastname'}>Prénom*</InputLabel>
                    <Input type={'text'} id={'lastname'} placeholder={'Votre prénom'}/>
                </GlobalInput>
                <GlobalInput>
                    <InputLabel for={'email'}>E-mail*</InputLabel>
                    <Input type={'email'} id={'email'} placeholder={'Votre email'}/>
                </GlobalInput>
                <GlobalInput>
                    <InputLabel for={'pw'}>Mot de passe*</InputLabel>
                    <Input type={'password'} id={'pw'} placeholder={'Votre mot de passe'}/>
                    <Remark>Votre mot de passe doit contenir 8 caractères minimum dont une majuscule,
                    une minuscule et un chiffre.</Remark>
                </GlobalInput>
                <GlobalInput>
                    <InputLabel for={'date'}>Date de naissance*</InputLabel>
                    <Input type={'date'} id={'date'}/>
                </GlobalInput>
                <GlobalInput>
                    <InputLabel for={'telephone'}>N° de téléphone mobile*</InputLabel>
                    <Input type={'text'} id={'telephone'} placeholder={'0612345678'}/>
                    <Remark>Exemple: 0612345678</Remark>
                </GlobalInput>
                <GlobalInput>
                    <InputLabel for={'pays'}>Pays*</InputLabel>
                    <Input type={'text'} id={'pays'} placeholder={'France'}/> {/* A voir apres pour le type*/}
                </GlobalInput>
                <GlobalInput/>
                <GlobalInput>
                    <InputLabel for={'cp'}>Code postal*</InputLabel>
                    <Input type={'text'} id={'cp'} placeholder={'75002'}/>
                </GlobalInput>
                <GlobalInput>
                    <InputLabel for={'ville'}>Ville*</InputLabel>
                    <Input type={'text'} id={'ville'} placeholder={'Paris'}/>
                </GlobalInput>
                <GlobalInput>
                    <InputLabel for={'adresse'}>Adresse*</InputLabel>
                    <Input type={'text'} id={'adresse'} placeholder={'1 rue de la paix'}/>
                </GlobalInput>
                <GlobalInput>
                    <InputLabel for={'complement'}>Complément d’adresse*</InputLabel>
                    <Input type={'text'} id={'complement'} placeholder={'Appartement, bâtiment, étage'}/>
                </GlobalInput>
            </Information>
            <Valide>JE CRÉE UN COMPTE</Valide>
       </Form>
    </Container>
  )
}

export default Register