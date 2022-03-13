import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    background-color: white;
    height: 300px;
`;
const SideLeftTitle = styled.h1`
    margin:30px 40px; 
`;
const SideLeftNav = styled.ul`
    list-style: none;
    font-size: 24px;
    color: #636364;
`;
const SideLeftNavItem = styled.li`
    margin-top: 20px;
`;
const StyleLink = styled(Link)`
    text-decoration:none;
    color:inherit;
`;


function SideProfil() {
  return (
    <Container>
        <SideLeftTitle>Mon Compte</SideLeftTitle>
        <SideLeftNav>
            <StyleLink to="/profil">
                <SideLeftNavItem>Mon Profil</SideLeftNavItem>
            </StyleLink>
            <StyleLink to="/orders">
                <SideLeftNavItem>Mes Commandes</SideLeftNavItem>
            </StyleLink>
            <StyleLink to="/bookAddress">
                <SideLeftNavItem>Mon carnet d'adresses</SideLeftNavItem>
            </StyleLink>
            <StyleLink to="/favorite">
                <SideLeftNavItem>Mes Favories</SideLeftNavItem>
            </StyleLink>
        </SideLeftNav>
    </Container>
  )
}

export default SideProfil