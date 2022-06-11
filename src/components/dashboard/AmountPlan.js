import React from 'react'
import styled from "styled-components"
import avatar from "../images/avatar.png"
import {MdKeyboardArrowLeft} from "react-icons/md"

const AmountPlan = () => {
    const [counter, setCounter] = React.useState(0)
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
               </Heading>
               <BodyCard>
                   <BodyHeading>
                       <IconAndBack>
                           <BackIcon/>
                           <Back>Back</Back>
                       </IconAndBack>
                       <IconAndCreate>
                           <EarliIcon/>
                           <CreateEarli>Create An Earli Saving Plan</CreateEarli>
                       </IconAndCreate>
                       <Div>Hello</Div>
                   </BodyHeading>
                   <AnotherWrapper>
                       <Steps>Step 2 of 3</Steps>
                       <ProgressBar>
                           <ProgressShow></ProgressShow>
                       </ProgressBar>
                       <MainCardCheck>
                           <CardQuestion>
                               Amount and Duration
                           </CardQuestion>
                           <InputsCard>
                                <TextAndInputs>
                                    <Text>How Much Daily</Text>
                                    <Inputs placholder="Input Amount"/>
                                </TextAndInputs>
                                <TextAndInputs>
                                    <Text>Start Date</Text>
                                    <Inputs placholder="Input Amount" type="Date"/>
                                </TextAndInputs>
                                <TextAndInputs>
                                    <Text>Duration</Text>
                                   <Selects1>
                                       <Options1>1 Months</Options1>
                                       <Options1>2 Months</Options1>
                                       <Options1>3 Months</Options1>
                                       <Options1>4 Months</Options1>
                                       <Options1>5 Months</Options1>
                                       <Options1>6 Months</Options1>
                                   </Selects1>
                                </TextAndInputs>
                           </InputsCard>
                           <Button>
                               Next
                           </Button>
                       </MainCardCheck>
                   </AnotherWrapper>
               </BodyCard>
      </Wrapper>
    </Container>
  )
}

export default AmountPlan


const Options1 = styled.option`
cursor: pointer;
background: white;
color: green;
padding: 20px;
margin: 10px 0;
`

const Selects1 = styled.select`
font-family: work sans;
background: white
font-size: 15px;
height: 35px;
font-weight: 600;
letter-spacing: 0.1px;
cursor: pointer;
`

const Inputs = styled.input`
width: 100%;
display: flex;
height: 35px;

::placeholder{
    font-size: 12px;
    font-family: dm sans;
}

`

const Text = styled.div`
font-size: 12px;
font-weight: bold;
font-family: dm sans;
margin-bottom: 5px;
`

const TextAndInputs = styled.div`
display: flex;
flex-direction: column;
margin: 10px 0;
`

const InputsCard = styled.div`
width: 80%;
display: flex;
flex-direction: column;
`

const Button = styled.div`
background: #1b69ec;
font-family: dm sans;
font-size: 13px;
cursor: pointer;
color: white;
padding: 10px 45px;
border-radius: 3px;
transition: all 350ms;
:hover{
    transform: scale(1.02);
}
`

const TickText = styled.div`
font-size: 13px;

`

const TicAndText = styled.div`
display: flex;
align-items:center;
margin: 5px 0;
`

const Tick = styled.input`
width: 15px;
height: 15px;
border-radius: 50%;
margin-right: 10px;
`

const TickCard = styled.div`
width: 80%;
display: flex;
flex-direction: column;
margin-top: 30px;
margin-bottom: 30px;
`

const CardDesc = styled.div`
text-align: center;
font-size: 11px;
`

const CardQuestion = styled.div`
font-size: 15px;
font-weight: 600;
text-align: center;
margin-top: 25px;
margin-bottom: 8px;

`

const ProgressShow = styled.div`
width: 70%;
display: flex;
background: #7b69dd;
border-radius: 10px;

`
const MainCardCheck = styled.div`
width: 100%;
display: flex;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
flex-direction: column;
height: 350px;
align-items: center;
`

const ProgressBar = styled.div`
width: 100%;
display: flex;
height: 5px;
border-radius: 10px;
background: #fafcff;
margin-bottom: 10px;
`

const Steps = styled.div`
width: 100%;
display: flex;
font-family: dm sans;
font-size: 13px;
margin-bottom: 5px;
`

const AnotherWrapper = styled.div`
width: 55%;
`

const CreateEarli = styled.div`
font-size: 14px;
font-weight: 600;
`

const EarliIcon = styled.div``

const IconAndCreate = styled.div`
display: flex;
`

const Back = styled.div`
font-size: 14px;
`

const BackIcon = styled(MdKeyboardArrowLeft)``

const IconAndBack = styled.div`
display: flex;
font-weight: 500;
align-items: center;
color: #1b69ec;
cursor: pointer;

`

const BodyHeading = styled.div`
display: flex;
width: 90%;
justify-content: center;
height: 50px;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`
const BodyCard = styled.div`
display: flex;
background-color: white;
width: 100%;
height: 480px;
flex-direction: column;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const Div = styled.div`
/* display: none; */
color: white;
`
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
width: 50%;
display: flex;
align-items: center;
flex-direction: column;
margin-top: 40px;

`

const Container = styled.div`
width: 100%;
justify-content: center;
display: flex;
min-height: calc(100vh - 90px);
margin-bottom: 30px;
font-family: dm sans;
`
