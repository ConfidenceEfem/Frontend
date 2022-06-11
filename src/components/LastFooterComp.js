import React from "react"
import styled from "styled-components"

const LastFooterComp = () => {
    return (
        <Container>
            <Wrapper>
                <IconHolder>
                    <IconButton>Create A Web Account</IconButton>
                </IconHolder>
                <TermsAndCondition>
                    <LicensedText>Growthsquare Financial Technology Limited is licensed
                        by the securities and Exchange Commission (SEC) of Nigeria
                    </LicensedText>
                    <ProductionText>© 2022 Growthsquare Financial Technology, All rights
                        reserverd.
                    </ProductionText>
                </TermsAndCondition>
            </Wrapper>
        </Container>
    )
}

export default LastFooterComp

const Icon = styled.img`
width: 140px;
height: 40px;
object-fit: contain;
margin: 10px 0;

@media screen and (max-width: 450px){
    width: 120px;
    height: 30px;
}
@media screen and (max-width: 415px){
    width: 90px;
    height: 25px;
}

`
const ProductionText = styled.div``
const DownloadText = styled.div`
margin: 20px 0;
line-height: 28px;
`
const LicensedText = styled.div`
line-height: 28px;
`
const TermsAndCondition = styled.div`
font-size: 16px;
color: gray;
width: 75%;
line-height: 28px;
@media screen and (max-width: 600px){
    margin-bottom: 20px;
    font-size: 14px;
}
`
const IconButton = styled.div`
font-size: 12px;
color: white;
background-color: #1b69ec;
padding: 15px 30px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 350ms;
:hover{
    transform: scale(1.02);
}
@media screen and (max-width: 450px){
    width: 100px;
    height: 30px;
}
@media screen and (max-width: 415px){
        width: 80px;
        height: 25px;
        font-size: 9px;
        border-radius: 3px;
}
`
const IconHolder = styled.div`
display: flex;
margin-bottom: 50px;
align-items: center;
@media screen and (max-width: 450px){
    flex-wrap: wrap;
    margin-bottom: 20px;
}
@media screen and (max-width: 415px){
    
}
`
const Wrapper = styled.div`
width: 82%;
display: flex;
margin-top :20px;
flex-direction: column;

`

const Container = styled.div`
width: 100%;
display: flex;
min-height: 45vh;
height: 100%;
justify-content: center;
font-family: work sans;
@media screen and (max-width: 1000px){
    margin-bottom: 50px;
}

`