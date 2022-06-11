import React from 'react'
import styled from "styled-components"
import Header from './Header'
import Register from './Register'

const RegisterAndHeader = () => {
  return (
    <Container>
      <Header/>
      <Register/>
    </Container>
  )
}

export default RegisterAndHeader

const Container = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
min-height: 100vh;
height: 100%;
align-items: center;
`
