import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    height:95px;
    background:white;
    box-shadow: 0px 3px 5px lightgray;
    
`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;  
`;
const MenuItem = styled.div`
  font-size: 26px;
  font-family: Roboto;
  font-weight: bold;
  cursor: pointer;
  margin:30px 0 0 60px;
  display:flex;
  align-items:center; 
`;
const Promos = styled.span`
    color:#EC5F70;
`

const Categories = () => {
  return (
    <Container>
        <Wrapper>
          <MenuItem>NOUVEAUTÉ</MenuItem>
          <MenuItem><Promos>PROMOS</Promos></MenuItem>
          <MenuItem>HOMME</MenuItem>
          <MenuItem>FEMME</MenuItem>
          <MenuItem>ENFANT</MenuItem>
          <MenuItem>MARQUES</MenuItem>
        </Wrapper>
    </Container>
  )
}

export default Categories