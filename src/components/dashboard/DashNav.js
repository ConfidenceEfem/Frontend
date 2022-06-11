import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import {SiMicrosoft} from "react-icons/si"
import {FaMoneyBill} from "react-icons/fa"
import {BiLineChart,BiHeadphone} from "react-icons/bi"
import {FiLogOut} from "react-icons/fi"
import {MdSettings} from "react-icons/md"
import {BsServer} from "react-icons/bs"
import gift from "../images/gift.png"
import {NavLink} from "react-router-dom"



const DashNav = () => {
    return (
        <Container>
            <Wrapper>
               <LogoHolder>
               <Logo src={logo}/>
               </LogoHolder>
               <OtherItemsHolder>
               <NavigationsAndIcon>
                   <NavsAndIcon to="/">
                       <Icon/>
                       <Navs>DashBoard</Navs>
                   </NavsAndIcon>
                   <NavsAndIcon to="/">
                       <Icon1/>
                       <Navs >Plans</Navs>
                   </NavsAndIcon>
                   <NavsAndIcon to="/">
                       <Icon2/>
                       <Navs>Payment</Navs>
                   </NavsAndIcon>
                   <NavsAndIcon to="/">
                       <Icon3/>
                       <Navs>Analytics</Navs>
                   </NavsAndIcon>
                   <NavsAndIcon to="/">
                       <Icon4/>
                       <Navs>Settings</Navs>
                   </NavsAndIcon>
                   <NavsAndIcon to="/">
                       <Icon5/>
                       <Navs>Help Activity</Navs>
                   </NavsAndIcon>
               </NavigationsAndIcon>
               <Line/>
              
               <LogoutAndIcon>
                   <LogoutIcon/>
                   <Logout>Log Out</Logout>
               </LogoutAndIcon>
               </OtherItemsHolder>
            </Wrapper>
        </Container>
    )
}

export default DashNav

const Logout = styled.div`
font-size: 13px;
`

const LogoutIcon = styled(FiLogOut)`
margin-right: 25px;
`

const LogoutAndIcon = styled.div`
width: 80%;
display: flex;
font-family: work sans;
color: #7b69dd;
font-weight: 500;
font-size: 20px;
align-items: center;
cursor: pointer;
`

const Line = styled.div`
width: 80%;
border-bottom: 1px solid lightgray;
margin-top: 50px;
margin-bottom: 120px;
`

const Navs = styled.div`
margin-left: 15px;
font-size: 13px;
font-weight: 600;
letter-spacing: 0.1px;

`
const Icon5 = styled(BiHeadphone)`
font-size: 15px;
`
const Icon4 = styled(MdSettings)`
font-size: 15px;
`
const Icon3 = styled(BiLineChart)`
font-size: 15px;
`
const Icon2 = styled(FaMoneyBill)`
font-size: 15px;
`
const Icon1 = styled(BsServer)`
font-size: 15px;
`
const Icon = styled(SiMicrosoft)`
font-size: 15px;
`
const NavsAndIcon = styled(NavLink)`
display: flex;
width: 100%;
padding-left: 38px;
height: 35px;
align-items: center;
color: lightgray;
cursor: pointer;
margin: 10px 0;
text-decoration: none;
/* color #7b69dd; */
/* background-color: red; */
&.active{
    border-left: #1b69ec 5px solid;
    color: #1b69ec;
}
`
const NavigationsAndIcon = styled.div`
width: 100%;
display: flex;
/* height: 200px; */
margin-top:40px;
flex-direction: column;
`

const OtherItemsHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
width: 100%;
height: calc(100% - 10%);

`
const Logo = styled.img`
height: 40px;
width:220px;
object-fit: cover;
`
const LogoHolder = styled.div`
width: 100%;
/* background: green; */
height: 6%;
display: flex;
justify-content: flex-start;
`
const Wrapper = styled.div`
height: 97%;
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
/* background: red; */
`
const Container = styled.div`
width: 18%;
display: flex;
/* min-height: 100vh; */
height: 100%;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
align-items: flex-end;

`