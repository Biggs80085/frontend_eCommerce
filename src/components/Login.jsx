import React from 'react'
import styled from 'styled-components'
import {Visibility} from "@material-ui/icons";

const Container = styled.div`
   display:flex;
`;
const Form = styled.form`
    width:50%;   
    display:flex;
    flex-direction: column;
`;

const ImageBackground = styled.img`
    height:963px;
    width:50%;  
`;
const Title = styled.h1`
    font-size:35px;
    font-family:Roboto;
    text-align:center;
    margin-top:150px;
`;
const Input = styled.input`
    margin: 20px 0 0 32%;
    padding:0 30px 0 30px;
    height:65px;
    width:285px;
    font-size:23px;
    border:1px solid #BEC3CC;
`;
const Forgot = styled.a`
    font-family:Roboto;
    font-size:14px;
    text-decoration: underline;
    color:#626161;
    margin:5px 0 0 520px;
`
const Connect = styled.button`
    margin: 20px 0 0 32%;
    font-size:23px;
    font-family:Roboto;
    height:65px;
    width:345px;
    background:black;
    color:white;
    border:none;
`;
const Or = styled.hr`
    margin: 40px 0 0 350px;
    border: none;
    border-top: 1px solid #BEC3CC;
    color: #BEC3CC;
    overflow: visible;
    text-align: center;
    height: 5px;
    width:245px;

    &:after{
        background: #F7F8FA;
        content: 'ou';
        padding: 0 4px;
        position: relative;
        top: -13px;
        padding:0 25px 0 25px;
    }
`;
const Register = styled.a`
    margin: 30px 0 0 32%;
    font-size:23px;
    font-family:Roboto;
    height:45px;
    width:345px;
    border:1px solid black;
    text-align:center;
    padding-top:15px;
`;
function Login() {
  return (
    <Container>
        <Form>
            <Title>J'AI DÉJÀ UN COMPTE</Title>
            <Input type={'email'} placeholder='Votre email'/>
            <Input type={'password'} placeholder='Votre mot de passe'/>
            {/*<Visibility style={{ fontSize: 30, color:'#636364'}}/>*/}
            <Forgot>Mot de passe oublié?</Forgot>
            <Connect>SE CONNECTER</Connect>
            <Or/>
            <Register>JE CRÉE UN COMPTE</Register>
        </Form>
        <ImageBackground src="./img/registerImg.png"/>
    </Container>
  )
}

export default Login