import { Badge } from "@material-ui/core";
import {FavoriteBorder, PersonOutline, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react'
import styled from 'styled-components'

const colorIcon = '#636364';
const mainColor='#F7F8FA';
const Container = styled.div`
    background:${mainColor};
    height:120px;
`;
const Wrapper = styled.div`
  margin-top:-10px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  align-items: center;
`;

const SearchContainer = styled.div`
  box-shadow: inset 0px 0em 1em lightgray;
  height:60px;
  width:430px;
  margin-left: 100px;
  display:flex;
  align-items:center;
`;

const Input = styled.input`
    background:transparent;
    padding-left:10px;
    font-size:26px;
    height:60px;
    width:370px;
    border: none;
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.img`
    margin-left:33px;
    height:120px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 26px;
  color: ${colorIcon};
  cursor: pointer;
  margin-left: 25px;
  display:flex;
  align-items:center;
  
`;

const Language = styled.span`
  font-size: 26px;
  cursor: pointer;
  margin-left: 25px;
  color: ${colorIcon};
`;

const Header = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
          <Logo src="./img/logo.png" />
        </Left>
        <Center>
          <SearchContainer >
            <Input placeholder="Search here..."/>
            <Search style={{fontSize:40}} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem><PersonOutline style={{ fontSize: 50, color: colorIcon }} />Mon compte</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined style={{ fontSize: 40, color: colorIcon }}/>
            </Badge>
            Mon panier
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
                <FavoriteBorder style={{ fontSize: 45, color: colorIcon }}/>
            </Badge>
          </MenuItem>
          <Language>FR</Language>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Header