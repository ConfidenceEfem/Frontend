import React from "react"
import styled from "styled-components"
import avatar from "../images/avatar.png"
import {FaWallet} from "react-icons/fa"
import WalletPage from "./WalletPage"
import InvestmentPage from "./InvestmentPage"
import {FiChevronDown} from "react-icons/fi"
import SavingsPag from "./SavingsPag"

const DashBoardPlan = () => {
    const [toggle, setToggle] = React.useState(false)

    return (
        <Container>
            <Wrapper>
               <Heading>
                   <HeadingDetail>
                       <ProfileImage src={avatar}/>
                       <AccoutNoAndName>
                       <AccoutNo>Account 1</AccoutNo>
                       <NameAndIcon>
                           {/* <AccountName>Adebimpe Adesanya</AccountName> */}
                           <Select>
                                <Options value="Chioma Adesanya" >Chioma Adesanya</Options>
                               <Options>Tobi Adesanya</Options>
                               <Options>Adebimpe Adesanya</Options>
                               <Options>Adebimpe Adesanya</Options>
                           </Select>
                           {/* <CaretIcon/> */}
                       </NameAndIcon>
                       </AccoutNoAndName>
                   </HeadingDetail>
                   <HeadingButton>View Account</HeadingButton>
               </Heading>
               <UserAccountMainCardHolder>
                   <AccountMaincardWrapper>
                   <WalletPage/>
                   <CardNavigations>
                       {toggle === false?
                        <Navs 
                       onClick={()=> {
                           setToggle(!toggle)
                       }}>Savings</Navs>
                        : 
                        <Nav 
                       onClick={()=> {
                        setToggle(!toggle)}}>
                        Savings
                        </Nav>
                        }
                       {toggle === true?
                        <Navs 
                       onClick={()=> {
                           setToggle(!toggle)
                       }}>Investment</Navs>
                        : 
                        <Nav 
                       onClick={()=> {
                        setToggle(!toggle)}}>
                        Investment
                        </Nav>
                        }
                       
                   </CardNavigations>
                    {toggle === false?<SavingsPag/> : <InvestmentPage/>}
                    
                   </AccountMaincardWrapper>
               </UserAccountMainCardHolder>
              
            </Wrapper>
        </Container>
    )
}

export default DashBoardPlan


const Div = styled.div``
const Options = styled.option`
cursor: pointer;
background: white;
color: green;
padding: 20px;
margin: 10px 0;

`
const Select = styled.select`
border:none;
outline: none;
font-family: work sans;
background: #fafcff;
font-size: 16px;
font-weight: 700;
letter-spacing: 0.1px;
cursor: pointer;
`
const Nav = styled.div`
font-size: 15px;
padding-bottom: 10px;
margin-right: 50px;
cursor: pointer;
transition: all 350ms;
`
const Navs = styled.div`
font-size: 15px;
font-weight: 700;
padding-bottom: 10px;
margin-right: 50px;
cursor: pointer;
transition: all 350ms;
border-bottom:  5px solid #1b69ec;
`
const CardNavigations = styled.div`
display:flex;
width: 100%;
border-bottom: 1px solid silver;
margin: 40px 0;
`
const AccountMaincardWrapper = styled.div`
display: flex;
flex-direction: column;
width: 95%;
height: 90%;
align-items: center;
`
const UserAccountMainCardHolder = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items:center;
border-radius: 10px;
min-height: 110vh;
height: 100%auto;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`
const CaretIcon = styled(FiChevronDown)`
cursor: pointer;
margin-left: 10px;
font-weight: 700;
font-size: 20px;
`

const AccountName = styled.div`
font-size: 16px;
font-weight: 700;
letter-spacing: 0.1px;
`

const NameAndIcon = styled.div`
display: flex;
align-items:center;
`
const AccoutNo = styled.div`
text-transform: uppercase;
color: gray;
font-size: 12px;
margin-bottom: 5px;
`

const ProfileImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
margin-right: 15px;
`
const AccoutNoAndName = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`

const HeadingButton = styled.div`
padding: 13px 40px;
border-radius: 5px;
font-size: 12px;
background-color: #eae9fe;
color: #7b69dd;
transition: all 350ms;
cursor: pointer;
:hover{
    transform: scale(1.02);
}
`

const HeadingDetail = styled.div`
display: flex;
align-items: center;
`
const Heading = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom: 40px;
`
const Wrapper = styled.div`
width: 93%;
display: flex;
flex-direction: column;
align-items:center;
margin-top: 50px;
`
const Container = styled.div`
width: 100%;
justify-content: center;
display: flex;
min-height: calc(100vh - 90px);

`