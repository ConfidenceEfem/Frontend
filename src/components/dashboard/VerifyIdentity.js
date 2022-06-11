import React from 'react'
import styled from "styled-components"
import {FiArrowRight} from "react-icons/fi"

const VerifyIdentity = () => {
  return (
    <Container>
      <Wrapper>
          <DetailsAndIcon>
              <Icon/>
              <Details>
                  <HeadDtail>Verify Your Identity</HeadDtail>
                  <DetailSub>Help us verify who you are in a few simple steps</DetailSub>
              </Details>
          </DetailsAndIcon>
          <ArrowIcon/>
      </Wrapper>
    </Container>
  )
}

export default VerifyIdentity

const ArrowIcon = styled(FiArrowRight)`
color: #1b69ec;
font-size: 22px;
cursor: pointer;
`
const DetailSub = styled.div`
font-size: 13px;
`

const HeadDtail = styled.div`
font-size: 20px;
font-weight: 500;
`

const Details = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
height: 80%;
`

const Icon = styled.img`
width: 50px;
height: 50px;
object-fit: cover;
margin-right: 30px;
`

const DetailsAndIcon = styled.div`
display: flex;
align-items: center;
height: 100%;
`

const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
height: 80%;
/* align-items: center; */
`
const Container = styled.div`
width: 100%;
height: 100px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
background: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
margin: 35px 0;

`
