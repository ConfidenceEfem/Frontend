import React from "react"
import styled from "styled-components"
import {HiOutlineDotsVertical} from "react-icons/hi"
import {FiPlus} from "react-icons/fi"
import {BsFillBarChartFill,BsBarChartFill} from "react-icons/bs"
import {FaPiggyBank} from "react-icons/fa"
import avatar from "../images/avatar.png"
import {Link} from "react-router-dom"
import VerifyIdentity from "./VerifyIdentity"
import { Img, Plus } from "../Icon"


const DashBoardWelcome = () => {
  return (
    <Container>
            <Wrapper>
                <FirstPart>
                <WelcomeName>Welcome Chioma!</WelcomeName>
                <InvestTextAndButton>
                    <InvestText>Your Investments and Savings are booming</InvestText>
                    <AddAccountButton to="/addchild">Add New Account</AddAccountButton>
                </InvestTextAndButton>
                </FirstPart>
                <ChartCardHolder>
                    <ChartCard bg="#1b69ec">
                        <CardWrapper>
                        <CardHeading>
                        <Circle bg="rgba(255, 255, 255, 0.1)" >
                           <CircleIcon/>
                        </Circle>
                        <DotIcon color={"white"}/>
                        </CardHeading>
                        <Headings cl="white">Total Savings</Headings>
                        <Amount cl="white">₦0.00</Amount>
                        </CardWrapper>
                    </ChartCard>
                    <ChartCard bg="#ffffff">
                        <CardWrapper>
                        <CardHeading>
                        <Circle bg="#edf5f2" >
                           <CircleIcon1/>
                        </Circle>
                        <DotIcon color={"black"}/>
                        </CardHeading>
                        <Headings cl="black">Total Investment</Headings>
                        <Amount cl="black">₦0.00</Amount>
                        </CardWrapper>
                    </ChartCard>
                    <ChartCard bg="#ffffff">
                        <CardWrapper>
                        <CardHeading>
                        <Circle bg="rgba(27, 105, 236, 0.1);" style={{color: "#1b69ec"}}>
                           0%
                        </Circle>
                        <DotIcon color={"black"}/>
                        </CardHeading>
                        <Headings cl="black">Growth (Interests + Profits)</Headings>
                        <Amount cl="black">₦0.00</Amount>
                        </CardWrapper>
                    </ChartCard> 
                </ChartCardHolder>
                <VerifyIdentity/>
                <ChildrensAndTransactionHolder>
                    <ChildrensAccountHolder>
                        <ChildrenWrapper>
                            <ChildrenHeading>Transaction History</ChildrenHeading>
                                 <TransactionBody>
                                     <BodyItems>
                                         <Img/>
                                         <BodyHead>No History Made Yet!</BodyHead>
                                         <IconDetail>You have not made any transaction yet. 
                                             Carry out <br/>transaction to get started</IconDetail>
                                     </BodyItems>
                                </TransactionBody>                 
                        </ChildrenWrapper>
                    </ChildrensAccountHolder>
                    <TransactionHolder>
                        <TransactionWrapper>
                            <TransactionHeading>
                                <TransHeading>Children's Account</TransHeading>                            </TransactionHeading>
                            <TransactionBody>
                                <BodyItems>
                                    <Img/>
                                    <BodyHead>No Children's Account Here</BodyHead>
                                    <IconDetail>To start saving and investing for your wards,
                                         add <br/> an account for them</IconDetail>
                                         <AddNewAccount>
                                             <Plus/>
                                             <Add> Add New Account</Add>
                                         </AddNewAccount>
                                </BodyItems>   
                            
                            </TransactionBody>
                        </TransactionWrapper>
                    </TransactionHolder>
                </ChildrensAndTransactionHolder>
            </Wrapper>
        </Container>
  )
}

export default DashBoardWelcome


const Add = styled.div`
font-size: 14px;
margin-left: 10px;
`

