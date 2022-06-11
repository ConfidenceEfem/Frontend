import React from 'react'
import styled from "styled-components"
import Header from './Header'
import Login from './Login'

const LoginAndHeader = () => {
  return (
    <Container>
      <Header/>
      <Login/>
    </Container>
  )
}

export default LoginAndHeader

const Container = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
min-height: 100vh;
height: 100%;
align-items: center;
`
