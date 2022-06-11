import React from "react"
import styled from "styled-components"
import img from "./images/about.jpg"
import {IoIosArrowForward} from "react-icons/io"
const AboutComp = ()=>{
    return(
        <Container>
        <Wrapper>
        <Image src={img}/>
        <RightItems>
        <AboutAndLine>
        <AboutText>About Us</AboutText>
        <Line></Line>
        </AboutAndLine>
        <AboutQuestion>Who we are at Growth Square</AboutQuestion>
        <AboutContent>
        Imagine Warren Buffett when he started trading stocks from 
        age 4 with the assistance from his father. With Growth Square we 
        are creating the right ground for more warren buffets of the world
        through their parents
        </AboutContent>
        <AboutSub>We're a one stop platform that allows parents
            to save and invest for their children and get them financially
            educated fro FREE! We offer the following services:
        </AboutSub>
        <AboutListHolder>
        <AboutAndCircle>
        <Circle></Circle>
        <ListText>Savings</ListText>
        </AboutAndCircle>
        <AboutAndCircle>
        <Circle></Circle>
        <ListText>Investments</ListText>
        </AboutAndCircle>
        <AboutAndCircle>
        <Circle></Circle>
        <ListText>Financial Literacy for kids</ListText>
        </AboutAndCircle>
        </AboutListHolder>
        <LearnButton>
        <LearnText>Learn More</LearnText>
        <Icon/>
        </LearnButton>
        </RightItems>
        </Wrapper>
        </Container>
    )
}

export default AboutComp

