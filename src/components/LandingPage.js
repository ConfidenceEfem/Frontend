import React from "react"
import AboutUs from "./AboutUs"
import Header from "./Header"
import HeroPage from "./HeroPage"
import InvestmentPlan from "./InvestmentPlan"
import OneAccount from "./OneAccount"
import img from "./images/img.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"
import WhyChooseUs from "./WhyChooseUs"
import Feedback from "./Feedback"
import FAQcomp from "./FAQcomp"
import Subscribe from "./Subscribe"
import Footer from "./Footer"


const LandingPage = ()=>{
    return(
        <div>
        <Header/>
        <HeroPage/>
        <AboutUs/>
        <OneAccount/>
        <InvestmentPlan  
        image={img}
        fdd
        topic="Get Access to Variety of Investment Plans"
        desc="Ranging from shares, to stocks, to treasury bills.
        You can invest for your children as a Parent, you can invest
        invest on this platform for free and no hassle. "
       bg
        />
        {/* <InvestmentPlan 
        image={img2}
        bg
        topic="Create investment portfolios for financial freedom"
        desc="Creating an account is as
        easy as you can think,
       no stress, hassle free
        and you can start 
       saving for your child.
       Creating an account is as
        easy as you can think,
       no stress, hassle free
        and you can start 
       saving for your child."
        /> */}
        <InvestmentPlan 
        image={img3}
   
        topic="Recieve Payments With Unique Payment Links"
        desc=
        "Get extended family to gift your children money with our payment link. All children added to the platform have a bespoke link that can be shared with everyone and funds gifted to them would be crdited on their wallet with us."
        bt
        />
        <WhyChooseUs/>
        <Feedback/>
        <FAQcomp/>
        <Subscribe/>
        <Footer/>
        </div>
    )
}

export default LandingPage