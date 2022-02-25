import React from 'react'
import styled from 'styled-components'
import Categories from './Categories'
import Header from './Header'

const Container = styled.div`
    height: 215px;
`


const NavBar = () => {
  return (
    <Container>
        <Header></Header>
        <Categories></Categories>
    </Container>
  )
}

export default NavBar