const Icon = styled(IoIosArrowForward)`
font-size: 28px;
display:flex;
align-items: center;
@media screen and (max-width: 1375px){
    font-size: 24px;
}
@media screen and (max-width: 1320px){
font-size: 22px;
}
`
const LearnText = styled.div`
font-size: 22px;
font-weight: 500;
margin-right: 15px;
font-family: dm sans;
@media screen and (max-width: 1375px){
    font-size: 18px;
}
@media screen and (max-width: 970px){
    margin-right: 12px;
    font-size: 16px;
}
`
const LearnButton = styled.div`
display: flex;
margin-top: 30px;
color: #1b69ec;
transform: scale(1);
transition: all 350ms;
align-items: center;
cursor: pointer;
:hover{
    transform: scale(0.95);
}
@media screen and (max-width: 1375px){
    margin-top: 20px;
}
@media screen and (max-width: 1320px){
 margin-top: 15px;
}
@media screen and (max-width: 1095px){
    margin-top: 12px;
}
@media screen and (max-width: 970px){
    margin-top: 9px;
}
`
const ListText = styled.div`
font-size: 18px;
font-weight: bold;
font-family: dm sans;
@media screen and (max-width: 1320px){
 font-size: 16px;
}
@media screen and (max-width: 900px){
    font-size: 14px;
}
@media screen and (max-width: 880px){
    font-size: 17px;
}
@media screen and (max-width: 426px){
    font-size: 15px;
}
`
const Circle = styled.div`
width: 18px;
height: 18px;
border-radius: 50%;
background-color: #1b69ec;
border: none;
margin-right: 20px;
@media screen and (max-width: 1320px){
   width: 16px;
   height: 16px;
}
@media screen and (max-width: 900px){
    width: 14px;
    height: 14px;
}
`
const AboutAndCircle = styled.div`
display: flex;
margin-bottom: 20px;
align-items: center;
@media screen and (max-width: 1320px){
   margin-bottom: 15px;
}
@media screen and (max-width: 1095px){
    margin-bottom: 12px;
}
@media screen and (max-width: 900px){
    margin-bottom: 10px;
}
@media screen and (max-width: 880px){
   margin-bottom: 25px;
}
`
const AboutListHolder = styled.div`
display: flex;
flex-direction:column;
`
const AboutSub = styled.div`
margin: 30px 0;
font-family: work sans;
font-weight:450;
font-size: 16px;
@media screen and (max-width: 1375px){
    margin: 25px 0;
}
@media screen and (max-width: 1320px){
    font-size: 15px;
}
@media screen and (max-width: 1095px){
    margin: 20px 0;
}
@media screen and (max-width: 970px){
    font-size: 14px;
    margin: 15px 0;
}
@media screen and (max-width: 880px){
    margin: 30px 0;
    font-size: 15px;
    line-height: 25px;
 }
`
const AboutContent = styled.div`
font-size: 16px;
font-family: work sans;
line-height:25px;
font-weight:450;
letter-spacing: 0.1px;
color: black;
flex-wrap: wrap;
@media screen and (max-width: 1320px){
    font-size: 15px;
}
@media screen and (max-width: 1095px){
    line-height: 23px;
}
@media screen and (max-width: 970px){
    font-size: 14px;
}
@media screen and (max-width: 880px){
    font-size: 15px;
    line-height: 30px;
}
@media screen and (max-width: 426px){
    font-size: 14px;
    line-height: 25px;
}
`
const AboutQuestion = styled.div`
font-size: 40px;
font-family: dm sans;
color: #1b69ec;
margin-top: 20px;
margin-bottom: 30px;
font-weight: 600;
@media screen and (max-width: 1375px){
    font-size: 36px;
    margin-top: 15px;
    margin-bottom: 25px;
}
@media screen and (max-width: 1320px){
    font-size: 34px;
}
@media screen and (max-width: 1095px){
    font-size: 31px;
    margin-top: 10px;
    margin-bottom: 15px;
}
@media screen and (max-width: 970px){
    font-size: 28px;
}
@media screen and (max-width: 880px){
    font-size: 35px;
    margin-top: 20px;
    margin-bottom: 25px;
}
@media screen and (max-width: 450px){
    font-size: 25px;
}
`
const Line = styled.div`
border: solid 0.1px rgb(138,150,160,0.1);
width: 400px;
@media screen and (max-width: 1375px){
    width: 70%;
}
@media screen and (max-width: 1095px){
    width: 60%;
}
@media screen and (max-width: 350px){
width: 55%;
}
`
const AboutText = styled.div`
font-size: 19px;
font-family: dm sans;
color: #8a96a0;
margin-right: 20px;
font-weight: 600;
@media screen and (max-width: 970px){
    font-size: 17px;
   
}
@media screen and (max-width: 880px){
    font-size: 25px;
}
@media screen and (max-width: 450px){
    font-size: 20px;
}
@media screen and (max-width: 350px){
font-size: 16px;
}
`
const AboutAndLine = styled.div`
display: flex;
align-items: center;
width: 100%;
`
const RightItems = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 600px;
@media screen and (max-width: 1375px){
    width: 100%;
}
`
const Image = styled.img`
width: 560px;
height: 530px;
object-fit:cover;
border-radius: 20px;
margin-right: 25px;
@media screen and (max-width: 1425px){
    width: 530px;
    height: 500px;
}
@media screen and (max-width: 1375px){
    width: 500px;
    height: 470px;
}
@media screen and (max-width: 1270px){
width: 480px;
}
@media screen and (max-width: 1095px){
    width: 450px;
}
@media screen and (max-width: 995px){
    width: 420px;
    height: 450px;
}
@media screen and (max-width: 970px){
    width: 410px;
}
@media screen and (max-width: 900px){
   width: 390px;
}
@media screen and (max-width: 880px){
    display: none;
}
`
const Wrapper = styled.div`
height: 100%;
width: 82%;
/* background-color: blue; */
display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
background-color: #ffffff;
width: 100%;
min-height:85vh;
height: 100%auto;
display: flex;
justify-content: center;
margin-top:100px;
margin-bottom: 40px;
@media screen and (max-width: 880px){
    margin-top: 0px;
    height: 60vh;
    height: 100%auto;
}
@media screen and (max-width: 450px){
    margin-top: 40px;
}
@media screen and (max-width: 370px){
    margin-top: 50px;
    margin-bottom: 60px;
}
`