const AddNewAccount = styled.div`
padding: 12px 20px;
font-weight: 500;
background: #1b69ec;
cursor: pointer;
border-radius: 3px;
transition: all 350ms;
color: white;
display: flex;
align-items: center;

:hover{
    transform: scale(1.02)
}
`
const IconDetail = styled.div`
text-align: center;
font-size: 13px;
margin-bottom: 20px;

`
const BodyHead = styled.div`
margin: 10px 0;
font-weight: 600;
`
const BodyIcon = styled.div``

const BodyItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


const CircleIcon1 = styled(BsBarChartFill)`
font-size: 25px;
color: green;
opacity: 1;
`
const CircleIcon = styled(FaPiggyBank)`
font-size: 25px;
color: white;
opacity: 1;
`
const TransHeading = styled.div`
display: flex;
align-items: center;
font-size: 18px;
font-weight: 600;
`



const TransactionBody = styled.div`
/* padding: 20px 0; */
display: flex;
height: 70%;
justify-content: center;
align-items: center;
width: 100%;

`

const SeeAll = styled.div`
font-size: 17px;
font-family: 450;
color: #7b69dd;
`

const TransactionHeading = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
height: 15%;
border-bottom: 1px solid lightgray;
`

const TransactionWrapper = styled.div`
width: 94%;
display: flex;
flex-direction: column;
align-items: center;
`



const ChildrenHeading = styled.div`
width: 100%;
height: 15%;
display: flex;
align-items: center;
font-size: 18px;
font-weight: 600;
border-bottom: 1px lightgray solid;
margin-bottom: 20px;
`
const ChildrenWrapper = styled.div`
width: 92%;
display: flex;
flex-direction: column;
align-items: center;
`

const TransactionHolder = styled.div`
width: 47%;
height: 400px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border-radius: 10px;
display: flex;
justify-content: center;

`

const ChildrensAccountHolder = styled.div`
width: 47%;
height: 400px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
display: flex;
justify-content: center;
border-radius: 10px;
`

const ChildrensAndTransactionHolder = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`
const Amount = styled.div`
font-size: 30px;
font-weight: 600;
color: ${({cl})=>cl};
`

const Headings = styled.div`
font-size: 16px;
margin-bottom: 10px;
color: ${({cl})=>cl};
`
const DotIcon = styled(HiOutlineDotsVertical)`
font-size: 20px;
`

const Circle = styled.div`
width: 60px;
height: 60px;
font-weight:600;
border-radius: 50%;
background: ${({bg})=>bg};
margin-top: 10px;
opacity: ${({op})=>op};
align-items: center;
justify-content: center;
display: flex;
`

const CardHeading = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 50px;
color: ${({cl})=>cl};
`

const CardWrapper = styled.div`
width: 90%;
height: 85%;
display: flex;
flex-direction: column;
/* background: green; */
`
const ChartCard = styled.div`
border-radius: 10px;
width: 355px;
height: 230px;
display: flex;
justify-content: center;
background-color: ${({bg})=> bg};
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const ChartCardHolder = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
width: 100%;
margin-top: 45px;

`
const AddAccountButton = styled(Link)`
text-decoration: none;
width: 150px;
background-color: #1b69ec;
color: white;
/* color: purple; */
font-weight: 600;
height: 40px;
display: flex;
justify-content: center;
font-size: 13px;
align-items: center;
border-radius: 4px;
`

const InvestText = styled.div`
font-size: 17px;
font-weight: 450;
`
const InvestTextAndButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const WelcomeName = styled.div`
font-weight:600;
font-size:25px;
margin-bottom: 5px;
`
const FirstPart = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
const Wrapper = styled.div`
width: 93%;
display: flex;
flex-direction: column;
align-items:center;
margin-top: 40px;
`
const Container = styled.div`
width: 100%;
/* background: red; */
justify-content: center;
display: flex;
min-height: calc(100vh - 90px);
margin-bottom: 30px;
font-family: dm sans;
`


