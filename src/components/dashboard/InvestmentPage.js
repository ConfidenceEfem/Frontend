import React from 'react'
import styled from "styled-components"
import {MdNavigateNext} from "react-icons/md"

const InvestmentPage = () => {
  return (
    <LastCard>
    
    <CreateSavingsPlan>
        <SavingsPlanWrapper>
            <SavingsHeading>Current Investment Plans</SavingsHeading>
            <CurrentCardHold>
                <CurrentCard>
                    <CurrentCardWrapper>
                       
                         <CurrentPlan>
                         <CurrentIconCircle>
                       <CurrentIcon/>
                       </CurrentIconCircle>
                             <CurrentMainPlan>
                             <PlanHead>Plan</PlanHead>
                             <PlanAmount>Kolo</PlanAmount>
                             </CurrentMainPlan>
                         </CurrentPlan>
                         <CurrentSaved>
                         <PlanHead>Total Investment</PlanHead>
                         <PlanAmount>N239,000</PlanAmount>
                         </CurrentSaved>
                         <CurrentDuration>
                         <PlanHead>Return</PlanHead>
                         <PlanAmount>10% - <span style={{fontSize: "11px",color:"lightgray"}}>91 Days</span></PlanAmount>
                         </CurrentDuration>
                        <NextIcon1 color="#7b69dd"/>
                    </CurrentCardWrapper>
                </CurrentCard>

            </CurrentCardHold>
            </SavingsPlanWrapper>
    </CreateSavingsPlan>
    <CreateSavingsPlan>
        <SavingsPlanWrapper>
            <SavingsHeading>Create New Investment Plan</SavingsHeading>
            <SavingsCardHolder>
                <SavingsCard bg="#d7eeff">
                    <SavingsCardWrapper>
                    <IconAndDetails>
                        <IconImage/>
                        <DetailsCont>
                            <DetailsTitle>Treasury Bills</DetailsTitle>
                            <MainDetails>
                                Lend money to the Government
                                and get a return after your 
                                specified period
                            </MainDetails>
                        </DetailsCont>
                    </IconAndDetails>
                        <NextIcon/>
                    </SavingsCardWrapper>
                </SavingsCard>
                <SavingsCard bg="#fff6de">
                    <SavingsCardWrapper>
                    <IconAndDetails>
                        <IconImage/>
                        <DetailsCont>
                            <DetailsTitle>Stocks</DetailsTitle>
                            <MainDetails>
                            Buy stocks from top Nigerian companies
                            long as long as you want at 20% per anum
                            </MainDetails>
                        </DetailsCont>
                    </IconAndDetails>
                        <NextIcon/>
                    </SavingsCardWrapper>
                </SavingsCard>
                <SavingsCard bg="#d7eeff">
                    <SavingsCardWrapper>
                    <IconAndDetails>
                        <IconImage/>
                        <DetailsCont>
                            <DetailsTitle>Real Estate</DetailsTitle>
                            <MainDetails>
                               Invest in treasury bills for
                               as long as you want at 20% per anum
                            </MainDetails>
                        </DetailsCont>
                    </IconAndDetails>
                        <NextIcon/>
                    </SavingsCardWrapper>
                </SavingsCard>  
            </SavingsCardHolder>
        </SavingsPlanWrapper>
    </CreateSavingsPlan>
    </LastCard>
  )
}

export default InvestmentPage


const PlanAmount = styled.div`
font-weight: 600;
font-size: 12px;
margin-top: 5px;
`
const PlanHead = styled.div`
font-size: 11px;
color: lightgray;
`

const CurrentMainPlan = styled.div`
display: flex;
flex-direction:column;
`
const CurrentIconCircle = styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
display: flex;
justify-content:center;
align-items: center;
background:#daecda;
margin-right: 20px;
`
const CurrentDuration = styled.div``
const CurrentSaved = styled.div``

const CurrentPlan = styled.div`
display: flex;

`

const CurrentIcon = styled.img``

const CurrentCardWrapper = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
`

const CurrentCard = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border-radius: 4px;
margin: 10px 0;

`
const CurrentCardHold = styled.div`
display: flex;
flex-direction:column;
width: 100%;
align-items: center;
`
const MainDetails = styled.div`
font-size: 11px;
line-height: 20px;
span{
    font-weight: bold;
    font-size: 10px;
}
`

const DetailsTitle = styled.div`
font-size: 17px;
font-weight: 600;
margin-bottom: 10px;
`

const DetailsCont = styled.div`
display: flex;
flex-direction: column;
`

const IconImage = styled.div`
width: 70px;
height: 70px;
margin-right: 20px;
`

const NextIcon1 = styled(MdNavigateNext)`
font-size: 22px;
cursor: pointer;
color: red;
`
const NextIcon = styled(MdNavigateNext)`
font-size: 22px;
cursor: pointer;
`
const IconAndDetails = styled.div`
display: flex;
width: 80%;
`

const SavingsCardWrapper = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
`

const SavingsCard = styled.div`
width: 100%;
display: flex;
justify-content: center;
height: 95px;
background-color: ${({bg})=>bg};
margin: 10px 0;
border-radius: 5px;
`

const SavingsCardHolder = styled.div`
display: flex;
width: 100%;
flex-direction: column;
`
const SavingsHeading = styled.div`
font-size: 16px;
font-weight: 600;
letter-spacing: 0.1px;
margin-bottom: 10px;
display: flex;
`
const SavingsPlanWrapper = styled.div`
width: 90%;
margin-top: 20px;
display: flex;
flex-direction: column;
/* align-items: center; */
`
const CreateSavingsPlan = styled.div`
display: flex;
width: 46%;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
border-radius: 10px;
height: 100%;
justify-content: center;
`
const Navs = styled.div`
font-size: 15px;
font-weight: 700;
padding-bottom: 10px;
margin-right: 50px;
cursor: pointer;
transition: all 350ms;
border-bottom: 5px solid #7b69dd;

`
const LastCard = styled.div`
width: 100%;
min-height: 400px;
height: 100%auto;
justify-content: space-between;
display: flex;
`

