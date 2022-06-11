import React from "react"
import styled from "styled-components"
import img from "../images/avatar.png"
import {IoIosArrowDown} from "react-icons/io"
import {MdNotifications} from "react-icons/md"
import {Link} from "react-router-dom"

const DashBoardHeader = () => {

    return (
       <Container>
           <Wrapper>
               <ItemsHolder>
                   <AddAcount to="/">Add New Account</AddAcount>
                   <NotificationIcon/>
                   <Image src={img}/>
                   <Name>Chioma Adesanya</Name>
                   <ArrowIcon/>
               </ItemsHolder>
           </Wrapper>
       </Container>
    )
}

export default DashBoardHeader

const AddAcount = styled(Link)`
text-decoration: none;
font-size: 14px;
font-family: dm sans;
background-color: #1b69ec;
padding: 10px 15px;
color: white;
font-weight: 600;
border-radius: 5px;
cursor: pointer;
transition: all 350ms;
:hover{
    transform: scale(1.01);
}
`
const ArrowIcon = styled(IoIosArrowDown)`
color: #1b69ec;
font-size: 25px;
cursor: pointer;
`

const Name = styled.div`
font-size: 14px;
font-weight: 450;
margin: 0 15px;
`

const Image = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
`
const NotificationIcon = styled(MdNotifications)`
font-size: 20px;
margin-left:40px;
margin-right:20px;
`
const ItemsHolder = styled.div`
display: flex;
align-items: center;
`
const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: flex-end;

/* background: white; */
`

const Container = styled.div`
width: 100%;
height: 90px;
display: flex;
justify-content: center;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

`
